<template>
  <div class="flex h-screen items-center justify-center bg-[#EAE4F6]">
    <div class="h-auto w-[539px] rounded-2xl bg-white text-[#393C3E]">
      <FormKit type="form" :actions="false" @submit="handleLogin">
        <div class="mx-8">
          <div class="mt-20 text-center">
            <p class="text-4xl font-normal">Login</p>
            <p class="text-base">
              Don’t have an account?
              <NuxtLink
                to="/signup"
                class="text-[#645BBB] hover:cursor-pointer"
              >
                Sign up</NuxtLink
              >
            </p>
          </div>

          <div class="mt-10 grid space-y-6 text-[#7C7C7C]">
            <FormKit
              value="awaistopper20@gmail.com"
              label="Email address"
              name="email"
              type="text"
            />
            <FormKit
              value="awais123"
              label="Password"
              name="password"
              type="password"
            />
          </div>
          <div class="flex justify-end">
            <a
              class="mb-5 text-sm text-[#645BBB] underline hover:cursor-pointer"
            >
              Forget your password
            </a>
          </div>
          <div class="mb-20 mt-5 flex justify-center">
            <FormKit type="submit"></FormKit>

            <!-- <button class="h-12 w-44 rounded-lg bg-[#645BBB] text-white">
              Login
            </button> -->
          </div>
        </div></FormKit
      >
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const { login } = userStore;
// const email = ref("123@test.com");
// const password = ref("123456");
const handleLogin = async ({ email, password }) => {
  // console.log(email, password);
  if (email.trim() !== "" && password.trim() !== "") {
    try {
      const response = await login(email, password);
      // if (response.result.code == 200) {
      //   sessionStorage.setItem("token", response.result.data.token);
      //   setJwtToken(response.result.data.token);
      //   useRouter().push("/");
      // }
    } catch (error) {
      console.error("Error during signIn:", error);
    }
  }
};
</script>

<style></style>
