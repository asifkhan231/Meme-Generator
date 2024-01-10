import React from 'react'
import trollFace from '../images/troll-face.png'

function Nav() {
    return (
        <div className='nav'>
            <div className='logo-header'>
                <img src={trollFace} width='50px'></img>
                <p >MemeGenerator</p>
            </div>

            <p>React course-Project 3</p>
        </div>
    )
}

export default Nav