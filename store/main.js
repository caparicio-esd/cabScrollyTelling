export const state = () => ({
  ui: {
    viewPort: {
      width: 0,
      height: 0,
      scroll: 0,
      scrollable: true,
    },
    document: {
      width: 0,
      height: 0,
    },
  },
  scenes: {
    amount: 0,
    scenes: new Map(),
    currentScene: -1,
    tutorial: true,
  },
  utils: {
    prevYear: 0
  }
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
  getSceneDuration(state) {
    return (id) => {
      return state.scenes.scenes.get(id)?.duration()
    }
  },
  getSceneScrollOffset(state) {
    return (id) => {
      return state.scenes.scenes.get(id)?.scrollOffset()
    }
  },
  getTotalScenesDuration(state) {
    return Array.from(state.scenes.scenes.values()).reduce((total, scene, i) => {
      return total + scene.duration()
    }, 0)
  },
  getTotalScenesDuration02(state) {
    const scenes = state.scenes.scenes
    const lastScene = scenes.get(scenes.size - 1)
    if (lastScene) {
      return lastScene.scrollOffset() + lastScene.duration() + 8 // 8 for the last padding
    }
  },
  // inWhichSceneIAmOld(state) {
  //   const scroll = getters.getScroll(state)
  //   const index = state.scenes.scenes.findIndex((scene, id) => {
  //     const slimits = getters.scrollOffsetLimitsByScene(state)(id)
  //     getters.scrollOffsetLimitsByScene02(state, id)
  //     return scroll > slimits[0] && scroll <= slimits[1]
  //   })
  //   return Math.max(0, index)
  // },
  inWhichSceneIAm(state) {
    const scroll = getters.getScroll(state)
    let index = -1;
    Array.from(state.scenes.scenes.entries()).forEach(([id, scene]) => {
      const slimits = getters.scrollOffsetLimitsByScene(state)(id)
      if (scroll > slimits[0] && scroll <= slimits[1]) {
        index = id
      }
    })
    return Math.max(0, index)
  },
  scrollOffsetLimitsByScene(state) {
    return (id) => {
      const gss = getters.getSceneScrollOffset(state)(id)
      const dur = getters.getSceneDuration(state)(id)
      const height = getters.getViewportSizes(state).height
      return [gss, gss + dur + height + 8]
    }
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
  ADD_SCENE(state, { scene, index }) {
    const scenes = new Map(state.scenes.scenes)
    scenes.set(index, scene)
    const amount = scenes.size
    state.scenes = {
      ...state.scenes,
      amount,
      scenes,
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
  },
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
  addScene({ commit }, { scene, index }) {
    commit('ADD_SCENE', { scene, index })
  },
  setTutorial({ commit }, isSet) {
    commit('SET_TUTORIAL', { isSet })
  },
}
