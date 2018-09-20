import getActions from './actions'
import getMutations from './mutations'

export default function ({Vue, LocalStorage, name, errorHandler, filterHandler, newMessagesInterseptor}) {
  let actions = getActions({Vue, errorHandler}),
    mutations = getMutations({Vue, LocalStorage, filterHandler, newMessagesInterseptor})

  const state = {
    name: name,
    active: 0,
    messages: [],
    filter: '',
    sysFilter: '',
    mode: null,
    from: 0,
    to: 0,
    limit: 1000,
    reverse: false,
    cols: [],
    newMessagesCount: 0,
    offline: false,
    selected: [],
    sortBy: null
  }

  return {
    namespaced: true,
    state,
    actions,
    mutations
  }
}
