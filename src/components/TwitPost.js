import React, { Component } from 'react';
import { connect } from 'react-redux';

class TwitPost extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const message = this.getMessage.value;
    let data = {
      id: new Date(),
      message
    };
    this.props.dispatch({
      type: 'CREATE_TWIT',
      data
    });
    this.getMessage.value = '';
  }

  render() {
    return (
      <div className="twit-post">
        <form className="form" onSubmit={this.handleSubmit} >
         <textarea required rows="5" ref={(input) => this.getMessage = input}
         cols="28" placeholder="What's happening?" /><br /><br />
         <button>Tweet</button>
        </form>
      </div>
    );
  }
}

export default connect()(TwitPost);