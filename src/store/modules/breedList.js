import Module from '@/store/modules/helpers/Module'

class BreedList extends Module {
  constructor (props) {
    super(props)
    /** @Override */
    this.mutations.setUrl = this.mutationSetUrl.bind(this)
    /** @Override */
    this.actions.getData = this.actionGetData.bind(this)
  }

  mutationSetUrl (state, payload) {
    state.url = payload
  }

  async actionGetData (context, name) {
    context.commit('setUrl', `/breed/${name}/images/random/20/alt`)
    await super.actionGetData(context)
  }
}

export default new BreedList({
  url: ''
})
