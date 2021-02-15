import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Layout.sass';

import Input from 'components/input/Input';
import List from 'components/list/List';
import Pagination from 'components/pagination/Pagination';

import { getRepos,
         setSearchValue,
         changePage,
         setLoading } from 'redux/reducers/search';

const Layout = () => {
    const dispatch = useDispatch();
    const { searchValue,
            repos,
            currentPage,
            pageItemsCount,
            loading } = useSelector(store => store.search);

    const onChange = (e) => {
        dispatch(setSearchValue(e.target.value));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        dispatch(getRepos());
    }

    const onPrevPage = () => {
        dispatch(changePage(currentPage - 1));
    }

    const onNextPage = () => {
        dispatch(changePage(currentPage + 1));
    }

    const results = () => {
        if (loading) {
            return 'Loading...';
        } else {
            return(
                <>
                    {repos.items && <List list={repos.items} loading={loading} />}
                    {repos.total_count > 30
                                            && <Pagination
                                                    onPrevPage={onPrevPage}
                                                    onNextPage={onNextPage}
                                                    currentPage={currentPage}
                                                    totalItems={repos.total_count}
                                                    pageItemsCount={pageItemsCount}
                                                />}
                </>
            );
            
        }
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
                {results()}
            </div>
        </div>
    );
}

export default Layout;