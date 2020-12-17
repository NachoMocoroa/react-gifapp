import { useState, useEffect } from 'react';
import { getAPIGifs } from '../helpers/getAPIGifs';

export const useFetchGifs = (category) => {

    const [ state, setState ] = useState({
        data: [],
        loading: true
    });
    
    useEffect(() => {
        getAPIGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                });
            })
    }, [category]);

    return state;
};
