import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
    const { loading, request, error } = useHttp();

    _apiBase = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=69d8fb97dce7de89ea39e572903300ab';
    _baseOffset = 210;

    // !!! "getResource" заменён на "request"
    // getResource = async (url) => {
    //     let res = await fetch(url);

    //     if (!res.ok) {
    //         throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    //     }

    //     return await res.json();
    // }

    const getAllCharacters = async (offset = _baseOffset) => {
        const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
        return res.data.results.map(_transformCharacter);
    }

    const getCharacter = async (id) => {
        const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);

        // console.log(res.data.results[0]); // временно

        return _transformCharacter(res.data.results[0]);
    }

    const _transformCharacter = (char) => {
        return {
            id: char.id,
            name: char.name,
            description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage: char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items,
        }
    }

    return { loading, error, getAllCharacters, getCharacter };
}

export default MarvelService;