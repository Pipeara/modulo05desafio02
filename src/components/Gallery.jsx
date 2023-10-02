import { useContext } from 'react';
import { Context } from '../context/Context';
import Card from 'react-bootstrap/Card';
import IconHeart from '../components/IconHeart';

const Gallery = () => {
  // Obtener el estado de las fotos y la función para actualizarlas desde el contexto
  const { photos, setPhotos } = useContext(Context);

  // Función para alternar el estado "liked" de una foto cuando se hace clic en ella
  const toggleLike = (id) => {
    // Mapear las fotos y cambiar el estado "liked" de la foto con el ID correspondiente
    const updatedPhotos = photos.map((photo) =>
      photo.id === id ? { ...photo, liked: !photo.liked } : photo
    );
    // Actualizar el estado de las fotos con las fotos actualizadas
    setPhotos(updatedPhotos);
  };

  // Función para renderizar las fotos y sus estados "liked"
  const renderPhotos = () => {
    return photos.map((photo) => (
      <Card key={photo.id} className='text-white' onClick={() => toggleLike(photo.id)}>
        <Card.Img src={photo.src.tiny} alt={photo.alt} />
        <Card.ImgOverlay>
          <Card.Title className='text-end'>
            <IconHeart filled={photo.liked} /> {/* Icono del corazón lleno o vacío según el estado "liked" */}
          </Card.Title>
        </Card.ImgOverlay>
      </Card>
    ));
  };

  return <div className="gallery grid-columns-5 p-3">{renderPhotos()}</div>;
};

export default Gallery;
