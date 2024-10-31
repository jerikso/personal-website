import * as React from 'react';
import './Textbox.css';

export default function Textbox( {text}) {
    return (
        <div className='container'>
            <p className='text'>{text}</p>
        </div>
    );
}