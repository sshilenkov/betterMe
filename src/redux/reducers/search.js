export const GET_REPOS = 'GET_REPOS';
export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export const SET_REPOS = 'SET_REPOS';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const SET_LOADING = 'SET_LOADING';

export const getRepos = () => ({ type: GET_REPOS });
export const setRepos = (repos) => ({ type: SET_REPOS, repos });
export const setSearchValue = (searchValue) => ({ type: CHANGE_SEARCH_VALUE, searchValue });
export const changePage = (currentPage) => ({ type: CHANGE_PAGE, currentPage });
export const setLoading = (value) => ({ type: SET_LOADING, value });

const initialState = {
    repos: {},
    searchValue: '',
    currentPage: 1,
    pageItemsCount: 30,
    loading: false,
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
            };

        case CHANGE_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            };

        case SET_LOADING:
            return {
                ...state,
                loading: action.value
            }

        default:
            return state;
    }
}

export default search;