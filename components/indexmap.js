import dynamic from "next/dynamic";

function MapCompIndex() {
  const Map = dynamic(
    () => import("./map.jsx"), // replace '@components/map' with your component's location
    { loading: () => <p>A map is loading</p>, ssr: false } // This line is important. It's what prevents server-side render
  );
  return <Map />;
}

export default MapCompIndex;
