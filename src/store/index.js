import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/*
interface Notification {
  id: number;
  type: 'info' | 'error';
  text: string;
}
*/

let lastUsedId = 0;

export default new Vuex.Store({
  state: {
    notifications: []
  },
  mutations: {
    PUSH_NOTIFICATION(state, notification) {
      state.notifications.push(notification);
    },
    REMOVE_NOTIFICATION(state, notificationToRemove) {
      state.notifications = state.notifications.filter(
        notification => notification.id != notificationToRemove.id
      );
    }
  },
  actions: {
    notify({ commit }, { type, text }) {
      const id = ++lastUsedId;
      const notification = {
        id,
        type,
        text
      };
      commit("PUSH_NOTIFICATION", notification);

      setTimeout(() => {
        commit("REMOVE_NOTIFICATION", notification);
      }, 5000);
    }
  },
  modules: {}
});
