import { defineStore } from "pinia";
import type { User } from "~/types";

export const useUserStore = defineStore("user", () => {
  const user = ref(null) as Ref<User> | Ref<null>;
  const authToken = ref(null) as Ref<String> | Ref<null>;

  const isLoggedIn = computed(() => authToken != null);

  function logout() {
    authToken.value = null;
    user.value = null;
  }

  async function login(email: String, password: String) {
    const response = await useAuth().login(email, password);
    // console.log(response.data.value.data.token);
    if (response.data.value) {
      authToken.value = response.data.value.data.token;
    }
    // data.value
  }

  async function register(formData: User) {
    const response = await useAuth().register(
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.password,
      new Date(formData.dob),
      formData.gender,
    );
    if (response.data.value) {
      console.log("Register success");
    } else {
      console.log("Register register");
    }
  }
  return { user, authToken, isLoggedIn, logout, login, register };
});
