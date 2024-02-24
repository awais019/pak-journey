import { defineStore } from "pinia";
import type { User } from "~/types";

export const useUserStore = defineStore("user", () => {
  const user = ref(null) as Ref<User> | Ref<null>;
  const authToken = ref("") as Ref<String>;

  const isLoggedIn = computed(() => user != null);

  function logout() {
    authToken.value = "";
    user.value = null;
  }

  return { user, authToken, logout };

  // state: () => ({
  //   user: {} as User,
  // }),
});
