import { Photo } from '../models/photo';

export interface PhotosState {
  searchTerm: string;
  photos: Photo[];
  currentPhoto: Photo | null;
}
