import * as Yup from "yup";

import TAGS_VALIDATION_FORM from "../tags/tags";

const Schema = Yup.object().shape({
  email: Yup.string().required(TAGS_VALIDATION_FORM.EMAIL.IS_REQUIRED),
  name: Yup.string().required(TAGS_VALIDATION_FORM.NAME.IS_REQUIRED),
  phone: Yup.number().required(TAGS_VALIDATION_FORM.PHONE.IS_REQUIRED),
  message: Yup.string().required(TAGS_VALIDATION_FORM.MESSAGE.IS_REQUIRED)
});

export default Schema;
