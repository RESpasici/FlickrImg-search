import { ActionReducerMap } from '@ngrx/store';
import { FavoriteListState } from './favorite-list.state';
import { favoriteReducer } from './favorite.reducer';

import { PhotosState } from './photos-state';
import { photosReducer } from './photos.reducer';

export interface AppState {
  photos: PhotosState;
  favorite: FavoriteListState; 
}

export const reducers: ActionReducerMap<AppState> = {
  photos: photosReducer,
  favorite: favoriteReducer,
};
