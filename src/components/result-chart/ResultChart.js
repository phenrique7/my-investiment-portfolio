import React from 'react';
import PropTypes from 'prop-types';
import { ResponsivePie } from '@nivo/pie';

export default function ResultChart({ data }) {
  return (
    <ResponsivePie
      data={data}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={[
        '#42a5f5',
        '#f47560',
        '#f1e15b',
        '#e8a838',
        '#ba68c8',
        '#26a69a',
      ]}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      radialLabelsSkipAngle={10}
      radialLabelsTextXOffset={6}
      radialLabelsTextColor="#333333"
      radialLabelsLinkOffset={0}
      radialLabelsLinkDiagonalLength={16}
      radialLabelsLinkHorizontalLength={24}
      radialLabelsLinkStrokeWidth={1}
      radialLabelsLinkColor={{ from: 'color' }}
      sliceLabel={d => `${d.value}%`}
      slicesLabelsSkipAngle={10}
      slicesLabelsTextColor="#333333"
      motionStiffness={90}
      motionDamping={15}
      animate
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: 'rgba(255, 255, 255, 0.3)',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'Ativos de Renda Variável',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'Fundos multimercados',
          },
          id: 'lines',
        },
      ]}
      legends={[
        {
          anchor: 'bottom-right',
          direction: 'column',
          translateY: 80,
          itemWidth: 100,
          itemHeight: 22,
          itemTextColor: '#444',
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  );
}

ResultChart.propTypes = {
  data: PropTypes.array.isRequired,
};
