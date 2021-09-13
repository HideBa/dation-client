import React, { ChangeEvent } from 'react';
import { Input as ChakraInput } from '@chakra-ui/react';
import Flex from '../Flex';
import Text from '../Text';

type Input = 'password' | 'email' | undefined;

export type Props = {
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeHolder?: string;
  initialValue?: string;
  value?: string;
  type?: string;
  size?: string;
  error?: string;
  name?: string;
  id?: string;
  onBlur?: (e: React.FocusEvent<any>) => void;
};

const Input: React.FC<Props> = ({
  className,
  onChange,
  placeHolder,
  value,
  type = `text`,
  size,
  error,
  name,
  id,
  onBlur,
}) => (
  <Flex direction="column">
    <ChakraInput
      className={className}
      placeholder={placeHolder}
      value={value}
      type={type}
      size={size}
      name={name}
      id={id}
      onChange={onChange}
      onBlur={onBlur}
    />
    {error && <Text color="red">{error}</Text>}
  </Flex>
);

export default Input;
