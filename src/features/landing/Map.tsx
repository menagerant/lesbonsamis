"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      // init marker
      const { Marker } = (await loader.importLibrary(
        "marker",
      )) as google.maps.MarkerLibrary;

      const position = {
        lat: 43.64,
        lng: -79.38,
      };

      // map options
      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: process.env.NEXT_PUBLIC_MAP_ID,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        rotateControl: true,
        fullscreenControl: true,
      };

      // setup the map
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      // put up a marker
      const marker = new Marker({
        map: map,
        position: position,
        icon: "pin.svg",
      });
    };

    initMap();
  }, []);

  return (
    <div
      className="relative m-auto my-12 min-h-[700px] w-full max-w-7xl px-8 max-lg:flex-col"
      ref={mapRef}
    />
  );
};
