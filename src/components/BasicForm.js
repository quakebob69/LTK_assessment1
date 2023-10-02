import React from 'react';
import { useDispatch } from 'react-redux'
import { addRow } from './../redux/tableSlice'
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import { Button } from '@mui/material';

const BasicForm = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ float: 'left', width: '100%', marginBottom: '10px' }}>
      <Formik
        initialValues={{
          todo: '',
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(addRow(values));
          resetForm({
            todo: '',
          })
        }}
      >
        <Form>
          <Field id="todo" name="todo" placeholder="Add Your Task" />
          <Button
            type="submit"
            variant="outlined"
          >
            ADD
          </Button>
        </Form>
      </Formik>
    </div>
  )
};

export default BasicForm
