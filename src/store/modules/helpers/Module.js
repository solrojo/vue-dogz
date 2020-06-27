import api from '@/helpers/api'

export default class Module {
  constructor (props) {
    this.namespaced = true

    this.state = {
      loading: false,
      url: props.url,
      prevData: null,
      sorted: false,
      data: []
    }

    this.mutations = {
      setData: this.mutationSetData.bind(this),
      setLoading: this.mutationSetLoading.bind(this),
      toggleSortData: this.mutationToggleSortData.bind(this)
    }

    this.actions = {
      getData: this.actionGetData.bind(this)
    }
  }

  mutationSetData (state, payload) {
    state.data.push(...payload)
    if (state.sorted) {
      state.data.sort((a, b) => a.altText.localeCompare(b.altText))
    }
  }

  mutationSetLoading (state, payload) {
    state.loading = payload
  }

  mutationToggleSortData (state) {
    try {
      if (state.sorted) {
        state.data = JSON.parse(state.prevData)
        state.sorted = false
      } else {
        state.prevData = JSON.stringify(state.data)
        state.data.sort((a, b) => a.altText.localeCompare(b.altText))
        state.sorted = true
      }
    } catch (err) {
      console.warn(err)
    }
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
