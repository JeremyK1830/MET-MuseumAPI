const API = "https://collectionapi.metmuseum.org/public/collection/v1/objects"


export const fetchPaintings = async (id) => {  
    const dataFetch = await fetch(`${API}/${id}`)
    const jsonData = await dataFetch.json()
    return jsonData
    }
