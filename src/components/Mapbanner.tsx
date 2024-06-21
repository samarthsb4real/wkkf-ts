import React from "react";

interface MapBannerProps {
  address: string;
  lat: number;
  lng: number;
}

const MapBanner: React.FC<MapBannerProps> = ({ address, lat, lng }) => {
  const mapSrc = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <div className="flex flex-col md:flex-row w-full h-auto m-4 md:m-8">
      {/* Left side: Details */}
      <div className="w-full md:w-1/2 bg-gray-900 p-4 md:p-8 overflow-y-auto rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
        <h1 className="text-xl md:text-3xl font-bold mb-4">Location Details</h1>
        <div className="mb-4">
          <strong>Address:</strong> {address}
        </div>
        <div className="mb-4">
          <strong>Latitude:</strong> {lat}
        </div>
        <div className="mb-4">
          <strong>Longitude:</strong> {lng}
        </div>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          consectetur justo nec nisl ullamcorper, sit amet pretium felis
          ultricies.
        </p>
      </div>
      {/* Right side: Map */}
      <div className="w-full md:w-1/2 relative h-64 md:h-auto">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          loading="lazy"
          className="absolute inset-0 border-0 rounded-b-xl md:rounded-r-xl md:rounded-bl-none"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default MapBanner;
