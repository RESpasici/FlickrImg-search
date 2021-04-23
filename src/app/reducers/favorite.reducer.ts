import { createReducer, on, Action } from '@ngrx/store';
import { addList, editList } from '../actions/favorite.actions';
import { FavoriteList } from '../models/favorite-list';

export const initialState: FavoriteList[] =
    [{
        id: 1, name: 'Default', description: 'this is a default list', photos: [
            {
                id: '51125936778',
                owner: '186683157@N04',
                title: 'Like a candy',
                datetaken: '2021-04-19 11:39:32',
                ownername: 'st.barraco',
                tags: 'dog chien dogphotography 5dmarkiv pink flickr canonfrance herault photographer shiba',
                url_q: 'https://live.staticflickr.com/65535/51125936778_65fc7c7d27_q.jpg',
                url_m: 'https://live.staticflickr.com/65535/51125936778_65fc7c7d27.jpg',
            }
        ]
    },
    {
        id: 2, name: 'Default', description: 'this is a default list', photos: [
            {
                id: '51125936778',
                owner: '186683157@N04',
                title: 'Like a candy',
                datetaken: '2021-04-19 11:39:32',
                ownername: 'st.barraco',
                tags: 'dog chien dogphotography 5dmarkiv pink flickr canonfrance herault photographer shiba',
                url_q: 'https://live.staticflickr.com/65535/51125936778_65fc7c7d27_q.jpg',
                url_m: 'https://live.staticflickr.com/65535/51125936778_65fc7c7d27.jpg',
            }
        ]
    },
    {
        id: 3, name: 'Default', description: 'this is a default list', photos: [
            {
                id: '51125936778',
                owner: '186683157@N04',
                title: 'Like a candy',
                datetaken: '2021-04-19 11:39:32',
                ownername: 'st.barraco',
                tags: 'dog chien dogphotography 5dmarkiv pink flickr canonfrance herault photographer shiba',
                url_q: 'https://live.staticflickr.com/65535/51125936778_65fc7c7d27_q.jpg',
                url_m: 'https://live.staticflickr.com/65535/51125936778_65fc7c7d27.jpg',
            }
        ]
    },
    {
        id: 4, name: 'Default', description: 'this is a default list', photos: [
            {
                id: '51125936778',
                owner: '186683157@N04',
                title: 'Like a candy',
                datetaken: '2021-04-19 11:39:32',
                ownername: 'st.barraco',
                tags: 'dog chien dogphotography 5dmarkiv pink flickr canonfrance herault photographer shiba',
                url_q: 'https://live.staticflickr.com/65535/51125936778_65fc7c7d27_q.jpg',
                url_m: 'https://live.staticflickr.com/65535/51125936778_65fc7c7d27.jpg',
            }
        ]
    }];
// [];

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