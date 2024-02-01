import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputLabel from '../Components/InputLabel';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import { AlbumType } from '../../types';

export default function Search() {
  const [formSearch, setFormSeach] = useState({
    search: '',
  });

  const [lastSearch, setLastSearch] = useState('');

  const [albums, setAlbums] = useState<AlbumType[]>([]);

  const handleChange = (event) => {
    setFormSeach({
      ...formSearch,
      [event.target.name]: event.target.value,
    });
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await searchAlbumsAPI(formSearch.search); setAlbums(response);
      setLastSearch(formSearch.search);
      setIsLoading(false);
      setFormSeach({ search: '' });
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={ handleSubmit }>
      <InputLabel
        data-testid="search-artist-input"
        name="search"
        placeholder="Digite a sua pesquisa?"
        value={ formSearch.search }
        onChange={ handleChange }
      />
      <button
        data-testid="search-artist-button"
        disabled={ formSearch.search.length < 2 }
      >
        Pesquisar
      </button>
      {isLoading && <p>Carregando...</p> }
      <p>
        Resultado de álbuns de:
        {lastSearch}
      </p>
      {albums.length > 0 ? (
        <ul>
          {albums.map((album) => (
            <li key={ album.collectionId }>
              <Link
                to={ `/album/${album.collectionId}` }
                data-testid={ `link-to-album-${album.collectionId} ` }
              >
                { album.collectionName }
              </Link>
            </li>
          ))}
        </ul>
      )
        : (
          <p>Nenhum álbum foi encontrado</p>
        )}
    </form>
  );
}
