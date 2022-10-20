const API_KEY = "958fab29-eabe-4aec-87a7-b0e055ce9db0&offset=0"

const getMatches = (match) =>{

    const url=`https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}`
    
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.error(error,"ERROR"))
}


export const getMatchDetails = (id) =>{

const url= `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}&id=${id}`
return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.error(error,"ERROR"))



}

export default getMatches