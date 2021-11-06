import React from 'react';
import PlaceItem from "./PlaceItem";
import Card from '../UI/Card'
import "../../styles/components/Places/ListPlaces.css"

const ListPlaces = (props) => {

    if(props.items.length === 0){
        return(
            <div className="place-list center">
                <Card>
                    <h2>No places found. Create one?</h2>
                    <button>Share New Place</button>
                </Card>
            </div>
        )
    }

    return (
        <ul className="place-list">
            {props.items.map(place => <PlaceItem key={place.id} {...place}/> )}
        </ul>
    );
};

export default ListPlaces;