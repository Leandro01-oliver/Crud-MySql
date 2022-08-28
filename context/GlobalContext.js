import {createContext,useEffect,useState} from "react";
import { handlerGetData } from "../utils/getData";

const GlobalProvider = createContext({});

const InfoContext = ({children}) => {

  const [firstName,setFirstName] = useState('');

  const [lastName,setLastName] = useState('');

  const [darkMode,setDarkmode] = useState(false);

  const handlerDarkmode = () => setDarkmode(!darkMode);

  const [getId,setGetId] = useState({});

  const [search,setSearch] = useState("");

  const [dado,setDado] = useState([]);

  const [dadoFilter,setDadoFilter] = useState([]);
  
  const [img,setImg] = useState({});

  useEffect(()=>{
    handlerGetData(setDado);
  },[]);
  
  
  let values = {
                setDadoFilter,
                setSearch,
                search,
                darkMode,
                handlerDarkmode,
                firstName,
                setFirstName,
                lastName,
                setLastName,
                dado,
                dadoFilter,
                getId,
                setGetId,
                setImg,
                img
            };

  return (
      <GlobalProvider.Provider value={values}>
          {children}
      </GlobalProvider.Provider>
  );

}

export {InfoContext,GlobalProvider}