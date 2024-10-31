import * as React from 'react';
import './Image.css';

export default function Image({ src, alt }) {
    return (
        <img src={src} alt={alt} className='profilePicture'/>
    );
}