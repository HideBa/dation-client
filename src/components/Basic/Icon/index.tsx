import { CloseIcon } from '@chakra-ui/icons';
import React from 'react';

export type Props = {
  className?: string;
  icon: IconType;
};

const icons = {
  close: CloseIcon,
} as const;

export type IconType = keyof typeof icons;

const Icon: React.FC<Props> = ({ className, icon }) => (
  <div className={className}>{icons[icon]}</div>
);

export default Icon;
