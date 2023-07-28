import React from "react";

const Gradient = ({ className, ...props }) => {
  return (
    <div className={`${className} absolute`}>
      <svg xmlns='http://www.w3.org/2000/svg' width='533' height='931' viewBox='0 0 533 931' fill='none'>
        <g filter='url(#filter0_f_121_941)'>
          <path
            d='M581 465.5C581 529.289 529.289 581 465.5 581C401.711 581 350 529.289 350 465.5C350 401.711 401.711 350 465.5 350C529.289 350 581 401.711 581 465.5Z'
            fill='#FF00D6'
            fill-opacity='0.4'
          />
        </g>
        <defs>
          <filter id='filter0_f_121_941' x='0' y='0' width='931' height='931' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
            <feGaussianBlur stdDeviation='175' result='effect1_foregroundBlur_121_941' />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Gradient;
