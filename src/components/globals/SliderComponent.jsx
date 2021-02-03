import React from 'react';

export const SliderComponent = ({sliderContent}) => {

  return (
    <div style={{
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: `url(${sliderContent.background})`,
      height: '90vh',
    }}>
      <p style={{
        color: 'white',
        fontSize: '18px',
        padding: '20px 30px 20px 30px',
        background: 'rgba(24,70,102,0.8)',
        position: 'absolute',
        top: '80%',
        left: '60%',
        marginRight: '10vw',
      }}>
        {sliderContent.description}
      </p>

    </div>
  )
}
