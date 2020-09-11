<template>
  <transition name="notification">
    <div class="app-notification">
      {{ notification.text }}
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AppNotification",

  computed: {
    ...mapGetters("notification", ["notification"])
  }
};
</script>
