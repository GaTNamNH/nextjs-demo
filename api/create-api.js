/**
 * @author Nam NH
 * Function to create and configure ApiClient
 */

import Api from './api'

export default () => {
  let apiDefaultConfig = {
    headers: {
      'Accept': 'application/json'
    },
    credentials: 'include'
  }

  let api = new Api(apiDefaultConfig)
  return api
}

