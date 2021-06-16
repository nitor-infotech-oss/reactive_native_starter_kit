import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {IconsInterface} from '@utils/interface';
import {defaultColors} from '@static/colors';

export const Tab = ({name, size, color}: IconsInterface) => {
  return (
    <MaterialCommunityIcons
      name={name || 'tab'}
      size={size || 30}
      color={color || defaultColors.black}
    />
  );
};
