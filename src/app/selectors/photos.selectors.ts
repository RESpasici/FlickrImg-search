import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../reducers/app-state';
import { PhotosState } from '../reducers/photos-state';

const featureKey = 'photos';

export const selectPhotos = createFeatureSelector<AppState, PhotosState>(featureKey);

export const searchTermSelector = createSelector(
  selectPhotos,
  (photosStateSlice) => photosStateSlice.searchTerm,
);

export const photosSelector = createSelector(
  selectPhotos,
  (photosStateSlice) => photosStateSlice.photos,
);

export const currentPhotoSelector = createSelector(
  selectPhotos,
  (photosStateSlice) => photosStateSlice.currentPhoto,
);
