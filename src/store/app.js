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
    connecting: false,
    connection: {
      valid: false,
      host: null,
      globalApiKey: null,
    },
    instancesKeys: {},
    instancesList: [],

    // lista de "contatos" de conexoes
    connectionsList: [],
  }),

  actions: {
    async setConnection({ host, globalApiKey }) {
      try {
        this.connecting = true
        const response = await axios({
          method: 'GET',
          baseURL: host,
          headers: {
            'Content-Type': 'application/json',
            'apikey': globalApiKey
          },
          url: '/instance/fetchInstances'
        })

        if (!response.data || !Array.isArray(response.data)) throw new Error('Essa conexão não é uma instância da evolution-api')


        this.saveConnection({ host, globalApiKey })
        this.instancesList = response.data
      } catch (e) {
        this.connection.valid = false
        throw e.response?.data?.response?.message || e.response || e
      } finally {
        this.connecting = false
      }
    },

    async loadInstance(instanceName) {
      try {
        console.log('loadInstance', instanceName)
        // const { host, globalApiKey } = this.connection;
        return this.reconnect()
        // const response = await axios({
        //   method: 'GET',
        //   baseURL: host,
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'apikey': globalApiKey
        //   },
        //   url: `/instance/fetchInstances?instanceName=${instanceName}`
        // })

      } catch (e) {
        this.connection.valid = false
        throw e.response?.data?.response?.message || e.response || e
      }
    },
    async logout() {
      this.connection = {
        valid: false,
        host: null,
        globalApiKey: null,
      }
      this.instancesList = []
      this.instancesKeys = {}
      this.connectionsList = []
      window.localStorage.clear();
    },

    async reconnect() {
      try {
        const { host, globalApiKey } = this.connection
        if (!host || !globalApiKey) {
          throw new Error('Invalid connection')
        }
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
      } finally {
        this.connecting = false
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

    removeConnection({ host }) {
      const currentKey = this.connectionsList.findIndex(
        (item) => item.host === host
      )

      if (currentKey !== -1)
        this.connectionsList.splice(currentKey, 1)

      this.saveLocalStorage()
    },
    saveConnection({ host, globalApiKey }) {
      this.connection = {
        valid: true,
        host,
        globalApiKey,
      }

      const currentKey = this.connectionsList.findIndex(
        (item) => item.host === host
      )
      if (currentKey === -1) {
        this.connectionsList.push({ host, globalApiKey })
      } else {
        this.connectionsList[currentKey] = { host, globalApiKey }
      }

      this.saveLocalStorage()
    },

    saveLocalStorage() {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('connection', JSON.stringify(this.connection))
        window.localStorage.setItem('connectionsList', JSON.stringify(this.connectionsList))
      }
    },
    async loadConnection() {
      if (typeof window !== 'undefined') {
        const connectionsList = window.localStorage.getItem('connectionsList')
        if (connectionsList) {
          this.connectionsList = JSON.parse(connectionsList || '[]')
        }

        const connection = window.localStorage.getItem('connection')
        if (connection) {
          this.connection = JSON.parse(connection || '{}')
          this.connecting = true
          return this.reconnect()
        }
      }
    },
  }
})
