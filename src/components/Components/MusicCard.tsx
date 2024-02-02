function MusicCard({ trackName, previewUrl }) {
  return (
    <div>
      <h3>{trackName}</h3>
      <audio controls>
        <source src={previewUrl} type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </div>
  );
}

export default MusicCard;