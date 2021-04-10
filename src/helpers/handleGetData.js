import axios from "axios"


const handleGetData = async ()=>{
    let data = []
    await axios.get(process.env.REACT_APP_REAL_TIME_DATA_BASE)
        .then(response => {
            data = response.data}
        ).catch(error => {
            console.log(error)
        });

    return data

}

export default handleGetData