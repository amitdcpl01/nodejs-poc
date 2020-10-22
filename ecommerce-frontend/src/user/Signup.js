import React, { useState } from 'react';
import Layout from '../core/Layout';
import { signup } from '../auth';


const Signup = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    error: '',
    success: false
  });

  const { name, email, password, success, error } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      //signup({ name: name, email: email, password: password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false })
        }
        else {
          setValues({
            ...values,
            name: '',
            email: '',
            password: '',
            error: '',
            success: true
          })
        }
      })
  }


  const signUpForm = () => (

    <form>
      <div className='form-group'>
        <label className='text-muted'>Name</label>
        <input type='text'
          className='form-control'
          onChange={handleChange('name')}
          value={name}
        ></input>
      </div>

      <div className='form-group'>
        <label className='text-muted'>Email</label>
        <input
          type='email'
          className='form-control'
          onChange={handleChange('email')}
          value={email}
        ></input>
      </div>

      <div className='form-group'>
        <label className='text-muted'>Password</label>
        <input
          type='password'
          className='form-control'
          onChange={handleChange('password')}
          value={password}
        >
        </input>
      </div>
      <button onClick={clickSubmit} className='btn btn-primary'>Submit</button>
    </form>
  );

  const showError = () => (
    <div className='alert alert-danger'
      style={{ display: error ? '' : 'none' }}
    >
      { error}
    </div>
  )

  const showSuccess = () => (
    <div className='alert alert-info'
      style={{ display: success ? '' : 'none' }}>
      'New account is created, Please signin'
    </div >
  )


  return (
    <Layout title='Singup Page'
      description='Signup to Node React E-commerce App'
      className='container col-md-8 offset-md-2'
    >
      {showSuccess()}
      {showError()}
      {signUpForm()}
      {/* {JSON.stringify(values)} */}
    </Layout>
  )
};

export default Signup;