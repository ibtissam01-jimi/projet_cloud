import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        margin: "20px",
        backgroundColor: "#f7f7f7",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    movieList: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "20px",
    },
    movieCard: {
        flex: "1 1 calc(25% - 20px)",
        maxWidth: "calc(25% - 20px)",
        marginBottom: "20px",
        boxSizing: "border-box",
    },
    fieldset: {
        border: "2px solid #4682B4",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#fff",
        height: "100%",
    },
    title: {
        color: "#333",
        fontSize: "24px",
        marginBottom: "15px",
        fontWeight: "600",
    },
    subtitle: {
        color: "#777",
        marginBottom: "15px",
    },
    button: {
        backgroundColor: "#4682B4",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        fontWeight: "500",
    },
    buttonHover: {
        backgroundColor: "#5A8FB9",
    },
    details: {
        color: "#555",
    },
    formContainer: {
        marginBottom: "30px",
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    formField: {
        marginBottom: "20px",
    },
    input: {
        width: "100%",
        padding: "12px",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        boxSizing: "border-box",
    },
    error: {
        color: "red",
        fontSize: "14px",
        marginTop: "5px",
    },
    pagination: {
        display: "flex",
        justifyContent: "center",
        marginTop: "30px",
    },
    pageButton: {
        margin: "0 10px",
        padding: "8px 15px",
        border: "1px solid #ccc",
        backgroundColor: "#fff",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
    },
    pageButtonActive: {
        fontWeight: "bold",
        backgroundColor: "#4682B4",
        color: "white",
    },
    formTitle: {
        color: "#333",
        fontSize: "26px",
        marginBottom: "15px",
    },
};

