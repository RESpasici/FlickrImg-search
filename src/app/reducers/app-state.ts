import { ActionReducerMap } from '@ngrx/store';
import { FavoriteList } from '../models/favorite-list';
import { favoriteReducer } from './favorite.reducer';

import { PhotosState } from './photos-state';
import { photosReducer } from './photos.reducer';

export interface AppState {
  photos: PhotosState;
  favorite: FavoriteList[]; 
}

export const reducers: ActionReducerMap<AppState> = {
  photos: photosReducer,
  favorite: favoriteReducer,
};
