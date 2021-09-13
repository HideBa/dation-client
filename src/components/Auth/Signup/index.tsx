import React from 'react';

import Button from '@dation/components/Basic/Button';
import Input from '@dation/components/Basic/Input';
import Text from '@dation/components/Basic/Text';
import { Form, Formik, FormikHelpers } from 'formik';

import { useAuth } from '@dation/auth';
import { Box } from '@chakra-ui/react';
import useValidate from '../use-validate';

export type Props = {
  className?: string;
  // onSend?: (email: string, password: string) => void;
};

type AuthValues = {
  email: string;
  password: string;
  passwordConfirmation: string;
};

const Signup: React.FC<Props> = ({ className }) => {
  const initialValues: AuthValues = {
    email: ``,
    password: ``,
    passwordConfirmation: ``,
  };

  const { signUp } = useAuth();

  const handleSubmitForm = (
    values: AuthValues,
    { setSubmitting }: FormikHelpers<AuthValues>,
  ) => {
    setSubmitting(true);
    signUp?.(values.email, values.password);
    setSubmitting(false);
  };
  const { signUpErrorMessagesSchema } = useValidate();
  return (
    <div className={className}>
      <Text fontSize="lg" color="red">
        Sign up
      </Text>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmitForm}
        validationSchema={signUpErrorMessagesSchema}
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
              <Input
                type="password"
                placeHolder="confirm password"
                onChange={handleChange}
                value={values.passwordConfirmation}
                id="passwordConfirmation"
                onBlur={handleBlur}
                error={
                  touched.passwordConfirmation
                    ? errors.passwordConfirmation
                    : ``
                }
              />
            </Box>
            <Box m={4}>
              <Button type="submit" disabled={isSubmitting} text="send" />
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
