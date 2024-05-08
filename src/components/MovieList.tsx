import moviesData from "../moviesData.json";

export default function MovieList() {
  const moviesDetails = moviesData.map((movie, index) => (
    <ul key={index} className="list-group">
      <li className="list-group-item">
        <h2>{movie.Title}</h2>
        <p>Director: {movie.Director}</p>
        <p>Genre: {movie.Genre}</p>
        <p>Year: {movie.Year}</p>
        <img
          className="img-fluid border"
          style={{ maxHeight: 150 }}
          src={movie.Images[0]}
          alt={movie.Title}
        />
        <div className="mt-3">
          <h4>More Posters</h4>
          {movie.Images &&
            movie.Images.slice(1).map(
              (
                image,
                imageIndex //no first image as already rendered above
              ) => (
                <img
                  key={imageIndex}
                  className="img-fluid border"
                  style={{ maxHeight: 150 }}
                  src={image}
                  alt={movie.Title}
                />
              )
            )}
        </div>
      </li>
    </ul>
  ));

  return (
    <>
      <div className="col">{moviesDetails}</div>
    </>
  );
}
