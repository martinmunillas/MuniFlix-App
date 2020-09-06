import React from 'react';
import { connect } from 'react-redux'

import AdminMediaList from './AdminMediaList';

import '../../assets/style/components/admin/AdminMediaTemplate.scss'

class AdminMedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'mediaList',
    };
  }

  handleChangeSection = (e) => {
    this.setState({
      ...this.state,
      activeTab: e.target.name,
    });
  };

  render() {
    const {name} = this.props
    const { activeTab } = this.state;
    return (
      <>
        <div className='adminMedia_hero'>
          <h1>{name}</h1>
        </div>

        <div className='adminMedia_tabs'>

          <button
            name='mediaList'
            className={`adminMedia_tab ${activeTab === 'mediaList' && 'adminMedia_tabSelected'}`}
            onClick={this.handleChangeSection}
          >
            {name} List
          </button>
          
          <button
            name='createMedia'
            className={`adminMedia_tab ${activeTab === 'createMedia' && 'adminMedia_tabSelected'}`}
            onClick={this.handleChangeSection}
          >
            Create {name}
          </button>
          
        </div>

        <section className="adminMedia_section">
          {activeTab === 'createMedia' && this.props.form}
          {activeTab === 'mediaList' && <AdminMediaList media={this.props.media} mediaPath={this.props.mediaPath} />}
        </section>
      </>
    );
  }
}

export default AdminMedia;
