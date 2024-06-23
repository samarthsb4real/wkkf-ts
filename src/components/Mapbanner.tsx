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
          Tulsi Vihar, Near Railway Station, Asangaon (East)
         <br/> 
         Whatsapp Contact No.- 9422491409
        </p>
      </div>
      {/* Right side: Map */}
      <div className="w-full md:w-1/2 relative h-64 md:h-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d940.6161027790941!2d73.3102365!3d19.435533899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be78500709ca42b%3A0x542f2b8eef45fe8f!2sWorld%20Karate%20%26%20Kobudo%20Federation%20Headquarter.!5e0!3m2!1sen!2sin!4v1719022219460!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
          className="absolute inset-0 border-0 rounded-2xl md:rounded-r-xl md:rounded-bl-none"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default MapBanner;
