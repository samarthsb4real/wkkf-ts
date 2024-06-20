// components/MapBanner.js
import React from "react";

interface MapBannerProps {
  address: string;
  lat: number;
  lng: number;
}

const MapBanner: React.FC<MapBannerProps> = ({ address, lat, lng }) => {
  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <div className="flex w-full h-1/2 m-8">
      {/* Left side: Details */}
      <div className="w-1/2 bg-gray-900 p-8 overflow-y-auto rounded-xl">
        <h1 className="text-3xl font-bold mb-4">Location Details</h1>
        <div className="mb-4">
          <strong>Address:</strong> {address}
        </div>
        <div className="mb-4">
          <strong>Latitude:</strong> {lat}
        </div>
        <div className="mb-4">
          <strong>Longitude:</strong> {lng}
        </div>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur justo nec nisl ullamcorper, sit amet pretium felis
          ultricies.
        </p>
      </div>
      {/* Right side: Map */}
      <div className="w-1/2 relative">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          loading="lazy"
          className="absolute inset-0 border-0 rounded-xl"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default MapBanner;



