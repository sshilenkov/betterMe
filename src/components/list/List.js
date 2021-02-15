import React from 'react';
import './List.sass';

const generateList = (list) => {
    return list.map(item => {
        return (
            <div className='list' key={item.id}>
                <div className='list__name'>{item.name}</div>
                <div className='list__stars'>{item.stargazers_count} star</div>
            </div>
        );
    })
}

const List = ({ list }) => {
    return (
        <div className='List'>
            {generateList(list)}
        </div>
    );
}

export default List;