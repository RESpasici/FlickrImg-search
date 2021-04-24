import { Action, createReducer, on } from '@ngrx/store';
import { addList, editList } from '../actions/favorite.actions';
import { FavoriteList } from '../models/favorite-list';

export const initialState: FavoriteList[] = [];

const reducer = createReducer(
    initialState,
    on(addList, (state, { list }) => {
        const listWithId = { ...list, id: state.length + 1 }
        return [...state, listWithId]
    }),
    on(editList, (state, { list }) => {
        const index = state.findIndex(favList => favList.id === list.id);
        const updatedLists = [...state];
        updatedLists[index] = list;
        return updatedLists;
    })
);

export function favoriteReducer(
    state: FavoriteList[] | undefined,
    action: Action
): FavoriteList[] {
    return reducer(state, action);
}