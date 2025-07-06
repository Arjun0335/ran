export function Gallery() {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ];
  return (
    <div className="card">
      <h2>📸 Our Memories</h2>
      <div className="gallery">
        {images.map((img, idx) => (
          <img key={idx} src={img} alt={`Memory ${idx + 1}`} />
        ))}
      </div>
    </div>
  );
}
