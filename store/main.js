export const state = () => ({
  ui: {
    viewPort: {
      width: 0,
      height: 0,
      scroll: 0,
      scrollable: true
    },
    document: {
      width: 0,
      height: 0,
    },
  },
  scenes: {
    amount: 0,
    currentScene: -1,
    tutorial: true,
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
  },
  ADD_SCENE(state) {
    const amount = state.scenes.amount + 1
    state.scenes = {
      ...state.scenes,
      amount,
    }
  },
  SET_TUTORIAL(state, { isSet }) {
    state.scenes = {
      ...state.scenes,
      tutorial: isSet,
    }
  },
  SET_SCROLLABLE(state, { scrollable }) {
    state.ui.viewPort = {
      ...state.ui.viewPort,
      scrollable,
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
  setScrollable({ commit }, scrollable) {
    commit('SET_SCROLLABLE', { scrollable })
  },
  addScene({ commit }) {
    commit('ADD_SCENE')
  },
  setTutorial({ commit }, isSet) {
    commit('SET_TUTORIAL', { isSet })
  },
}
