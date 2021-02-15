import React from 'react';
import './Layout.sass';

import Input from 'components/input/Input';

const submit = (e) => {
    e.preventDefault();
    console.log('submit')
}

const Layout = () => {
    return (
        <div className='layout'>
            <div className='layout__search'>
                <Input
                    type='search'
                    placeholder='Input repo name'
                    submit={submit}
                />
            </div>
            <div className='layout__results'>
                
            </div>
        </div>
    );
}

export default Layout;