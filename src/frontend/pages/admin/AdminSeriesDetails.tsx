import React from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { deleteSeries, addSeason } from "../../redux/actions";

import AdminSeasons from "../../components/admin/AdminSeasons";

import "../../assets/style/pages/admin/AdminSeriesDetails.scss";

interface AdminSeriesDetailsProps {}

const AdminSeriesDetails: React.FC<AdminSeriesDetailsProps> = ({}) => {
  const match = useRouteMatch<any>();
  const { serieId } = match.params;
  const {
    _id,
    name,
    cover,
    description,
    startYear,
    finalYear,
    cast,
    seasons,
  } = useSelector((state: any) =>
    state.media.series.find((serie: any) => serie._id == serieId)
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = () => {
    dispatch(deleteSeries(_id));
    history.push("/admin/series");
  };

  const handleAddSeason = () => {
    dispatch(addSeason(_id));
  };

  return (
    <div className='adminSeriesDetails'>
      <div className='adminSeriesDetails_serie'>
        <img src={cover} alt={name} className='adminMovieDetails__image' />
        <div className='adminSeriesDetails_serie-info'>
          <h1>{name}</h1>
          <p>
            {startYear} - {finalYear}
          </p>
          <p>{cast.join(", ")}</p>
          <p>{description}</p>
          <Link to={`/admin/series/${_id}/edit`}>
            <button>Edit</button>
          </Link>

          <button onClick={handleDelete} className='button2'>
            Delete
          </button>
        </div>
      </div>
      <div className='adminSeriesDetails_seasons'>
        {seasons.map((season: any) => (
          <AdminSeasons season={season} serieId={_id} key={season.number} />
        ))}
      </div>
      <button onClick={handleAddSeason}>Add Season</button>
    </div>
  );
};

export default AdminSeriesDetails;
