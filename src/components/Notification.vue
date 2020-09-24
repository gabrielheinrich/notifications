<template>
  <div
    @click="$emit('remove')"
    class="notification"
    :class="`notification-${type}`"
  >
    <h1>Notification</h1>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    type: {
      type: String,
      default: "info"
    },
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.notification {
  transition: all 1s;
  padding: 1rem;
}

.notification-info {
  background-color: aliceblue;
}

.notification-error {
  background-color: rgba(255, 127, 127, 1);
}
</style>
