import React from 'react';
import { useDispatch } from 'react-redux'
import { addRow } from './../redux/tableSlice'
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';

const BasicForm = () => {
  const dispatch = useDispatch();


  return (
  <div>
    <h1>TODO</h1>
    <Formik
      initialValues={{
        todo: '',
      }}
      onSubmit={(values) => {
       dispatch(addRow(values))
      }}
    >
      <Form>
        <Field id="todo" name="todo" placeholder="TextHere" />
        <button type="submit">Add Todo</button>
      </Form>
    </Formik>
  </div>
)};

export default BasicForm
