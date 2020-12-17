import React from 'react';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Test GifGridItem', () => {
    
    const title = 'Hi GIF';
    const url = 'https://localhost/image.gif';
    const wrapper = shallow(
        <GifGridItem 
            title={title} 
            url={url} />
    );

    test('should render GifGridItem component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should contain url in href attribute of a label', () => {
        const link = wrapper.find('a');
        expect(link.prop('href')).toBe(url);
    });

    test('should contain url/title in src/alt attribute of img label', () => {
        const image = wrapper.find('img');
        expect(image.prop('src')).toBe(url);
        expect(image.prop('alt')).toBe(title);
    });

    test('should contain title paragraph', () => {
        const titleParagraph = wrapper.find('p').text().trim();
        expect(titleParagraph).toBe(title);
    });

    test('should contain "animate__fadeIn" class in a label', () => {
        const link = wrapper.find('a');
        expect(link.hasClass('animate__fadeIn')).toBe(true);
    });

});
