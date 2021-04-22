import { createAction, props } from '@ngrx/store';
import { FavoriteList } from '../models/favorite-list';

export const addList = createAction('[favorite] Add list', props<{ list: FavoriteList }>());
export const editList = createAction('[favorite] Edit list', props<{ list: FavoriteList }>());
