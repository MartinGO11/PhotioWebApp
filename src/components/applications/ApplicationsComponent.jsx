import React from 'react';
import colors from '../../styles/global/colors';
import { CardComponent } from '../globals/CardComponent';


export const ApplicationsComponent = ({applicationsContent}) => {
  
  return (
    <>
    {
      applicationsContent.map((application, index) => {
        return (
          <CardComponent key={`card-${index}`} cardContent={application} color={ index % 2 === 0 ? colors.green_1 : colors.blue_1} />
        )
      })
    }
    </>
  )
}
