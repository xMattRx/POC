import { Box } from '@mui/material';
import { Block } from '../../molecules/block/block.tsx';
import { SectionBlocksStyles } from './sectionBlocks.styles';
import React from 'react';


export function SectionBlocks() {
  const styles = SectionBlocksStyles();

  const blocks = [
    {
      color: '#D1FAE5',
      img: './img/sectionTopics/attach.svg',
      description: 'Pellentesque quis tincidunt sit sed. Tortor massa sed habitant.',
      title: 'Fermentum amet',
    },
    {
      color: '#CFFAFE',
      img: './img/sectionTopics/pulse.svg',
      description: 'Quam sed neque vitae viverra purus venenatis ac non.',
      title: 'Dignissim quam',
    },
    {
      color: '#DBEAFE',
      img: './img/sectionTopics/pie-chart.svg',
      description: 'Eget sed nunc, amet, nibh nulla. Morbi sed risus ullamcorper diam.',
      title: 'Dignissim quam',
    },
    {
      color: '#EDE9FE',
      img: './img/sectionTopics/aperture.svg',
      description: 'Euismod sed pellentesque ut elementum.',
      title: 'Risus morbi',
    },
  ];

  return (
    <Box sx={styles.sectionBlocks} component="section">
      <Box sx={styles.sectionBlocks__content}>
        {blocks.map((block, index) => (
          <Block key={index} {...block} />
        ))}
      </Box>
    </Box>
  );
}
