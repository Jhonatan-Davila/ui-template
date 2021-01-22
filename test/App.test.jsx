import { shallow } from 'enzyme';
import App from '../src/App';
import React from 'react';
import renderer from 'react-test-renderer';

describe('App', () => {
  test('matches its snapshot', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
	});
	
	describe('component', () => {
		let wrapper;
		beforeAll(() => {
				wrapper = shallow(<App />);
		});
		it('renders without error', () => {
			expect(wrapper).toHaveLength(1);
		});
	});
});
