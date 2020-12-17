import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Test useFetchGifs', () => {

    test('should return initial state', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('gif'));
        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('should return an images array and loading with false value', async() => {
        const defaultLimit = 10;
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('gif'));
        await waitForNextUpdate();
        const { data, loading } = result.current;
        expect(data.length).toEqual(defaultLimit);
        expect(loading).toBe(false);
    });

});
