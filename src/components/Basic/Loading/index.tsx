import { Spinner } from '@chakra-ui/react';
import React from 'react';

export type Props = {
  className?: string;
  size?: 'sm' | 'xs' | 'md' | 'lg' | 'xl' | undefined;
  color?: string;
};

const Loading: React.FC<Props> = ({ size = `sm`, color = `gray` }) => (
  <Spinner size={size} color={color} />
);

export default Loading;
