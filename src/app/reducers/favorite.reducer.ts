import { createReducer, on, Action } from '@ngrx/store';
import { addList, editList } from '../actions/favorite.actions';
import { FavoriteList } from '../models/favorite-list';

export const initialState: FavoriteList[] =
    // [{ id: 1, name: 'Default', description: 'this is a default list', photos: [] }];
    [];

const reducer = createReducer(
    initialState,
    on(addList, (state, { list }) => (
        [...state, list]
    )),
    on(editList, (state, { list }) => {
        const index = state.findIndex(favList => favList.id === list.id);
        const newList = [...state];
        newList[index] = list;
        return newList;
    })
);

export function favoriteReducer(
    state: FavoriteList[] | undefined,
    action: Action
): FavoriteList[] {
    return reducer(state, action);
}