import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from './store';
import App from './App';
import Twit from './components/Twit';

configure({ adapter: new Adapter() });

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(  <Provider store={store}>
    <App />
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe ('splitting message', () => {
  	it ('should return empty array if message is empty', () => {
		const wrapper = shallow(<Twit />);
		expect(wrapper.instance().splitMessages('')).toEqual([]);
  	});
  	it ('should return full message if message is less than 50 characters', () => {
		const wrapper = shallow(<Twit />);
		const message = 'Each message is now 49 characters';
		expect(wrapper.instance().splitMessages(message)).toEqual(['Each message is now 49 characters']);
  	});
	it ('should display an alert if message has non-whitespace and longer than 50 characters', () => {
		window.alert = jest.fn();
		const wrapper = shallow(<Twit />);
		const message = 'I-cannot-believe-Tweeter-now-supports-chunking-my-messages';
		const instance = wrapper.instance();
		instance.splitMessages(message);
      	expect(window.alert).toHaveBeenCalledWith('Word has length > 50 chars');
  	});
  	it ('should return messages array if message is more than 50 characters', () => {
		const wrapper = shallow(<Twit />);
		const message = 'I can\'t believe Tweeter now supports chunking my messages, so I don\'t have to do it myself.';
		expect(wrapper.instance().splitMessages(message).length).toBe(2);
		expect(wrapper.instance().splitMessages(message)).toEqual(['1/2 I can\'t believe Tweeter now supports chunking', '2/2 my messages, so I don\'t have to do it myself.']);
  	});
});