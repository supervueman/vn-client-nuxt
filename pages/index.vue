<template>
  <main class="main">
    <section class="container section--full-screen">
      <div class="container">
        <h1>{{ dictionary.vn_cms }}</h1>
        <h3>{{ dictionary.greeting }}</h3>
      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "IndexPage",

  computed: {
    ...mapGetters("dictionary", ["dictionary"])
  }
};
</script>
