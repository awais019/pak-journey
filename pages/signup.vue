<template>
  <div class="flex justify-center items-center h-screen bg-[#D1E3FA]">
    <div class="h-auto w-[539px] bg-white rounded-2xl text-[#393C3E]">
      <div class="mx-10">
        <div class="mt-20 text-center">
          <p class="text-4xl font-normal">Create an account</p>
          <p class="text-base">
            Already have an account?<a
              class="text-[#1E76E8] hover:cursor-pointer"
              href="/signin">
              Log in</a
            >
          </p>
        </div>
        <div class="grid mt-10 space-y-6 text-[#7C7C7C]">
          <div>
            <p class="mb-2">First name</p>
            <input
              class="w-full h-[46px] rounded-md border-[1px] border-[#CFCFCF] px-4"
              id="name"
            />
          </div>
          <div>
            <p class="mb-2">Last name</p>
            <input
              class="w-full h-[46px] rounded-md border-[1px] border-[#CFCFCF] px-4"
              id="name"
              />
          </div>
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
        <div class="text-[#7C7C7C]">
          <p class="mb-5 text-sm">
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>
          <p class="text-base max-w-xs">
            By creating an account, you agree to our
            <span class="text-[#393C3E] underline">Terms of use</span> and
            <span class="text-[#393C3E] underline"> Privacy Policy</span>
          </p>
          <div class="flex justify-center mt-5 mb-14">
            <button
              class="bg-[#1E76E8] rounded-lg h-12 w-44 text-white"
             >
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

// const first_name = ref("");
// const last_name = ref("");
// const email = ref("");
// const password = ref("");

// const handleSignUp = async () => {
//   if (
//     first_name.value.trim() !== "" &&
//     last_name.value.trim() !== "" &&
//     email.value.trim() !== "" &&
//     password.value.trim() !== ""
//   ) {
//     try {
//       const response = await signUp(
//         first_name.value,
//         last_name.value,
//         email.value,
//         password.value
//       );
//       //Success
//       if (response.result.code == 200) {
//         const responseSignIn = await signIn(email.value, password.value);
//         if (responseSignIn.result.code == 200) {
//           sessionStorage.setItem("token", responseSignIn.result.data.token);
//           navigateTo("/");
//         }
//       }
//       //E-mail already exist
//       else if (response.result.code == 422) {
//         navigateTo("/signin");
//       }
//     } catch (error) {
//       console.error("Error during signIn:", error);
//     }
//   } else {
//     console.log(
//       "Please check if you have entered email, password, last name and first name"
//     );
//   }
// };

</script>

<style>

</style>