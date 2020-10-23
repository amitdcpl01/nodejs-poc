import React from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { Link } from 'react-router-dom';


const AdminDashboard = () => {

  const { user: { _id, name, email, role } } = isAuthenticated();

  const adminlinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Admin Links</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className='nav-link' to='/create/category'>Create category</Link>
          </li>
          <li className="list-group-item">
            <Link className='nav-link' to='/create/product'>Create Product</Link>
          </li>
        </ul>
      </div>
    )
  }

  const adminInfo = () => {
    return (
      <div className='card mb-5'>
        <h3 className="card-header"> Admin Information</h3>
        <ul className="list-group">
          <li className="list-group-item">{name}</li>
          <li className="list-group-item">{email}</li>
          <li className="list-group-item">{role === 1 ? 'Admin' : 'Register User'}</li>
        </ul>
      </div>)
  }

  // const purchaseHistory = () => {
  //   return (
  //     <div className="card mb-5">
  //       <h3 className="card-header">Purchase history</h3>
  //       <ul className="list-group">
  //         <li className="list-group-item">history</li>
  //       </ul>
  //     </div>
  //   )
  // }

  return (
    <Layout title='Dashboard' description={`G'Day ${name}`} className='container-fluid'>

      <div className="row">
        <div className="col-3">
          {adminlinks()}
        </div>
        <div className="col-9">
          {adminInfo()}
          {/* {purchaseHistory()} */}
        </div>
      </div>


    </Layout>
  )
}

export default AdminDashboard;
