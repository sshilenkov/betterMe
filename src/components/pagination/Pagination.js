import React from 'react';
import './Pagination.sass';

const Pagination = ({ onPrevPage, onNextPage, currentPage, totalItems, pageItemsCount }) => {
    return (
        <div className='pagination'>
            <button
                className='pagination__prev'
                disabled={currentPage < 2}
                onClick={onPrevPage}
            >
                Prev page
            </button>
            <button
                className='pagination__next'
                disabled={totalItems - pageItemsCount < pageItemsCount * currentPage}
                onClick={onNextPage}
            >
                Next page
            </button>
        </div>
    );
}

export default Pagination;