import React, { useState } from 'react';
import './Neon-Button.css'

const NeonButton = () => {
    return (
        <div className='Neon-Wrapper'>
            <a className='Neon'>
                <span />
                <span />
                <span />
                <span />
                Neon on Hover!
            </a>
        </div>
    )
}

export default NeonButton;