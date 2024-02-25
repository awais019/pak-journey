<template>
  <div class="flex h-screen items-center justify-center bg-[#EAE4F6]">
    <div class="h-auto w-[539px] rounded-2xl bg-white text-[#393C3E]">
      <FormKit type="form" :actions="false" @submit="handleSignUp">
        <div class="mx-10">
          <div class="mt-20 text-center">
            <p class="text-4xl font-normal">Create an account</p>
            <p class="text-base">
              Already have an account?
              <NuxtLink
                class="text-[#645BBB] hover:cursor-pointer"
                href="/signin"
              >
                Log in
              </NuxtLink>
            </p>
          </div>
          <div class="mt-10 grid space-y-6 text-[#7C7C7C]">
            <FormKit
              type="text"
              name="firstName"
              label="First Name"
              placeholder="Enter your first name here"
              validation="required"
              value="test"
            /><FormKit
              type="text"
              name="lastName"
              label="Last Name"
              placeholder="Enter your last name"
              validation="required"
              value="test"
            />
            <FormKit
              type="email"
              name="email"
              label="Email"
              placeholder="someone@somewhere.com"
              validation="required"
              value="test@test.com"
            />
            <FormKit
              type="date"
              name="dob"
              label="Date of birth"
              validation="required"
              value="1-2-1970"
            />
            <FormKit
              type="select"
              name="gender"
              label="Gender"
              :options="['MALE', 'FEMALE']"
              validation="required"
              value="MALE"
            />
            <FormKit
              type="password"
              name="password"
              label="Password"
              placeholder="8 characters atleast"
              validation="required"
              value="124398"
            />
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
              <!-- <button class="h-12 w-44 rounded-lg bg-[#645BBB] text-white">
                Create an account
              </button> -->
              <FormKit type="submit" />
            </div>
          </div>
        </div>
      </FormKit>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
import { useUserStore } from "@/stores/userStore";
const userStore = useUserStore();
const { register } = userStore;

const handleSignUp = async (formValues) => {
  try {
    const response = await register(formValues);
    console.log(response);
    // //Success
    // if (response.result.code == 200) {
    //   const responseSignIn = await signIn(email.value, password.value);
    //   if (responseSignIn.result.code == 200) {
    //     sessionStorage.setItem("token", responseSignIn.result.data.token);
    //     navigateTo("/");
    //   }
    // }
    // //E-mail already exist
    // else if (response.result.code == 422) {
    //   navigateTo("/signin");
    // }
  } catch (error) {
    console.error("Error during signIn:", error);
  }
};
</script>

<style></style>
