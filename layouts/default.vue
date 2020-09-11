<template>
  <div class="app">
    <AppToolbar />
    <AppNotification />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>
import AppToolbar from "@/components/AppToolbar";
import AppFooter from "@/components/AppFooter";
import AppNotification from "@/components/AppNotification";

export default {
  name: "DefaultLayout",

  components: {
    AppToolbar,
    AppFooter,
    AppNotification
  }
};
</script>
