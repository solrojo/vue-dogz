import Module from '@/store/modules/helpers/Module'

const ALPHABET = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'.split(',')

class BreedSelector extends Module {
  constructor (props) {
    super(props)
    /** @Override */
    this.state.data = {}
    /** @Override */
    this.mutations.setData = this.mutationSetData.bind(this)
  }

  mutationSetData (state, payload = {}) {
    const result = {}
    ALPHABET.forEach(char => {
      const arr = Object.keys(payload).filter(el => {
        return el[0] === char.toLowerCase()
      })
      if (!arr.length) {
        return
      }
      result[char] = arr.sort()
    })
    state.data = result
  }
}

export default new BreedSelector({
  url: '/breeds/list/all'
})
