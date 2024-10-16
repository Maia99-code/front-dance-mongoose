import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateAlbum = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState({ title: '', artist: '', releaseYear: '', genre: '' });
  const navigate = useNavigate();

  const fetchAlbum = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/albums/${id}`);
      setAlbum(response.data);
    } catch (error) {
      console.error('Error fetching album:', error);
    }
  };

  useEffect(() => {
    fetchAlbum();
  }, [id]);

  const handleChange = (e) => {
    setAlbum({ ...album, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/albums/${id}`, album);
      navigate('/');
    } catch (error) {
      console.error('Error updating album:', error);
    }
  };

  return (
    <div>
      <h1>Actualizar Álbum</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" value={album.title} onChange={handleChange} placeholder="Título" required />
        <input name="artist" value={album.artist} onChange={handleChange} placeholder="Artista" required />
        <input name="releaseYear" type="number" value={album.releaseYear} onChange={handleChange} placeholder="Año de lanzamiento" required />
        <input name="genre" value={album.genre} onChange={handleChange} placeholder="Género" required />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default UpdateAlbum;
