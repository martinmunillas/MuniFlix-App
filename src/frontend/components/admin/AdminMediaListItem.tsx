import React from "react";
import { Link } from "react-router-dom";

import "../../assets/style/components/admin/AdminMediaListItem.scss";

const AdminMediaListItem = (props: any) => {
  return (
    <li className='adminMediaListItem'>
      <img src={props.cover} alt='' />
      <div className='adminMediaListItem__info'>
        <h1>{props.name}</h1>
        <br />
        <p>
          {props.year ? props.year : `${props.startYear} - ${props.finalYear}`}{" "}
          | {props.director ? props.director : "S" + props.seasons.length} |{" "}
          {props.clasification > 0 ? `+${props.clasification}` : "All Ages"}
        </p>
        <br />
        <p>{props.description}</p>
      </div>
      <Link to={`/admin${props.mediaPath}/${props._id}`}>
        <button className='button2'>Edit ➡</button>
      </Link>
    </li>
  );
};

export default AdminMediaListItem;
