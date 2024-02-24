import { useUserStore } from "~/stores/userStore";
// import { API_Response } from "~/types/api";

export const useFetchWrapper = async <T>(url: string, options: any) => {
  const baseURL = useRuntimeConfig().public.baseURL;
  const userStore = useUserStore();
  const router = useRouter();
  const route = useRoute();

  url = `${baseURL}${url}`;
  const response = await useFetch<T>(url, {
    ...options,
    headers: {
      Authorization: userStore.authToken,
    },
  });

  if (response.error.value?.statusCode == 401) {
    userStore.logout();
    router.push(`/login?redirect=${route.fullPath}`);
    return {
      data: ref(null),
    };
  }

  return response;
};
