<template>
 <div class="flex justify-center items-center h-screen bg-[#D1E3FA]">
    <div class="h-auto w-[539px] bg-white rounded-2xl text-[#393C3E]">
      <div class="mx-8">
        <div class="mt-20 text-center">
          <p class="text-4xl font-normal">Login</p>
          <p class="text-base">
            Don’t have an account?
            <a class="text-[#1E76E8] hover:cursor-pointer" href="/signup">
              Sign up</a
            >
          </p>
        </div>
        <div class="grid mt-10 space-y-6 text-[#7C7C7C]">
          <div>
            <p class="mb-2">Email address</p>
            <input
              class="w-full h-[46px] rounded-md border-[1px] border-[#CFCFCF] px-4"
              id="name"
             />
          </div>
          <div>
            <p class="mb-2">Password</p>
            <input
              class="w-full h-[46px] rounded-md border-[1px] border-[#CFCFCF] px-4"
              id="name"
             />
          </div>
        </div>
        <div class="flex justify-end">
          <a
            class="mb-5 text-sm text-[#1E76E8] underline hover:cursor-pointer"
            href="/resetpassword">
            Forget your password
          </a>
        </div>
        <div class="flex justify-center mt-5 mb-20">
          <button
            class="bg-[#1E76E8] rounded-lg h-12 w-44 text-white"
           >
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

<style>

</style>