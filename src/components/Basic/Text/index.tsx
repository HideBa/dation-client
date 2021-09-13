import React from 'react';
import { Text as ChakraText, ThemingProps } from '@chakra-ui/react';

export type Props = {
  className?: string;
  color?: string;
  children?: React.ReactNode;
  fontSize?: ThemingProps['size'];
};

const Text: React.FC<Props> = ({ className, children, fontSize, color }) => (
  <ChakraText className={className} fontSize={fontSize} color={color}>
    {children}
  </ChakraText>
);

export default Text;
