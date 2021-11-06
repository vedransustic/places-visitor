import React, {useState} from 'react';
import Card from '../UI/Card'
import Modal from '../UI/Modal'
import Button from "../UI/Button";
import Map from "../UI/Map"

import "../../styles/components/Places/PlaceItem.css"

const PlaceItem = (props) => {

    const [showMap, setShowMap] = useState(false)

    const openMapHamdler = () => setShowMap(true)

    const closeMapHandler = () => setShowMap(false)

    return (
        <>
            <Modal
                show={showMap}
                onClose={closeMapHandler}
                header={props.address}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal_actions"
                footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
            >
                <div className="map-container">
                    <Map title={props.title} mapUrl={props.mapUrl}/>
                </div>
            </Modal>
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
                        <Button inverse onClick={closeMapHandler} >VIEW ON MAP</Button>
                        <Button to={`/places/${props.id}`}>EDIT</Button>
                        <Button danger >DELETE</Button>
                    </div>
                </Card>
            </li>
        </>

    );
};

export default PlaceItem;