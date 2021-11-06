import React from 'react';
import { Link } from 'react-router-dom'

import Avatar from '../UI/Avatar';
import Card from '../UI/Card'

import '../../styles/components/Users/UsersItem.css'

const UsersItem = (props) => {
    return (
        <li className="user-item">
            <Card className="user-item__content">
                <Link to={`/${props.id}/places`}>
                    <div className="user-item__image">
                        <Avatar image={props.image} alt={props.name} width={60}/>
                    </div>
                    <div className="user-item__info">
                        <h2>{props.name}</h2>
                        <h3>
                            {props.places} {props.places === 1 ? 'Place' : 'Places'}
                        </h3>
                    </div>
                </Link>
            </Card>
        </li>
    );
};

export default UsersItem;