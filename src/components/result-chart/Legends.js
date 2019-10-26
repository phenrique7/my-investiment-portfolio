import React from 'react';
import { Box } from 'reakit';

function NormalCircle() {
  return (
    <svg height="25px" width="175px">
      <g transform="translate(0,3)">
        <rect width="230" height="18" fill="transparent" />
        <circle
          r="9"
          cx="9"
          cy="9"
          fill="#EDF2F7"
          strokeWidth="1"
          stroke="black"
          style={{ pointerEvents: 'none' }}
        />
        <text
          textAnchor="start"
          style={{
            fill: '#718096',
            fontSize: '12px',
            dominantBaseline: 'central',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          x="26"
          y="9"
        >
          Renda Fixa (com FGC)
        </text>
      </g>
    </svg>
  );
}

function CircleWithLines() {
  return (
    <svg height="25px" width="195px">
      <defs>
        <pattern
          id="lines.bg"
          width="14.14213562373095"
          height="14.14213562373095"
          patternUnits="userSpaceOnUse"
        >
          <rect
            width="14.14213562373095"
            height="14.14213562373095"
            fill="#EDF2F7"
            stroke="rgba(255, 0, 0, 0.1)"
            strokeWidth="0"
          />
          <path
            d="M -14.14213562373095 14.14213562373095 L 14.14213562373095 -14.14213562373095 M -14.14213562373095 28.2842712474619 L 28.2842712474619 -14.14213562373095 M 0 28.2842712474619 L 28.2842712474619 0"
            strokeWidth="6"
            stroke="rgba(0, 0, 0)"
            strokeLinecap="square"
          />
        </pattern>
      </defs>
      <g transform="translate(0,3)">
        <rect width="230" height="18" fill="transparent" />
        <circle
          r="9"
          cx="9"
          cy="9"
          fill="url(#lines.bg)"
          strokeWidth="1"
          stroke="black"
          style={{ pointerEvents: 'none' }}
        />
        <text
          textAnchor="start"
          style={{
            fill: '#718096',
            fontSize: '12px',
            dominantBaseline: 'central',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          x="26"
          y="9"
        >
          Fundos de Investimentos
        </text>
      </g>
    </svg>
  );
}

function CircleWithDots() {
  return (
    <svg height="25px" width="125px">
      <defs>
        <pattern
          id="dots.bg"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <rect width="10" height="10" fill="#EDF2F7" />
          <circle cx="2.5" cy="2.5" r="2" fill="black" />
          <circle cx="7.5" cy="7.5" r="2" fill="black" />
        </pattern>
      </defs>
      <g transform="translate(0,3)">
        <rect width="230" height="18" fill="transparent" />
        <circle
          r="9"
          cx="9"
          cy="9"
          fill="url(#dots.bg)"
          strokeWidth="1"
          stroke="black"
          style={{ pointerEvents: 'none' }}
        />
        <text
          textAnchor="start"
          style={{
            fill: '#718096',
            fontSize: '12px',
            dominantBaseline: 'central',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
          x="26"
          y="9"
        >
          Renda Variável
        </text>
      </g>
    </svg>
  );
}

export default function Legends() {
  return (
    <Box className="flex justify-center w-full">
      <NormalCircle />
      <CircleWithLines />
      <CircleWithDots />
    </Box>
  );
}
