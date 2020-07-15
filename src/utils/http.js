import axios from 'axios'
import eventBus from './eventBus'

const appJson = 'application/json'
const defaults = {
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Content-type': appJson,
    Accept: appJson
  },
  timeout: 15000
}

// allow user define
export function createAxios (options) {
  const settings = Object.assign({}, defaults, options)
  const instance = axios.create(settings)
  return {
    get: async (...args) => {
      try {
        eventBus.emit('module_loading_startLoading')
        const response = await instance.get(...args)
        return response
        // eslint-disable-next-line no-useless-catch
      } catch (e) {
        throw e
      } finally {
        eventBus.emit('module_loading_stopLoading')
      }
    },
    silentGet: async (...args) => {
      // eslint-disable-next-line no-useless-catch
      try {
        return await instance.get(...args)
      } catch (e) {
        throw e
      }
    }
    // Todo: add other REST actions
  }
}

export default createAxios()
