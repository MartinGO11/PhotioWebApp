import React from 'react';
import colors from '../../styles/global/colors';
import { CardComponent } from '../globals/CardComponent';

export const AboutComponents = ({aboutContent}) => {
  return (
    <>
    {
      aboutContent.map((about, index) => {
        return (
          <CardComponent key={`cardAbout-${index}`} cardContent={about} color={ index % 2 === 0 ? colors.blue_1 : colors.green_1} />
        )
      })
    }
    </>
  )
}
