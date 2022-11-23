import {useEffect, useState} from "react";
import axios from "axios";
const useFetch = (url) => {
   const [state, setState] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null);
   useEffect(() => {
      const fetchData = async () => {
         setIsLoading(true);
         try {
            const {data} = await axios.get(url);
            setState(data);
         } catch (err) {
            console.log(err);
            setError(err);
         }
         setIsLoading(false);
      };
      fetchData();
   }, []);
   return [state, isLoading, error];
};
export {useFetch};
