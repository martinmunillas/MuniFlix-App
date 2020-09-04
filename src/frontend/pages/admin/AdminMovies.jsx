import React from 'react';

import AdminCreateMovieSection from '../../components/admin/AdminCreateMovieSection';

class AdminMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'moviesList',
    };
  }

  handleChangeSection = (e) => {
    this.setState({
      ...this.state,
      activeTab: e.target.name,
    });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <>
        <div className='adminMovies_hero'>
          <h1>Movies</h1>
        </div>
        <div className='adminMovies_buttons'>
          <button
            name='moviesList'
            className={`adminMovies_tab ${
              activeTab !== 'moviesList' && 'unselected'
            }`}
            onClick={this.handleChangeSection}
          >
            Movies List
          </button>
          <button
            name='createMovie'
            className={`adminMovies_tab ${
              activeTab !== 'createMovie' && 'unselected'
            }`}
            onClick={this.handleChangeSection}
          >
            Create Movie
          </button>
        </div>
        <div>
          {activeTab === 'createMovie' && <AdminCreateMovieSection />}
          {activeTab === 'moviesList' && <h1>Movies List</h1>}
        </div>
      </>
    );
  }
}

export default AdminMovies;
