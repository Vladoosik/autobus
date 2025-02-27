// modules
import React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';

const BusIcon = () => {
    return (
      <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
        <Path fill="url(#pattern0_5_301)" d="M0 0H30V30H0z" />
        <Defs>
          <Pattern
            id="pattern0_5_301"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}>
            <Use xlinkHref="#image0_5_301" transform="scale(.01042)" />
          </Pattern>
          <Image
            id="image0_5_301"
            width={96}
            height={96}
            xlinkHref="data:image/png;base64,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"
          />
        </Defs>
      </Svg>
    );
};

export default BusIcon;
