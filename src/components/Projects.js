import * as React from 'react';
import './Projects.css';

export default function Projects() {
    return (
        <div className='project-outer-container'>
            <h1 className='projects-text'>Projects</h1>
            <div className='project-container'>
                <div className='project-item'>
                    <h2 className='project-header'>Popify</h2>
                    <p className='project-desc'>Find new music, browse your most played songs, artists, and genres. Mix and match to find new recommended music. Built on spotify's api.</p>
                    <div className='project-links'>
                        <a href='https://github.com/zsabbagh/popify' className='project-link'>View on GitHub</a>
                        <a href='https://github.com/zsabbagh/popify' className='project-link'>Check it out here!</a>
                    </div>
                </div>
                <div className='project-item'>
                    <h2 className='project-header'>Master's thesis</h2>
                    <p className='project-desc'>Football shot detection using convolutional neural networks</p>
                    <div className='project-links'>
                        <a href={process.env.PUBLIC_URL + '/files/Thesis_Jonathan_Erikson.pdf'} className='project-link'>Read it here!</a>
                    </div>
                </div>
            </div>
        </div>
    );
}