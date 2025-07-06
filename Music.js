export function Music() {
  const tracks = [
    { title: 'Perfect – Ed Sheeran', url: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g' },
    { title: 'Tum Hi Ho – Aashiqui 2', url: 'https://www.youtube.com/watch?v=Umqb9KENgmk' }
  ];
  return (
    <div className="card">
      <h2>🎵 Our Playlist</h2>
      <ul>
        {tracks.map((track, idx) => (
          <li key={idx}>
            <a href={track.url} target="_blank" rel="noopener noreferrer">{track.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
