import { createReducer, on, Action } from '@ngrx/store';
import { addList, editList } from '../actions/favorite.actions';

import { FavoriteListState } from "./favorite-list.state";

export const initialState: FavoriteListState = {
    lists: [],
};

const reducer = createReducer(
    initialState,
    on(addList, (state, { list }) => ({
        ...state,
        lists: [...state.lists, list]
    })),
    on(editList, (state, { list }) => {
        const index = state.lists.findIndex(favList => favList.id === list.id);
        const newList = [...state.lists];
        newList[index] = list;
        return { ...state, list: newList }
    })
);

export function favoriteReducer(
    state: FavoriteListState | undefined,
    action: Action
): FavoriteListState {
    return reducer(state, action);
}