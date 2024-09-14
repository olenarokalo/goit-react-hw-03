import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";

export default function ContactForm({ addContact }) {
  const id = useId();
  const handleSubmit = (values, actions) => {
    addContact(values);
    actions.resetForm();
  };

  const addContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={addContactSchema}
    >
      <Form className={css.form}>
        <div className={css.wrpap}>
          <ErrorMessage className={css.error} name="name" component="span" />
          <Field
            className={css.input}
            type="text"
            name="name"
            id={`name${id}`}
            placeholder=""
          />
          <label className={css.label} htmlFor={`name${id}`}>
            Name
          </label>
        </div>
        <div className={css.wrpap}>
          <ErrorMessage className={css.error} name="number" component="span" />
          <Field
            className={css.input}
            type="number"
            name="number"
            placeholder=""
            id={`number${id}`}
          />
          <label className={css.label} htmlFor={`number${id}`}>
            Number
          </label>
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
