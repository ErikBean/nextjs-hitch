import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export const Map = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!loaded) return;
    const venue = { lat: -25.344, lng: 131.036 };
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: venue,
    });
    const marker = new google.maps.Marker({ position: venue, map: map });
  }, [loaded]);
  return (
    <>
      <Head>
        <script
          defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBybCRe9fS4GSv6GPxa44iRArio8oEfTKs&callback=initMap"
          onLoad={() => setLoaded(true)}
        ></script>
      </Head>
      <div id="map" />
    </>
  );
};
