export const state = () => ({
  dataItems: new Map(),
})

export const getters = {
  getTitleByScene(state) {
    return (sceneId) => {
      const scene = state.dataItems.get(sceneId)
      const title = scene?.menuTitle || scene?.title || " "
      return title
    }
  },
}

export const mutations = {
  ADD_DATA(state, { index, data }) {
    const newDataItems = new Map(state.dataItems)
    newDataItems.set(index, data)
    state.dataItems = newDataItems
  },
}

export const actions = {
  addData({ commit }, { index, data }) {
    commit('ADD_DATA', { index, data })
  },
}
