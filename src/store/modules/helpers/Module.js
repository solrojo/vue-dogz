import api from '@/helpers/api'

export default class Module {
  constructor (props) {
    this.namespaced = true

    this.state = {
      loading: false,
      url: props.url,
      data: []
    }

    this.mutations = {
      setData: this.mutationSetData.bind(this),
      setLoading: this.mutationSetLoading.bind(this)
    }

    this.actions = {
      getData: this.actionGetData.bind(this)
    }
  }

  mutationSetData (state, payload) {
    state.data.push(...payload)
  }

  mutationSetLoading (state, payload) {
    state.loading = payload
  }

  async actionGetData ({ commit, state }) {
    if (state.loading) {
      return
    }
    commit('setLoading', true)
    const { data } = await api.get(state.url)
    commit('setData', data)
    commit('setLoading', false)
  }
}
