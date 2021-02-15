export const GET_REPOS = 'GET_REPOS';
export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export const SET_REPOS = 'SET_REPOS';

export const getRepos = () => ({ type: GET_REPOS });
export const setRepos = (repos) => ({ type: SET_REPOS, repos });
export const setSearchValue = (searchValue) => ({ type: CHANGE_SEARCH_VALUE, searchValue });

const initialState = {
    repos: {},
    searchValue: '',
}

const search = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.searchValue
            };

        case SET_REPOS:
            return {
                ...state,
                repos: action.repos
            }

        default:
            return state;
    }
}

export default search;