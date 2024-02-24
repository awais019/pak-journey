<template>
  <div class="flex h-screen items-center justify-center bg-[#EAE4F6]">
    <div class="h-auto w-[539px] rounded-2xl bg-white text-[#393C3E]">
      <div class="mx-10">
        <div class="mt-20 text-center">
          <p class="text-4xl font-normal">Create an account</p>
          <p class="text-base">
            Already have an account?<a
              class="text-[#645BBB] hover:cursor-pointer"
              href="/signin"
            >
              Log in</a
            >
          </p>
        </div>
        <div class="mt-10 grid space-y-6 text-[#7C7C7C]">
          <div>
            <p class="mb-2">First name</p>
            <input
              class="h-[46px] w-full rounded-md border-[1px] border-[#CFCFCF] px-4"
              id="name"
            />
          </div>
          <div>
            <p class="mb-2">Last name</p>
            <input
              class="h-[46px] w-full rounded-md border-[1px] border-[#CFCFCF] px-4"
              id="name"
            />
          </div>
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
        <div class="text-[#7C7C7C]">
          <p class="mb-5 text-sm">
            Use 8 or more characters with a mix of letters, numbers & symbols
          </p>
          <p class="max-w-xs text-base">
            By creating an account, you agree to our
            <span class="text-[#393C3E] underline">Terms of use</span> and
            <span class="text-[#393C3E] underline"> Privacy Policy</span>
          </p>
          <div class="mb-14 mt-5 flex justify-center">
            <button class="h-12 w-44 rounded-lg bg-[#645BBB] text-white">
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { signUp, signIn } = useAuth();

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

<style></style>
