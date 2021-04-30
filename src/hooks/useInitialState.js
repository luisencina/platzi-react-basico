import {useState, useEffect} from 'react'

const initialState = (API) =>  {
    const [ videos, setVideos ] = useState({mylist: [], trends: [], originals: []})
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data))
    }, [])//si no se coloca el segundo elemente [] creará un bucle infinito

    return videos;
}

export default initialState;