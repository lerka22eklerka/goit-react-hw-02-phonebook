import { Component } from 'react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';

const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  number: yup.string().min(10).max(13).required(),
});

const initialValues = {
  name: ' ',
  number: '',
  id: nanoid(),
};
export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    this.props.onAddContact(values);
    console.log(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <Form autoComplete="off">
          <label htmlFor="name">
            Name
            <Field
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorMessage name="name" component="div" />
          </label>
          <label htmlFor="number">
            Number
            <Field
              type="tel"
              name="number"
              pattern="\+?[0-9\s\-\(\)]+"
              title="You can enter only numbers, spaces and symbols. For example +380967775533"
            />
            <ErrorMessage name="number" component="div" />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}