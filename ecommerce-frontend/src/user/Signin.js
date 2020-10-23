import React, { useState } from 'react';
import Layout from '../core/Layout';
import { signin, authenticate, isAuthenticated } from '../auth';
import { Redirect } from 'react-router-dom';


const Signin = () => {
  const [values, setValues] = useState({
    email: 'amit@gmail.com',
    password: '111111',
    error: '',
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, error, redirectToReferrer } = values;

  const { user } = isAuthenticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value })
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password })
      //signup({ name: name, email: email, password: password })
      .then(data => {
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false })
        }
        else {
          authenticate(
            data, () => {
              setValues({
                ...values,
                redirectToReferrer: true
              });

            }
          )
        }
      })
  }


  const signUpForm = () => (

    <form>
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

  const showLoading = () =>
    loading && (
      <div className='alert alert-info'>
        <h2>Loading....</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return <Redirect to='/admin/dashboard'></Redirect>
      } else {
        return <Redirect to='/user/dashboard'></Redirect>
      }
    }
    if (isAuthenticated()) {
      return <Redirect to='/'></Redirect>
    }
  }

  return (
    <Layout title='Signin Page'
      description='Signin to Node React E-commerce App'
      className='container col-md-8 offset-md-2'
    >
      {showLoading()}
      {showError()}
      {signUpForm()}
      {redirectUser()}
      {/* {JSON.stringify(values)} */}
    </Layout>
  )
};

export default Signin;