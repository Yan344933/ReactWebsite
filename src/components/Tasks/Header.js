import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import {Container, Row} from 'react-bootstrap';

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='page-header'>
            <div className='title'>
                <h1>{title}</h1>
            </div>
            <div>
                <Button color={showAdd? 'red': 'green'} text={showAdd? 'Close': 'Add'} onClick={onAdd} />   
            </div>   
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
/* const headerStyle = {
    color: 'red',
    background: 'black',
    align: 'center',

} */

export default Header