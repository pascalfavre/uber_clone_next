import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

// mapbox token
mapboxgl.accessToken = 'pk.eyJ1IjoicGYxODIiLCJhIjoiMWdUYmhubyJ9.7kNLDcEnaz-2leNEhNhIeA';


export default function Home() {
  // Create a map on first page load
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.29011, 39.39172],
      zoom: 3
    });
  }, []);

  return (
    <Wrapper>
      <Map id="map"></Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col bg-red-300 h-screen
`

const Map = tw.div`
  bg-red-500 flex-1
`

const ActionItems = tw.div`
  flex-1
`