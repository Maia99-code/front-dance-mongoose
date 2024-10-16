import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [albums, setAlbums] = useState([]);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get('http://localhost:3000/albums');
      setAlbums(response.data);
    } catch (error) {
      console.error('Error fetching albums:', error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <div>
      <h1>Álbumes</h1>
      <ul>
        {albums.map(album => (
          <li key={album._id}>
            {album.title} by {album.artist}
            <Link to={`/update/${album._id}`}> Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
