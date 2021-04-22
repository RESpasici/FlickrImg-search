import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavoriteList } from '../models/favorite-list';
import { AppState } from '../reducers/app-state';

const featureKey = 'favorite';

export const selectLists = createFeatureSelector<AppState, FavoriteList[]>(featureKey);

export const listsSelector = createSelector(
    selectLists, (favoriteState) => favoriteState
);