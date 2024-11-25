import React from 'react';

const GoogleMap = () => {
    // Address to be displayed on the map
    const address = "300, 3rd Floor, 1-D, Sunset Tower, Sunset Boulevard Road, Phase-2, DHA, Phase 2 Karachi, Karachi City, Sindh 75500";

    // Use a simple iframe embed link without API key
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

    return (
        <div className='map-main'>
            <h2>Map of the Location</h2>
            <div style={{ height: '550px', width: '100%' }}>
                <iframe
                    src={mapUrl}
                    width="100%"
                    height="550"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Google Map"
                ></iframe>
            </div>
        </div>
    );
};

export default GoogleMap;
