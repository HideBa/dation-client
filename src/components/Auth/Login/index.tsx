import { Box } from '@chakra-ui/react';
import { useAuth } from '@dation/auth';
import Button from '@dation/components/Basic/Button';
import Flex from '@dation/components/Basic/Flex';
import Icon from '@dation/components/Basic/Icon';
import Input from '@dation/components/Basic/Input';
import Text from '@dation/components/Basic/Text';
import { Form, Formik, FormikHelpers } from 'formik';
import Link from 'next/link';
import React from 'react';
import useValidate from '../use-validate';

export type Props = {
  className?: string;
};

type AuthValues = {
  email: string;
  password: string;
};

const Login: React.FC<Props> = () => {
  const initialValues: AuthValues = { email: ``, password: `` };
  const { logIn } = useAuth();
  const handleSubmitForm = (
    values: AuthValues,
    { setSubmitting }: FormikHelpers<AuthValues>,
  ) => {
    setSubmitting(true);
    logIn?.(values.email, values.password);
    setSubmitting(false);
  };
  const { logInErrorMessagesSchema } = useValidate();

  return (
    <Box
      maxW="500px"
      border="solid 1px lightGray"
      p="5"
      borderRadius="5px"
      margin="auto"
      h="100%"
    >
      <Text fontSize="3xl">Log in</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitForm}
        validationSchema={logInErrorMessagesSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
          handleBlur,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Box m={4}>
              <Input
                type="email"
                placeHolder="diary@example.com"
                onChange={handleChange}
                value={values.email}
                id="email"
                onBlur={handleBlur}
                error={touched.email ? errors.email : ``}
              />
            </Box>
            <Box m={4}>
              <Input
                type="password"
                placeHolder="password"
                onChange={handleChange}
                value={values.password}
                id="password"
                onBlur={handleBlur}
                error={touched.password ? errors.password : ``}
              />
            </Box>
            <Box m={4}>
              <Button type="submit" disabled={isSubmitting} text="send" />
            </Box>
          </Form>
        )}
      </Formik>
      <Box
        m={4}
        border="solid 1px lightGray"
        p={2}
        borderRadius={5}
        cursor="pointer"
        _hover={{ background: `lightGray` }}
      >
        <Flex align="center">
          <Icon icon="google" size={40} />
          <Box ml={4}>
            <Text fontSize="m" color="gray">
              Login with Google
            </Text>
          </Box>
        </Flex>
      </Box>
      <Text fontSize="m" color="blue">
        <Link href="/signup">
          <a>Don&apos;t have account?</a>
        </Link>
      </Text>
    </Box>
  );
};

export default Login;
