import * as yup from 'yup';

export const videoValidationSchema = yup.object().shape({
  caption: yup.string(),
  content: yup.string().required(),
  business_id: yup.string().nullable(),
});
