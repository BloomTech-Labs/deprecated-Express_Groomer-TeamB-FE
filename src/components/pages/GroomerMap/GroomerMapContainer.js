import React, { useContext, useEffect, useState } from 'react';
import ReactMapGL, { GeolocateControl, Marker, Popup } from 'react-map-gl';
import { GroomersContext } from '../../../state/contexts/GroomersContext';
import { APIContext } from '../../../state/contexts/APIContext';
import { Button } from 'antd';
import { ScissorOutlined } from '@ant-design/icons';

const GroomerMap = () => {
  const { allGroomers } = useContext(GroomersContext);
  const { getGroomers } = useContext(APIContext);
  const [selectedGroomer, setSelectedGroomer] = useState(null);

  const [viewport, setViewport] = useState({
    latitude: 40.7,
    longitude: -74.0,
    width: '100vw',
    height: '100vh',
    zoom: 3,
  });

  useEffect(() => {
    getGroomers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        setSelectedGroomer(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        {allGroomers &&
          allGroomers.map(groomer => {
            return (
              <Marker
                key={groomer.id}
                latitude={groomer.lat}
                longitude={groomer.lng}
              >
                <Button
                  icon={<ScissorOutlined />}
                  type={'primary'}
                  className={'marker-btn'}
                  onClick={e => {
                    e.preventDefault();
                    setSelectedGroomer(groomer);
                  }}
                >
                  {groomer.business_name}
                </Button>
              </Marker>
            );
          })}
        {selectedGroomer ? (
          <Popup
            latitude={selectedGroomer.lat}
            longitude={selectedGroomer.lng}
            onClose={() => {
              setSelectedGroomer(null);
            }}
          >
            <div>
              <h2>{selectedGroomer.business_name}</h2>
              <h3>
                {selectedGroomer.address}
                <br /> {selectedGroomer.city}, {selectedGroomer.state}{' '}
                {selectedGroomer.zip_code}
              </h3>
              <h3>{selectedGroomer.email}</h3>
              <h3>{selectedGroomer.phone_number}</h3>
              <p style={{ maxWidth: '350px' }}>{selectedGroomer.about}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

export default GroomerMap;
