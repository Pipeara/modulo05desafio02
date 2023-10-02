import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Context } from "../context/Context";

const Favorites = () => {
  const { photos } = useContext(Context);
  const fotosFavoritas = photos.filter((photo) => photo.liked);

  return (
    <div className="container">
      <h1 className="text-center my-4">Fotos favoritas</h1>
      {fotosFavoritas.length === 0 && (
        <div className="badge badge-info">No hay fotos favoritas seleccionadas</div>
      )}
      <div className="row">
        {fotosFavoritas.map((photo) => (
          <div key={photo.id} className="col-md-4 mb-4">
            <Card className="text-white foto">
              <Card.Img
                src={photo.src.tiny}
                alt={photo.alt}
                style={{ maxHeight: "200px" }}
              />
              <Card.Body>
                <p>{photo.alt}</p>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
