export default {
  actions: {
    async nuxtServerInit({ commit }, { req }) {
      await this.dispatch("dictionary/findLang", {
        params: {
          filter: {
            where: {
              lang: "en"
            },
            include: ["lexicons"]
          }
        }
      });
    }
  }
};
