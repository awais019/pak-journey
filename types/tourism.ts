export type TouristSpot = {
  id: string;
  name: string;
  history: string;
  significance: string;
  description: string;
  categoryId: string;
  locationId: string;
  createdAt: string;
  updatedAt: string;
  cover?: Cover;
};
export type Cover = {
  url: string;
  id: string;
  type: string;
};
