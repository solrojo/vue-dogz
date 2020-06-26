import Module from '@/store/modules/helpers/Module'
import storage from '@/helpers/storage'

class BreedsFavorites extends Module {
  constructor (props) {
    super(props)
    /** @Override */
    this.mutations.setData = this.mutationSetData.bind(this)
    /** @Override */
    this.actions.getData = this.actionGetData.bind(this)
  }

  mutationSetData (state, payload) {
    state.data = payload
  }

  async actionGetData ({ commit, state }) {
    const data = storage.getItem('favorites') || []
    commit('setData', data)
  }
}

export default new BreedsFavorites({})
