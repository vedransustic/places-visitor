import React from 'react';
import Card from '../UI/Card'
import Button from "../UI/Button";
import "../../styles/components/Places/PlaceItem.css"

const PlaceItem = (props) => {

    return (
        <li className="place-item">
            <Card className="place-item__content">
                <div className="place-item__image">
                    <img src={props.imageUrl} alt={props.title} />
                </div>
                <div className="place-item__info">
                    <h2>{props.title}</h2>
                    <h5>{props.address}</h5>
                    <p>{props.description}</p>
                </div>
                <div className="place-item__actions">
                    <Button inverse >VIEW ON MAP</Button>
                    <Button to={`/places/${props.id}`}>EDIT</Button>
                    <Button danger >DELETE</Button>
                </div>
            </Card>
        </li>
    );
};

export default PlaceItem;