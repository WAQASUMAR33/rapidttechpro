import React from 'react';

const DottedWorldMap = ({ className }) => {
    return (
        <svg
            viewBox="0 0 1000 500"
            preserveAspectRatio="xMidYMid meet"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <pattern id="dotPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                </pattern>
            </defs>
            {/* Simplified World Map Path */}
            <path
                d="M180,120 L220,110 L280,130 L320,180 L350,220 L320,300 L280,350 L220,380 L150,350 L120,300 L110,220 L130,160 Z 
           M500,100 L550,110 L600,150 L650,200 L680,300 L650,400 L600,450 L550,480 L500,450 L450,400 L420,300 L450,200 Z
           M750,150 L800,160 L850,200 L880,250 L850,300 L800,320 L750,300 L720,250 Z"
                fill="url(#dotPattern)"
                className="opacity-30"
            />
        </svg>
    );
};

export default DottedWorldMap;
