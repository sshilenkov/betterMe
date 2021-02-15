import React from 'react';
import './List.sass';

const generateList = (list) => {
    return list.map(item => {
        return (
            <div className='list__item' key={item.id}>
                <div className='list__name'>{item.name}</div>
                <div className='list__stars'>{item.stargazers_count} stars</div>
            </div>
        );
    })
}

const List = ({ list, loading }) => {
    return (
        <div className='list'>
            {generateList(list)}
        </div>
    );
}

export default List;