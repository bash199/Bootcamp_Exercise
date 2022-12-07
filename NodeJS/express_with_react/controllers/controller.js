import { fetchData } from "../services/fetchData.service.js";

export const apiController = (req, res) => {
  fetchData('https://api.chucknorris.io/jokes/random').then(({value})=>{
      res.status(200).send(value)
    }
  ).catch((error)=>{res.status(404).send(error)})
  };
