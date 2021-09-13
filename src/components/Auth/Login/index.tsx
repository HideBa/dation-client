import { useAuth } from '@dation/auth';
import Button from '@dation/components/Basic/Button';
import Input from '@dation/components/Basic/Input';
import Text from '@dation/components/Basic/Text';
import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react';
import useValidate from '../use-validate';

export type Props = {
  className?: string;
};

type AuthValues = {
  email: string;
  password: string;
};

const Login: React.FC<Props> = ({ className }) => {
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
    <div className={className}>
      <Text fontSize="lg" color="red">
        Login
      </Text>
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
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeHolder="diary@example.com"
              onChange={handleChange}
              value={values.email}
              id="email"
              onBlur={handleBlur}
              error={touched.email ? errors.email : ``}
            />
            <Input
              type="password"
              placeHolder="password"
              onChange={handleChange}
              value={values.password}
              id="password"
              onBlur={handleBlur}
              error={touched.password ? errors.password : ``}
            />
            <Button type="submit" disabled={isSubmitting} text="send" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
