import { Photo } from "./photo";

export interface FavoriteList {
    id?: number;
    name: string;
    description: string;
    photos: Photo[];
}