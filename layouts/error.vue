<template>
  <main>
    <section class="section section--full-screen">
      <div class="container">
        {{ error }}
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "ErrorPage",

  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>
