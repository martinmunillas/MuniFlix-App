import React from 'react';
import { Link } from 'react-router-dom';

const AdminMediaListItem = (props) => {
  return (
    <li className='adminMediaListItem'>
      <Link to={`/admin${props.mediaPath}/${props._id}`}>
        <h1>{props.name}</h1>
        <p>
          {props.year ? props.year : `${props.startYear} - ${props.finalYear}`}{' '}
          | {props.director}
        </p>
      </Link>
    </li>
  );
};

export default AdminMediaListItem;
