import React from 'react';
import tw from "tailwind-styled-components";
import Map from "./components/Map";

const Confirm = () => {
    return (
        <Wrapper>
            <Map />
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
    flex h-screen
`