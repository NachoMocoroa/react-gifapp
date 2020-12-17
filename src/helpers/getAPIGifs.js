export const getAPIGifs = async( category ) => {
    const apiKey = 'mMFu3Cp45vszWQgGWWh76aKt2WdQohpe';
    const urlBase = 'https://api.giphy.com/v1/gifs/search';
    const limit = 10;
    const url = `${urlBase}?q=${ encodeURI(category) }&limit=${limit}&api_key=${apiKey}`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });
    
    return gifs;
};