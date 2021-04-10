import axios from "axios"


const handleSetData = async (values) => {
    await axios.put(process.env.REACT_APP_REAL_TIME_DATA_BASE, values)
    .then((response)=>console.log("Successfull")).catch((err)=>console.log(err))
}
export default handleSetData