import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../reducers/app-state';
import { PhotosState } from '../reducers/photos-state';

const featureKey = 'photos';

export const selectPhotos = createFeatureSelector<AppState, PhotosState>(featureKey);

export const searchTermSelector = createSelector(
  selectPhotos, (photosState) => photosState.searchTerm);

export const photosSelector = createSelector(
  selectPhotos, (photosState) => photosState.photos);

export const currentPhotoSelector = createSelector(
  selectPhotos, (photosState) => photosState.currentPhoto);
