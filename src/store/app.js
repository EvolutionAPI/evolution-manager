// Utilities
import axios from 'axios'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  getters: {
    validConnection: (state) => state.connection.valid,
    instances: (state) => state.instancesList,
  },
  state: () => ({
    connection: {
      valid: false,
      host: null,
      globalApiKey: null,
    },
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

        this.connection.valid = true
        this.connection.host = host
        this.connection.globalApiKey = globalApiKey
        this.instancesList = responde.data
      } catch (e) {
        this.connection.valid = false
        throw e.response?.data?.response?.message || e.response || e

      }
    },
    async reconnect() {
      try {
        const { host, globalApiKey } = this.connection
        const responde = await axios({
          method: 'GET',
          baseURL: host,
          headers: {
            'Content-Type': 'application/json',
            'apikey': globalApiKey
          },
          url: '/instance/fetchInstances'
        })

        this.connection.valid = true
        this.connection.host = host
        this.connection.globalApiKey = globalApiKey
        this.instancesList = responde.data
      } catch (e) {
        this.connection.valid = false
        throw e.response?.data?.response?.message || e.response || e
      }
    }
  }
})
