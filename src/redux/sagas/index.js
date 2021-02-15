import { put, select, takeEvery } from 'redux-saga/effects';
import { GET_REPOS, CHANGE_PAGE } from 'redux/reducers/search';
import { setRepos, setLoading } from 'redux/reducers/search';

export function* sagaWatcher() {
    yield takeEvery(GET_REPOS, fetchRepos);
    yield takeEvery(CHANGE_PAGE, fetchRepos);
}

function* fetchRepos() {
    yield put(setLoading(true));
    const { searchValue, currentPage, pageItemsCount } = yield select(store => store.search);
    const searchString = encodeURIComponent(`${searchValue} in:name`);
    const res = yield fetch(`https://api.github.com/search/repositories?q=${searchString}&sort=stars&page=${currentPage}&per_page=${pageItemsCount}`);
    const json = yield res.json();
    yield put(setRepos(json));
    yield put(setLoading(false));
}