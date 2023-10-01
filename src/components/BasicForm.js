import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';

const BasicForm = () => (
  <div>
    <h1>TODO</h1>
    <Formik
      initialValues={{
        todo: '',
      }}
      onSubmit={(values) => {alert(JSON.stringify(values))}}
    >
      <Form>
        <Field id="todo" name="todo" placeholder="TextHere" />
        <button type="submit">Add Todo</button>
      </Form>
    </Formik>
  </div>
);

export default BasicForm
