import React from 'react';
import LocationPin from '../modules/LocationPin';
import GoogleMapReact from 'google-map-react'

const Map = ({ zoomLevel }) => {

    const defaultProps = {
        center: {
          lat: 52.23200271407807,
          lng: 21.006700239933
        },
        zoom: 16
      };

  return (
    <section id="map" className='mt-20'>
        <div className="map text-gray">
            <h2 className='text-center font-bold text-[40px] m-10 '>Odwiedź nas!</h2>

            <div className="shadow border-4 border-cream rounded-xl h-[500px] w-[100%]">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCnBv_XxnRvyt5hP6jcOBEwKwWK9Uwm9Y8" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <LocationPin
                    lat={52.23200271407807}
                    lng={21.006700239933}
                    text="My Marker"
                />
            </GoogleMapReact>
            </div>
        </div>
    </section>
  )
}

export default Map