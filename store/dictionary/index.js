export default {
  state: () => {
    return {
      dictionary: {}
    };
  },

  mutations: {
    SET(state, payload) {
      state.dictionary = payload;
    }
  },

  actions: {
    async findLang({ commit }, payload) {
      const response = await this.$axios
        .$get("/langs/findone", payload)
        .catch((err) => {
          console.log(err);
        });

      if (response && response.lexicons) {
        const dictionary = {};

        const lexicons = response.lexicons;

        for (let i = 0; i < lexicons.length; i++) {
          dictionary[lexicons[i].slug] = lexicons[i].value;
        }

        commit("SET", dictionary);
      }
    },

    async findOne({ commit }, payload) {
      const response = await this.$axios
        .$get("/dictionaries/findone", payload)
        .catch((err) => {
          console.log(err);
        });

      if (response && response.lexicons) {
        const dictionary = {};

        const lexicons = response.lexicons;

        for (let i = 0; i < lexicons.length; i++) {
          dictionary[lexicons[i].slug] = lexicons[i].value;
        }

        commit("SET", dictionary);
      }
    }
  },

  getters: {
    dictionary(state) {
      return state.dictionary;
    }
  },

  namespaced: true
};
