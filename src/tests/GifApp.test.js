import React from 'react';
import { shallow } from 'enzyme';
import GifApp from '../GifApp';

describe('Test GifApp', () => {

    test('should render GifApp component', () => {
        const wrapper = shallow(<GifApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should show categories list', () => {
        const categories = ['gif'];
        const wrapper = shallow(<GifApp defaultCategories={categories} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });

});
