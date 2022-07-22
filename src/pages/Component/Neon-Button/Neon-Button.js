import React  from 'react';
import './Neon-Button.css'

export const NeonButton = () => {
    return (
        <div className='Neon-Wrapper'>
            <a className='Neon' href="#">
                <span />
                <span />
                <span />
                <span />
                Neon on Hover!
            </a>
        </div>
    )
}