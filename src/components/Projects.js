import * as React from 'react';
import './Projects.css';
import Typography from '@mui/material/Typography';

export default function Projects() {
    return (
        <div className='project-outer-container'>
            <Typography variant='h3' className='projects-text'>Projects</Typography>
            <div className='project-container'>
                <div className='project-item'>
                    <Typography variant='h5' className='project-header'>Popify</Typography>
                    <Typography variant='body1' className='project-desc'>Find new music, browse your most played songs, artists, and genres. Add items to a shopping list, and check out with a new playlist based on your selections. Built in React with TypeScript, with data from Spotify's Api.</Typography>
                    <div className='project-links'>
                        <Typography variant='body2'>
                            <a href='https://github.com/zsabbagh/popify' className='project-link'>View on GitHub</a>
                        </Typography>
                    </div>
                </div>
                <div className='project-item'>
                    <Typography variant='h5' className='project-header'>Master's thesis - Football shot detection using convolutional neural networks</Typography>
                    <Typography variant='body1' className='project-desc'>Together with Football Analytics Sweden I researched convolutional neural networks and their ability to detects shots in football video data. The work was done in Python using the latest computer vision technologies, such as pre-trained 3D CNNs.</Typography>
                    <div className='project-links'>
                        <Typography variant='body2'>
                            <a href={process.env.PUBLIC_URL + '/files/Thesis_Jonathan_Erikson.pdf'} className='project-link'>Read it here!</a>
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
}