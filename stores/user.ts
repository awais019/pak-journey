import { defineStore } from "pinia";
import type { User } from "~/types";

export const useUser = defineStore("user", {
  state: () => ({
    user: {} as User,
  }),
});
