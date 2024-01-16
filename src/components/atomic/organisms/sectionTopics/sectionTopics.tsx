import React from 'react';
import { Box } from '@mui/material';
import { Topic } from '../../molecules/topic/topic';
import { SectionTopicsStyles } from './sectionTopics.styles';


export function SectionTopics() {
  const styles = SectionTopicsStyles();

  const topics = [
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
    <Box sx={styles.sectionTopics} component="section">
      <Box sx={styles.sectionTopics__content}>
        {topics.map((topic, index) => (
          <Topic key={index} {...topic} />
        ))}
      </Box>
    </Box>
  );
}
