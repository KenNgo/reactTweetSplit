import React, { Component } from 'react';
import { connect } from 'react-redux';
import Twit from './Twit';

class TwitList extends Component {
  render() {
    return (
      <div className="twit-list">
          <h3 className="heading">Twits: </h3>
          {this.props.twits.map((twit) => (
            <div key={twit.id}>
              <Twit twit={twit} key={twit.id} />
            </div>
        ))}
      </div>
      );
    }
}

const mapStateToProps = (state) => {
  return {
    twits: state.reducerTwit
  }
}
export default connect(mapStateToProps)(TwitList);