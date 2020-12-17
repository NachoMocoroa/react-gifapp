import { getAPIGifs } from '../../helpers/getAPIGifs';

describe('Test getAPIGifs', () => {

    test('should get 10 elements', async() => {
        const gifs = await getAPIGifs('gif');
        expect(gifs.length).toBe(10);
    });

    test('should get 0 elements if not category has been passed', async() => {
        const gifs = await getAPIGifs('');
        expect(gifs.length).toBe(0);
    });

});
