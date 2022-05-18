import React from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

function PlaceList(props) {
  return (
    <>
      {props.items.length === 0 ? (
        <div className="place-list center">
          <Card>
            <h2>No places found. Maybe create one?</h2>
            <Button to="/places/new">Share place</Button>
          </Card>
        </div>
      ) : (
        <ul className="place-list">
          {props.items.map((place) => (
            <PlaceItem
              key={place.id}
              id={place.id}
              image={place.image}
              title={place.title}
              description={place.description}
              address={place.address}
              creatorId={place.creator}
              coordinates={place.location}
              onDelete={props.onDeletePlace}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default PlaceList;
