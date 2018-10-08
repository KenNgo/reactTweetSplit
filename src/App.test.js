import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import store from './store';
import App from './App';
import Twit from './components/Twit';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(  <Provider store={store}>
    <App />
  </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('splitting message', () => {
  	it('should return empty array if message is empty', () => {
		const wrapper = shallow(<Twit />);
		expect(wrapper.instance().splitMessages('')).toEqual([]);
  });
});