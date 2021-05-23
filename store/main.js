export const state = () => ({
  ui: {
    viewPort: {
      width: 0,
      height: 0,
      scroll: 0,
    },
    document: {
      width: 0,
      height: 0,
    },
  },
})

export const getters = {
  getViewportSizes(state) {
    return {
      width: state.ui.viewPort.width,
      height: state.ui.viewPort.height,
    }
  },
  getScroll(state) {
    return state.ui.viewPort.scroll
  },
}

export const mutations = {
  SET_VIEWPORT_SIZE(state, { width, height }) {
    state.ui.viewPort = {
      ...state.ui.viewPort,
      width,
      height,
    }
  },
  SET_SCROLL(state, { scroll }) {
    state.ui.viewPort = {
      ...state.ui.viewPort,
      scroll,
    }
  },
  SET_DOCUMENT_SIZE(state, { width, height }) {
    state.ui.document = {
      ...state.ui.document,
      width,
      height,
    }
  }
}

export const actions = {
  setViewportSize({ commit }, { width, height }) {
    commit('SET_VIEWPORT_SIZE', { width, height })
  },
  setScrollLevel({ commit }, scroll) {
    commit('SET_SCROLL', { scroll })
  },
  setDocumentSize({ commit }, { width, height }) {
    commit('SET_DOCUMENT_SIZE', { width, height })
  },
}
