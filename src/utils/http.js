import axios from 'axios'
import eventBus from './eventBus'

const appJson = 'application/json'
const defualt = {
  headers: {
    'Content-type': appJson,
    Accept: appJson
  },
  timeout: 15000
}

// allow user define
export function createAxios (options) {
  const settings = Object.assign({}, defualt, options)
  const http = axios.create(settings)
  return {
    async get (...args) {
      try {
        eventBus.emit('module_loading_startLoading')
        return await http.get(...args)
        // eslint-disable-next-line no-useless-catch
      } catch (e) {
        throw e
      } finally {
        eventBus.emit('module_loading_stopLoading')
      }
    },
    async silentGet (...args) {
      // eslint-disable-next-line no-useless-catch
      try {
        return await http.get(...args)
      } catch (e) {
        throw e
      }
    }
  }
}

export default createAxios()
