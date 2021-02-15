import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Layout.sass';

import Input from 'components/input/Input';
import List from 'components/list/List';

import { getRepos, setSearchValue } from 'redux/reducers/search';

const Layout = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector(store => store.search.searchValue);
    const repos = useSelector(store => store.search.repos);

    const onChange = (e) => {
        dispatch(setSearchValue(e.target.value));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(getRepos());
    }

    return (
        <div className='layout'>
            <div className='layout__search'>
                <Input
                    type='search'
                    placeholder='Input repo name'
                    onSubmit={onSubmit}
                    value={searchValue}
                    onChange={onChange}
                />
            </div>
            <div className='layout__results'>
                {repos.items && <List list={repos.items} />}
            </div>
        </div>
    );
}

export default Layout;