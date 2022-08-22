import {createContext,useEffect,useState} from "react";
import axios from  'axios';

const GlobalProvider = createContext({});

const InfoContext = ({children}) => {

  const [firstName,setFirstName] = useState('');

  const [lastName,setLastName] = useState('');

  const [darkMode,setDarkmode] = useState(false);

  const handlerDarkmode = () => setDarkmode(!darkMode);

  const [dado,setDado] = useState([]);

  const [getId,setGetId] = useState({});

  useEffect(()=>{
      axios.get("/api/get/")
      .then((res)=>{
      setDado(res.data);
      }).catch((err)=>{
      console.log(err)
      });
  },[]);
  
  
  let values = {
                darkMode,
                handlerDarkmode,
                firstName,
                setFirstName,
                lastName,
                setLastName,
                dado,
                getId,
                setGetId
            };

  return (
      <GlobalProvider.Provider value={values}>
          {children}
      </GlobalProvider.Provider>
  );

}

export {InfoContext,GlobalProvider}