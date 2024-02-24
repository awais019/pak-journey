// // import { useUserStore } from "~/stores/userStore";
// // import { API_Response } from "~/types/api";

// export const useFetchWrapper = async <T>(url: string, options: any) => {
//   const baseURL = useRuntimeConfig().public.baseURL;
// //   const userStore = useUserStore();
//   const router = useRouter();
//   const route = useRoute();

//   url = ${baseURL}${url};
//   const response = await useFetch<T>(url, {
//     ...options,
//     headers: {
//       Authorization: userStore.authToken,
//     },
//   });

//   // if (response.error.value?.statusCode == 401) {
//   //   const { data: res, error } = await refreshAuthToken(
//   //     baseURL,
//   //     userStore.refreshToken
//   //   );

//   //   if (res.value) {
//   //     userStore.setAuthandRefreshToken(
//   //       res.value.data.token,
//   //       res.value.data.refreshToken
//   //     );

//   //     const response = await call$Fetch<T>(url, {
//   //       ...options,
//   //       headers: {
//   //         Authorization: useUserStore().authToken,
//   //       },
//   //     });
//   //     return response;
//   //   } else if (error.value) {
//   //     userStore.logout();
//   //     router.push(/login?redirect=${route.fullPath});
//   //     return {
//   //       data: ref(null),
//   //       error,
//   //     };
//   //   }
//   // }

//   return response;
// };

// async function call$Fetch<T>(url: string, options: any) {
//   try {
//     const response = await $fetch<T>(url, {
//       ...options,
//     });
//     return {
//       data: ref(response),
//       error: ref(null),
//     };
//   } catch (error) {
//     return {
//       data: ref(null),
//       error: ref({
//         data: ref(error as Error),
//       }),
//     };
//   }
// }

// function refreshAuthToken(baseURL: string, refreshToken: string) {
//   return call$Fetch<API_Response<{ token: string; refreshToken: string }>>(
//     ${baseURL}/auth/resfresh/token,
//     {
//       method: "POST",
//       body: {
//         refreshToken,
//       },
//     }
//   );
// }