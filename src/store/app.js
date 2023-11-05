// Utilities
import axios from 'axios'
import { defineStore } from 'pinia'


export const useAppStore = defineStore('app', {
  getters: {
    validConnection: (state) => state.connection.valid,
    instances: (state) => state.instancesList,
    getInstance: (state) => (instanceName) => state.instancesList.find(
      (instance) => instance.instance.instanceName === instanceName
    ),
    getInstanceApiKey: (state) => (instance) => {
      return state.getInstance(instance).instance.apiKey ||
        state.instancesKeys[instance]
    },
  },
  state: () => ({
    connection: {
      valid: false,
      host: null,
      globalApiKey: null,
    },
    instancesKeys: {},
    instancesList: [],
  }),

  actions: {
    async setConnection({ host, globalApiKey }) {
      try {
        const responde = await axios({
          method: 'GET',
          baseURL: host,
          headers: {
            'Content-Type': 'application/json',
            'apikey': globalApiKey
          },
          url: '/instance/fetchInstances'
        })

        this.saveConnection({ host, globalApiKey })

        this.instancesList = responde.data
      } catch (e) {
        this.connection.valid = false
        throw e.response?.data?.response?.message || e.response || e

      }
    },

    async loadInstance(instanceName) {
      try {
        const { host, globalApiKey } = this.connection;

        const response = await axios({
          method: 'GET',
          baseURL: host,
          headers: {
            'Content-Type': 'application/json',
            'apikey': globalApiKey
          },
          url: `/instance/fetchInstances?instanceName=${instanceName}`
        })

      } catch (e) {
        this.connection.valid = false
        throw e.response?.data?.response?.message || e.response || e
      }
    },

    async reconnect() {
      try {
        const { host, globalApiKey } = this.connection
        const response = await axios({
          method: 'GET',
          baseURL: host,
          headers: {
            'Content-Type': 'application/json',
            'apikey': globalApiKey
          },
          url: '/instance/fetchInstances'
        })

        this.saveConnection({ host, globalApiKey })

        this.instancesList = response.data
      } catch (e) {
        this.connection.valid = false
        throw e.response?.data?.response?.message || e.response || e
      }
    },

    setInstanceStatus(instance, status) {
      const index = this.instancesList.findIndex(
        (instance) => instance.instance.instanceName === instance
      )
      this.instancesList[index].instance.status = status
    },

    addInstanceKey({ instance, key }) {
      this.instancesKeys[instance] = key
    },


    saveConnection({ host, globalApiKey }) {
      this.connection = {
        valid: true,
        host,
        globalApiKey,
      }
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('connection', JSON.stringify({
          host,
          globalApiKey,
        }))
      }
    },
    async loadConnection() {
      if (typeof window !== 'undefined') {
        const connection = window.localStorage.getItem('connection')
        if (connection) {
          this.connection = JSON.parse(connection)
          return this.reconnect()
        }
      }
    }
  }
})
