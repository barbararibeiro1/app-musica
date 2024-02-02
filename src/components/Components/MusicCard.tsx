function MusicCard({ trackName, previewUrl }) {
  return (
    <div>
      <h3>{trackName}</h3>
      <audio data-testid="audio-component" controls>
        <track kind="captions" />
        <source src={ previewUrl } type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
}

export default MusicCard;
