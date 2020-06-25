export default {
  getItem (key) {
    if (!key) {
      return
    }
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (err) {
      console.warn(err)
    }
  },
  setItem (key, data) {
    if (!key || !data) {
      return
    }
    localStorage.setItem(key, JSON.stringify(data))
  }
}
