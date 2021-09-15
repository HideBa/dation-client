import { CloseIcon } from '@chakra-ui/icons';
import { FcGoogle } from 'react-icons/fc';
import React from 'react';

export type Props = {
  className?: string;
  icon: IconType;
  size?: number | string;
};

const icons = {
  close: CloseIcon,
  google: FcGoogle,
} as const;

export type IconType = keyof typeof icons;

const Icon: React.FC<Props> = ({ className, icon, size = 24 }) => {
  const IconComponent = icons[icon];
  return <IconComponent className={className} size={size} />;
};

export default Icon;
