import { createStore } from "vuex";

export default createStore({
  state: {
    tiers: [
      { tier: "tier1", money: 10000, ROI: 7 },
      { tier: "tier2", money: 20000, ROI: 12 },
      { tier: "tier3", money: 30000, ROI: 25 },
    ],
  },
  getters: {
    // getTiers(state) {
    //   return state.tiers
    // }
  },
  mutations: {},
  actions: {},
  modules: {},
});
