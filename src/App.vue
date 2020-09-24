<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <button @click="notify({ type: 'info', text: 'Hello' })">
      Create Info Notification
    </button>
    <button @click="postError()">
      Create Error Notification
    </button>
    <div class="notifications">
      <transition-group name="notification">
        <Notification
          v-for="notification in notifications"
          :key="notification.id"
          :type="notification.type"
          :text="notification.text"
          @remove="removeNotification(notification)"
        />
      </transition-group>
    </div>
  </div>
</template>

<script>
import Notification from "@/components/Notification.vue";
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      notificationType: "info"
    };
  },
  name: "App",
  components: {
    Notification
  },
  computed: mapState(["notifications"]),
  methods: {
    ...mapActions(["notify"]),
    postError() {
      this.notify({ type: "error", text: "Error" });
    },
    removeNotification(notification, $event) {
      console.log($event);
      this.$store.commit("REMOVE_NOTIFICATION", notification);
    }
  }
};
</script>

<style>
.notification-enter-active,
.notification-leave-active,
.notification-move {
  transition: all 1s;
}

.notification-leave-active {
  position: absolute;
  width: 100vw;
}

.notification-enter {
  transform: scale(0);
  opacity: 0;
}

.notification-leave-to {
  transform: translateX(100vw);
}

.notifications {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 100;
}

.notifications > * {
  margin-bottom: 1rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
