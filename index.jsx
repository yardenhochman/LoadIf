import React from 'react';
import Media from 'react-media';

export const Desktop = '(min-device-width: 1100px)';
export const mobileDevice = 'screen and (max-device-width: 1100px)';
export const PhonePortrait = `${mobileDevice} and (orientation: portrait)`;
export const PhoneLandscape = `${mobileDevice} and (orientation: landscape)`;


export default {
  Desktop: ({ children }) => (
    <Media query={Desktop}>
      {children}
    </Media>
  ),
  Portrait: ({ children }) => (
    <Media query={PhonePortrait}>
      {children}
    </Media>
  ),
  notPortrait: ({ children }) => (
    <Media query={`not ${PhoneLandscape}`}>
      {children}
    </Media>
  ),
};
