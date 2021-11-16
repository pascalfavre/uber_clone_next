import React from 'react';
import { useEffect, useState } from 'react';
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import { useRouter } from 'next/dist/client/router';
import RideSelector from './components/RideSelector';

const Confirm = () => {
    const router = useRouter();

    const [ pickupCoordinates, setPickupCoordinates ] = useState()
    const [ dropoffCoordinates, setDropoffCoordinates ] = useState()

    const { pickupLocation, dropoffLocation } = router.query;

    const getCoordinates = (location, type) => {
        const point = location;

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${point}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoicGYxODIiLCJhIjoiMWdUYmhubyJ9.7kNLDcEnaz-2leNEhNhIeA',
                limit: 1
            })
        )
        .then(response => response.json())
        .then(data => {
            if(type == 'pickup')
                setPickupCoordinates(data.features[0].center);
            else
                setDropoffCoordinates(data.features[0].center);
        });
    }

    useEffect(() => {
        getCoordinates(pickupLocation, 'pickup');
        getCoordinates(dropoffLocation, 'dropoff');
    }, [pickupLocation, dropoffLocation]);

    return (
        <Wrapper>
            <Map 
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer>
                <RideSelector></RideSelector>
                <ConfirmButtonContainer>
                    <ConfirmButton>Confirm UberX</ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
    flex h-screen flex-col
`

const RideContainer = tw.div`
    flex flex-1 flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
    border-t-2
`

const ConfirmButton = tw.div`
    bg-black text-white my-4 mx-4 py-4 text-center text-xl
`