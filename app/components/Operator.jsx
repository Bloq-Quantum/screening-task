'use client';

import React, { useState } from 'react';
import { margin, operators, size } from '../data/operators.jsx';
import { Eye } from 'lucide-react';

export default function Operator({ title, itemId, fill, height, width, components, isCustom, symbol, style = {} }) {
    const [isXRayMode, setIsXRayMode] = useState(false); // X-ray mode to show all components of a custom gate

    return <div style={{ ...style }} className="group relative">
        <svg
            className={`z-40 absolute top-0 left-0 ${(isXRayMode) && 'scale-95'}`}
            height={height * size + margin.y * (height - 1)}
            width={isXRayMode ? (Math.max(...components.map((c) => c.x)) - Math.min(...components.map((c) => c.x)) + 1) * (size + margin.x) - margin.x : size}
            overflow="visible"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                fill={fill}
                height={height * size + (height - 1) * margin.y}
                rx="4"
                width={size}
                x="0"
                y="0"
            />
            {symbol}
        </svg>
        {isCustom && <button
            aria-label="Toggle X-Ray Mode"
            className={`${!isXRayMode && 'group-hover:block hidden'} relative top-0 left-0 bg-white cursor-pointer border border-gray-300 z-50 rounded-full shadow -translate-1/2`}
            onClick={(e) => {
                e.stopPropagation();
                setIsXRayMode(!isXRayMode)
            }}
            style={{ width: 18, height: 18, minWidth: 0, padding: 0, zIndex: 100 }}
        >
            {isXRayMode ? <Eye size={14} color='lightblue' /> : <Eye size={14} />}
        </button>}
    </div>
}