import React, { Component } from 'react';

class Twit extends Component {
  splitWith (arr, length) {
    let chunk = '', result = [];
    const maxCharacter = 50;
    arr.forEach((word, index) => {
      if (word.length > maxCharacter) {
        window.alert(`Word has length > ${maxCharacter} chars`);
      } else {
        if (chunk.length === 0) {
          chunk = word;
        } else if (chunk.length > 0 && chunk.length < length - word.length) {
          chunk += ' ' + word;
          if (index === arr.length - 1) {
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
    return result;
  }

  splitMessages (message) {
    let chunk = '', i = 0;
    let result = [], oriMessage = message.split(' '), maxCharacter = 50;
    if (!message.length) {
      return result;
    }
    if (message.length > maxCharacter) {
      result = this.splitWith(oriMessage, maxCharacter - 1 - 4);
    } else {
      result = this.splitWith(oriMessage, maxCharacter - 1);
    }
    
    for (i = 0; i < result.length; i++) {
      if (result.length > 1) {
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
    const containerClass = (messages.length > 1)? 'twit' : 'twit-none-split';
    return (
      <div className={containerClass}>
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