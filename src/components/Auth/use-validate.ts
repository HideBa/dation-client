import * as Yup from 'yup';

const useValidate = () => {
  const signUpErrorMessagesSchema = Yup.object().shape({
    email: Yup.string()
      .email(`無効なメールアドレスです`)
      .required(`必須項目です`),
    password: Yup.string()
      .required(`必須項目です`)
      .min(8, `パスワードは8文字以上です`),
    passwordConfirmation: Yup.string()
      .required(`必須項目です`)
      .when(`password`, {
        is: (val: string) => !!(val && val.length > 7),
        then: Yup.string().oneOf(
          [Yup.ref(`password`)],
          `Password must be same`,
        ),
      }),
  });
  const logInErrorMessagesSchema = Yup.object().shape({
    email: Yup.string()
      .email(`無効なメールアドレスです`)
      .required(`必須項目です`),
    password: Yup.string()
      .required(`必須項目です`)
      .min(8, `パスワードは8文字以上です`),
  });
  return { signUpErrorMessagesSchema, logInErrorMessagesSchema };
};

export default useValidate;
