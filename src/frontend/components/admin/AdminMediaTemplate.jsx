import React from 'react';
import { connect } from 'react-redux';

import AdminMediaList from './AdminMediaList';

import '../../assets/style/components/admin/AdminMediaTemplate.scss';
import { Link } from 'react-router-dom';

const AdminMedia = (props) => {
  const { name } = props;
  return (
    <>
      <div className='adminMedia_hero'>
        <h1>{name}</h1>
        <Link to={`/admin${props.mediaPath}/add`}>Add {name} ➡</Link>
      </div>
      <AdminMediaList media={props.media} mediaPath={props.mediaPath} />
    </>
  );
};

export default AdminMedia;
