export const state = () => ({
  explorer: {
    focusedId: -1,
    openedId: -1,
    activeContent: {},
  },
})

export const getters = {}

export const mutations = {
  SET_EXPLORER_FOCUSED(state, { explorerId, activeContent }) {
    state.explorer = {
      ...state.explorer,
      focusedId: explorerId,
      activeContent: activeContent
    }
  },
  SET_EXPLORER_OPENED(state, { explorerId, activeContent }) {
    state.explorer = {
      ...state.explorer,
      focusedId: explorerId,
      openedId: explorerId,
      activeContent: activeContent
    }
  },
}

export const actions = {
  setExplorerFocused({ commit }, { explorerId, activeContent }) {
    commit('SET_EXPLORER_FOCUSED', { explorerId, activeContent  })
  },
  setExplorerOpened({ commit }, { explorerId, activeContent }) {
    commit('SET_EXPLORER_FOCUSED', { explorerId, activeContent  })
    commit('SET_EXPLORER_OPENED', { explorerId, activeContent })
  },
  blurExplorer({ commit }) {
    const explorerId = -1
    const activeContent = {};
    commit('SET_EXPLORER_FOCUSED', { explorerId, activeContent })
  },
  closeExplorer({ commit }) {
    const explorerId = -1
    const activeContent = {};
    commit('SET_EXPLORER_OPENED', { explorerId, activeContent })
  }
}
