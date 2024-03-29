import React from 'react'

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css'

const TextContainer = ({ users }) => (
    <div className="textContainer">
        { 
            users ? (
                <div>
                    <h1>Joueurs:</h1>
                    <div className="activeContainer">
                        <h2>
                            {users.map(({name}) => (
                            <div key={name} className="activeItem">
                                {name}
                                <img alt="online" src={onlineIcon}/>
                            </div>
                            ))}
                        </h2>
                    </div>
                </div>
            ) : null 
        }
    </div>
)

export default TextContainer