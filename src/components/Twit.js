import React, { Component } from 'react';

class Twit extends Component {
  splitMessages (message) {
    let chunk = '', i = 1;
    let result = [], oriMessage = message.split(' '), maxCharacter = 50;
    if (!message.length) {
      return result;
    }
    oriMessage.forEach((word, index) => {
      if (word.length > maxCharacter) {
        throw new Error('Word has length > 50 chars');
      } else {
        if (chunk.length === 0) {
          chunk = word;
        } else if (chunk.length > 0 && chunk.length < maxCharacter - word.length - 1) {
          if (messages.length <= maxCharacter - 1) {
            if (chunk.length < maxCharacter - word.length - 4 -1) {
              
            }
          }
          chunk += ' ' + word;
          if (index === oriMessage.length - 1) {
            result.push(chunk);
            chunk = '';
          }
        } else {
          result.push(chunk);
          chunk = word;
        }
      }
    });
    if (chunk.length) {
      result.push(chunk);
      chunk = '';
    }
    console.log(result.length, result);
    for (i = 0; i < result.length; i++) {
      if (result.length === 1) {
        result[i] = result[i];
      } else {
        result[i] = `${i+1}/${result.length} ${result[i]}`;
      }
    }
    return result;
  }

  render() {
    let messages = [];
    if (typeof this.props.twit !== 'undefined') {
      messages = this.splitMessages(this.props.twit.message);
    }
    return (
      <div className="twit">
          {messages.map((message, index) => (
            <p className="twit-message" key={index}>
              {message}
            </p>
          ))}
      </div>
    );
  }
}

export default Twit;