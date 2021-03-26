import React, { useState } from 'react';
import { Map } from 'google-maps-react';
import FiltersTop from './components/FiltersTop'
import FiltersBottom from './components/FiltersBottom'

const Bootstrap = (props) => {
    let {google, mapStyles} = props
    const [isOpenBottomMenu, setOpenBottomMenu] = useState(false);

    const openBottomFilters = () => setOpenBottomMenu(!isOpenBottomMenu);

    return (
        <>
    <FiltersTop openBottomFilters={openBottomFilters} />
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
      >
      </Map>
      {isOpenBottomMenu && <FiltersBottom />}
      </>
    )
}

export default Bootstrap;