function MovieList({ movies, onToggleDetails, onToggleFavorite }) {
    return (
        <div style={styles.container}>
            <Header />
            <div style={styles.movieList}>
                {movies.map((movie, index) => (
                    <div key={index} style={styles.movieCard}>
                        <fieldset style={styles.fieldset}>
                            <h1 style={styles.title}>{movie.title}</h1>
                            <h4 style={styles.subtitle}>Année : {movie.releaseYear}</h4>
                            <p style={styles.subtitle}>La note : {movie.rating}</p>
                            <button
                                type="button"
                                onClick={() => onToggleDetails(index)}
                                style={styles.button}
                                onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                                onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                            >
                                {movie.showDetails ? "Hide Details" : "Show Details"}
                            </button><br></br>
                            <button
                                type="button"
                                onClick={() => onToggleFavorite(index)}
                                style={styles.button}
                                onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                                onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
                            >
                                {movie.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                            </button>
                            {movie.showDetails && (
                                <div>
                                    <h5 style={styles.details}>Genre: {movie.genre}</h5>
                                    <p style={styles.details}>Director: {movie.director}</p>
                                </div>
                            )}
                        </fieldset>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

function AddFilmForm({ addFilm }) {
    const [formData, setFormData] = useState({
        title: "",
        director: "",
        releaseYear: "",
        genre: "",
        rating: "",
    });

    const [errors, setErrors] = useState({
        title: "",
        director: "",
        releaseYear: "",
        genre: "",
        rating: "",
    });

    const genres = ["Crime", "Drama", "Action", "Comedy", "Fantasy", "Sci-Fi"];

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!formData.title) {
            formErrors.title = "Title is required!";
            isValid = false;
        }
        if (!formData.director) {
            formErrors.director = "Director is required!";
            isValid = false;
        }
        if (!formData.releaseYear || isNaN(formData.releaseYear)) {
            formErrors.releaseYear = "Release Year must be a valid number!";
            isValid = false;
        }
        if (!formData.genre) {
            formErrors.genre = "Genre is required!";
            isValid = false;
        }
        if (!formData.rating || isNaN(formData.rating) || formData.rating < 0 || formData.rating > 10) {
            formErrors.rating = "Rating must be a number between 0 and 10!";
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            addFilm(formData);
            setFormData({ title: "", director: "", releaseYear: "", genre: "", rating: "" });
            setErrors({});
        }
    };

    const handleReset = () => {
        setFormData({ title: "", director: "", releaseYear: "", genre: "", rating: "" });
        setErrors({});
    };

    return (
        <div style={styles.formContainer}>
            <h3 style={styles.formTitle}>Ajouter un film</h3>
            <form onSubmit={handleSubmit}>
                <div style={styles.formField}>
                    <label>Titre :</label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        style={styles.input}
                    />
                    {errors.title && <div style={styles.error}>{errors.title}</div>}
                </div>

                <div style={styles.formField}>
                    <label>Directeur :</label>
                    <input
                        type="text"
                        value={formData.director}
                        onChange={(e) => setFormData({ ...formData, director: e.target.value })}
                        style={styles.input}
                    />
                    {errors.director && <div style={styles.error}>{errors.director}</div>}
                </div>

                <div style={styles.formField}>
                    <label>Année de sortie :</label>
                    <input
                        type="number"
                        value={formData.releaseYear}
                        onChange={(e) => setFormData({ ...formData, releaseYear: e.target.value })}
                        style={styles.input}
                    />
                    {errors.releaseYear && <div style={styles.error}>{errors.releaseYear}</div>}
                </div>

                <div style={styles.formField}>
                    <label>Genre :</label>
                    <select
                        value={formData.genre}
                        onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                        style={styles.input}
                    >
                        <option value="">Select Genre</option>
                        {genres.map((genre, index) => (
                            <option key={index} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                    {errors.genre && <div style={styles.error}>{errors.genre}</div>}
                </div>

                <div style={styles.formField}>
                    <label>Note :</label>
                    <input
                        type="number"
                        value={formData.rating}
                        onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                        style={styles.input}
                    />
                    {errors.rating && <div style={styles.error}>{errors.rating}</div>}
                </div>

                <button type="submit" style={styles.button}>Ajouter le film</button>
                <button type="button" onClick={handleReset} style={styles.button}>Réinitialiser</button>
            </form>
        </div>
    );
}

function MovieDetails() {
    const initialMovies = [
        {
            title: "Inception",
            director: "Christopher Nolan",
            releaseYear: 2010,
            genre: "Science Fiction",
            rating: 8.8,
            showDetails: false,
            isFavorite: false,
        },
        {
            title: "The Godfather",
            director: "Francis Ford Coppola",
            releaseYear: 1972,
            genre: "Crime",
            rating: 9.2,
            showDetails: false,
            isFavorite: false,
        },
        {
            title: "The Dark Knight",
            director: "Christopher Nolan",
            releaseYear: 2008,
            genre: "Action",
            rating: 9.0,
            showDetails: false,
            isFavorite: false,
        },
        {
            title: "Pulp Fiction",
            director: "Quentin Tarantino",
            releaseYear: 1994,
            genre: "Crime",
            rating: 8.9,
            showDetails: false,
            isFavorite: false,
        },
        {
            title: "Schindler's List",
            director: "Steven Spielberg",
            releaseYear: 1993,
            genre: "Historical Drama",
            rating: 9.0,
            showDetails: false,
            isFavorite: false,
        },
        {
            title: "The Shawshank Redemption",
            director: "Frank Darabont",
            releaseYear: 1994,
            genre: "Drama",
            rating: 9.3,
            showDetails: false,
            isFavorite: false,
        },
        {
            title: "Forrest Gump",
            director: "Robert Zemeckis",
            releaseYear: 1994,
            genre: "Comedy-Drama",
            rating: 8.8,
            showDetails: false,
            isFavorite: false,
        },
        {
            title: "The Matrix",
            director: "Lana Wachowski, Lilly Wachowski",
            releaseYear: 1999,
            genre: "Science Fiction",
            rating: 8.7,
            showDetails: false,
            isFavorite: false,
        },
        {
            title: "Fight Club",
            director: "David Fincher",
            releaseYear: 1999,
            genre: "Drama",
            rating: 8.8,
            showDetails: false,
            isFavorite: false,
        },
        {
            title: "The Lord of the Rings: The Return of the King",
            director: "Peter Jackson",
            releaseYear: 2003,
            genre: "Fantasy",
            rating: 9.0,
            showDetails: false,
            isFavorite: false,
        },
    ];

    const [movies, setMovies] = useState(initialMovies);
    const [page, setPage] = useState(1);
    const moviesPerPage = 5;

    const addFilm = (newFilm) => {
        setMovies([...movies, { ...newFilm, showDetails: false, isFavorite: false }]);
    };

    const handleToggleDetails = (index) => {
        const updatedMovies = [...movies];
        updatedMovies[index].showDetails = !updatedMovies[index].showDetails;
        setMovies(updatedMovies);
    };

    const handleToggleFavorite = (index) => {
        const updatedMovies = [...movies];
        updatedMovies[index].isFavorite = !updatedMovies[index].isFavorite;
        setMovies(updatedMovies);
    };

    const totalPages = Math.ceil(movies.length / moviesPerPage);

    const paginatedMovies = movies.slice(
        (page - 1) * moviesPerPage,
        page * moviesPerPage
    );

    return (
        <div>
            <MovieList
                movies={paginatedMovies}
                onToggleDetails={handleToggleDetails}
                onToggleFavorite={handleToggleFavorite}
            />
            <div style={styles.pagination}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => setPage(index + 1)}
                        style={{
                            ...styles.pageButton,
                            ...(page === index + 1 ? styles.pageButtonActive : {}),
                        }}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <AddFilmForm addFilm={addFilm} />
        </div>
    );
}

export default MovieDetails;
