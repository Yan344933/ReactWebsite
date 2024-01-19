import { GoogleMap, useLoadScript, Marker, Polyline } from "@react-google-maps/api"
import { useMemo, useEffect, useState } from 'react';
import { getRoute, getStop } from "./helper";

const MapContainer = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",

  })

  if (!isLoaded) return <div>Loading...</div>

  return (
    <Map />
  )
}

export default MapContainer;

const Map = () => {

  const [route, setRoute] = useState([])

  const containerStyle = {
    width: '1000px',
    height: '600px'
  };

  const center = useMemo(() => ({ lat: 22.3193, lng: 114.1694 }), [])

  useEffect(() => {
    let mounted = true

    getRouteData(72, 'inbound').then((data) => {

      console.log(`In use effect ${data}`)
      setRoute(data)
      if (mounted) {

      }
    })

    return function cleanup() {
      mounted = false
    }
  }, [])


  return <GoogleMap
    zoom={13}
    center={center}
    mapContainerStyle={containerStyle}>
    {route.map((obj) => {
      const position = { lat: obj['lat'], lng: obj['lng'] };

      return <Marker key={obj.id} position={position} />
    })}
    <Polyline path={route} />
  </GoogleMap>

}

const getRouteData = async (route, direction) => {

  let stops = {}

  await getRoute(route, direction).then(async (data) => {

    const routeData = data

    stops = await Promise.all(routeData.map(async (obj) => {
      let b = {}
      await getStop(obj.stop).then((data) => {

        const { stop, name_tc, lat, long } = data

        b = {
          id: stop,
          name: name_tc,
          lat: Number(lat),
          lng: Number(long),
        }
      })
      return b
    }))
    
  })

  return stops
}
