import React, { useState } from "react";
import InteractiveMap, { Marker } from "react-map-gl";
const Token =
    "pk.eyJ1Ijoic3A0cmtpbmciLCJhIjoiY2s3cXVnNmV5MDF2ODNla3RyNmZiaGl1eiJ9.IxCXZbzX1hOfffO2DCdqfw";
const App = () => {
    const [viewport, setViewport] = useState({
        latitude: -16.503729,
        longitude: -68.135209,
        zoom: 1
    });
    const [markers, setMarkers] = React.useState([]);
    const handleClick = ({ lngLat: [longitude, latitude] }) => {
        console.log(longitude, latitude);
        var long;
        if (longitude < 0) long = -1 * (Math.abs(longitude) % 180);
        else long = Math.abs(longitude) % 180;
        console.log("long", long);
        setMarkers(markers => [...markers, { longitude, latitude }]);
    };

    return (
        <InteractiveMap
            viewState={viewport}
            width="1000px"
            height="700px"
            onViewportChange={newViewport => setViewport(newViewport)}
            onClick={handleClick}
            mapboxApiAccessToken={Token}
        >
            {markers.map((m, i) => (
                <Marker {...m} key={i}>
                    click
                </Marker>
            ))}
        </InteractiveMap>
    );
};

export default App;
