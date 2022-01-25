


export const getGifs = async (query) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${query}&limit=10&api_key=ScORUgp3yI7Ab9s770mLeuEr01iR50am`;
    
    const resp = await fetch(url)
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id : img.id,
            title : img.title,
            url : img.images?.downsized_medium?.url
        }
    });

    return gifs;
}