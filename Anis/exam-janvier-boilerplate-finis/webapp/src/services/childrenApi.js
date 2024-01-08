import axios from 'axios'



const children = axios.create({
    baseURL: "http://localhost:3001/api/children",
  });


const retrieveAll = () => {

    return children.get("/").then((r) => r.data);

    }



   


export  {
    retrieveAll,
    
}