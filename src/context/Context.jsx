import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const Context = createContext({});

const Provider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Realizar la solicitud Axios para cargar los datos
    axios.get('/src/photos.json') 
      .then((response) => {
        // Una vez que se carguen los datos, establecerlos en el estado
        setPhotos(response.data.photos);
      })
      .catch((error) => {
        console.error('Error al cargar los datos:', error);
      });
  }, []); // El segundo argumento [] asegura que esta solicitud se realice solo una vez al cargar el componente

  return (
    <Context.Provider value={{ photos, setPhotos }}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
