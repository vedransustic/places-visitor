import React from 'react';
import { useParams } from 'react-router-dom'
import ListPlaces from "../components/Places/ListPlaces";
import { DUMMY_PLACES_DATA } from "../const"

const UserPlaces = () => {
    const userId = useParams().uid
    const filteredData = DUMMY_PLACES_DATA.filter(place => place.creator === userId)
    return (
        <ListPlaces items={filteredData} />
    );
};

export default UserPlaces;