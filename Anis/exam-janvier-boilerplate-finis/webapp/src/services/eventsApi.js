import axios from 'axios'

const event = axios.create({
    baseURL: "http://localhost:3001/api/events",
  });

const retrieveAll = () => {
    return event.get("/").then((r) => r.data);
}

const create = (newVolume) => {
    return event.post("/", newVolume);

}

const remove = (resourceId) => {
    return event.delete(`/${resourceId}`);
}


export  {
    retrieveAll,
    create,
    remove
}