import getActions from './actions'
import getMutations from './mutations'

export default function ({Vue, LocalStorage, name, errorHandler, filterHandler}) {
  let actions = getActions({Vue, errorHandler}),
    mutations = getMutations({Vue, LocalStorage, filterHandler})

  const state = {
    name: name,
    active: 0,
    messages: [],
    filter: '',
    mode: null,
    from: 0,
    limit: 1000,
    cols: [],
    newMessagesCount: 0,
    offline: false,
    selected: null
  }

  return {
    namespaced: true,
    state,
    actions,
    mutations
  }
}
