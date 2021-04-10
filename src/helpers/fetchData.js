import md5 from 'md5';
import axios from "axios"



export default async function fetchData(context, id, detail, limit){
    const API_URL = process.env.REACT_APP_API_URL;
    const publicKey = process.env.REACT_APP_PUBLICKEY;
    const privateKey = process.env.REACT_APP_PRIVATKEY;
    const ts = process.env.REACT_APP_TS;
    const auth = `ts=${ts}&apikey=${publicKey}&hash=${md5(`${ts}${privateKey}${publicKey}`)}`;

    if(id || limit){
        const {data:{data:{results}}} = await axios.get(`${API_URL}/${context}${id ? `/${id}` : ""}${detail ? `/${detail}` : ""}?${auth}&limit=${limit ? limit : 100}`)
        return results
    }else{
        let offset = 0
        let characterList = []
        while(offset < 1400){
            const {data:{data:{results}}} = await axios.get(`${API_URL}/${context}${id ? `/${id}` : ""}${detail ? `/${detail}` : ""}?${auth}&limit=${100}&offset=${offset}`)
            characterList = await [...characterList, ...results]
            offset += 100
        }
        return characterList
    }
    
    
}
