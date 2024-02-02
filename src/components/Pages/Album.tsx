import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getMusics from '../../services/musicsAPI';
import { AlbumType, SongType } from '../../types';
import MusicCard from '../Functions/MusicCard';

export default function Album() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [album, setAlbum] = useState<(AlbumType | null)>(null);
  const [songs, setSongs] = useState<SongType[]>([]);

  useEffect(() => {
    async function fetchMusics() {
      if (id) {
        setIsLoading(true);
        const data = await getMusics(id);
        const [fetchedAlbum, ...fetchedSongs] = data;
        setAlbum(fetchedAlbum);
        setSongs(fetchedSongs);
        setIsLoading(false);
      }
    }
    fetchMusics();
  }, [id]);

  return (
    <div>
      {isLoading ? 'Carregando...' : (
        <div>
          <h2 data-testid="artist-name">{album?.artistName}</h2>
          <h3 data-testid="album-name">{album?.collectionName}</h3>
          {songs.map((song) => (
            <MusicCard
              key={ song.trackId }
              trackName={ song.trackName }
              previewUrl={ song.previewUrl }
            />
          ))}
        </div>
      )}
    </div>
  );
}
