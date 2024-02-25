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
  cover: Media;
};

export type SingleSpot = {
  id: string;
  name: string;
  history: string;
  significance: string;
  description: string;
  categoryId: string;
  locationId: string;
  createdAt: string;
  updatedAt: string;
  media: Media[];
  location: Location;
};

export interface Media {
  url: string;
  id: string;
  type: string;
}

export interface Location {
  latitude: number;
  longitude: number;
}
