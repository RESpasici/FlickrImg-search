import { createReducer, on, Action } from '@ngrx/store';

import { focusPhoto, search, searchResultsLoaded } from '../actions/photos.actions';
import { PhotosState } from './photos-state';

export const initialState: PhotosState = {
  searchTerm: '',
  photos: [],
  currentPhoto: null,
};

const reducer = createReducer(
  initialState,
  on(search, (state, { searchTerm }) => ({
    ...state,
    searchTerm,
    currentPhoto: null,
  })),
  on(searchResultsLoaded, (state, { photos }) => ({
    ...state,
    photos,
  })),
  on(focusPhoto, (state, { photo }) => ({
    ...state,
    currentPhoto: photo,
  })),
);

export function photosReducer(
  state: PhotosState | undefined,
  action: Action,
): PhotosState {
  return reducer(state, action);
}
