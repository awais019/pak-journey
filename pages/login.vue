<template>
  <div class="flex h-screen items-center justify-center bg-[#EAE4F6]">
    <div class="h-auto w-[539px] rounded-2xl bg-white text-[#393C3E]">
      <div class="mx-8">
        <div class="mt-20 text-center">
          <p class="text-4xl font-normal">Login</p>
          <p class="text-base">
            Don’t have an account?
            <a class="text-[#645BBB] hover:cursor-pointer" href="/signup">
              Sign up</a
            >
          </p>
        </div>
        <div class="mt-10 grid space-y-6 text-[#7C7C7C]">
          <div>
            <p class="mb-2">Email address</p>
            <input
              class="h-[46px] w-full rounded-md border-[1px] border-[#CFCFCF] px-4"
              id="name"
            />
          </div>
          <div>
            <p class="mb-2">Password</p>
            <input
              class="h-[46px] w-full rounded-md border-[1px] border-[#CFCFCF] px-4"
              id="name"
            />
          </div>
        </div>
        <div class="flex justify-end">
          <a
            class="mb-5 text-sm text-[#645BBB] underline hover:cursor-pointer"
            href="/resetpassword"
          >
            Forget your password
          </a>
        </div>
        <div class="mb-20 mt-5 flex justify-center">
          <button class="h-12 w-44 rounded-lg bg-[#645BBB] text-white">
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// const email = ref("123@test.com");
// const password = ref("123456");
// const handleSignIn = async () => {
//   if (email.value.trim() !== "" && password.value.trim() !== "") {
//     try {
//       const response = await signIn(email.value, password.value);
//       if (response.result.code == 200) {
//         sessionStorage.setItem("token", response.result.data.token);
//         setJwtToken(response.result.data.token);
//         useRouter().push("/");
//       }
//     } catch (error) {
//       console.error("Error during signIn:", error);
//     }
//   }
// };
</script>

<style></style>
