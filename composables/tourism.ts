import type { TouristSpot } from "~/types/tourism";

export const useTourism = () => {
  const { BASE_URL } = useRuntimeConfig().public;

  async function getAllTouristSpots() {
    return useFetch<{
      data: TouristSpot[];
    }>("/tourism/spots", {
      baseURL: BASE_URL,
    });
  }

  return { getAllTouristSpots };
};
