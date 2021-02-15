import { put, select, takeEvery } from 'redux-saga/effects';
import { GET_REPOS } from 'redux/reducers/search';
import { setRepos } from 'redux/reducers/search';

export function* sagaWatcher() {
    yield takeEvery(GET_REPOS, fetchRepos);
}

function* fetchRepos() {
    const { searchValue } = yield select(store => store.search);
    const res = yield fetch(`https://api.github.com/search/repositories?q=${searchValue}&sort=stars&page=1`);
    const json = yield res.json();
    yield put(setRepos(json));
}