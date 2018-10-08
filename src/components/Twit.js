import React, { Component } from 'react';

class Twit extends Component {
  splitMessages (message) {
    let chunk = '', i = 1;
    let result = [], oriMessage = message.split(' '), maxCharacter = 50;
    if (!message.length) {
      return result;
    }
    if (message.length > maxCharacter) {
      oriMessage.forEach((word, index) => {
        if (word.length > maxCharacter) {
          throw new Error('Word has length > 50 chars');
        } else {
          if (chunk.length === 0) {
            chunk = word;
          } else if (chunk.length > 0 && chunk.length < maxCharacter - word.length - 1 - 4) {
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
    } else {
      oriMessage.forEach((word, index) => {
        if (word.length > maxCharacter) {
          throw new Error('Word has length > 50 chars');
        } else {
          if (chunk.length === 0) {
            chunk = word;
          } else if (chunk.length > 0 && chunk.length < maxCharacter - word.length - 1) {
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
    }
    
    if (chunk.length) {
      result.push(chunk);
      chunk = '';
    }
    
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