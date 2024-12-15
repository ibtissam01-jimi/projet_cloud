import React, { useState } from "react";

function MovieSearch() {
    const movies = [
        { title: "Inception", genre: "Science Fiction", releaseYear: 2010 },
        { title: "The Godfather", genre: "Crime", releaseYear: 1972 },
        { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
        { title: "Pulp Fiction", genre: "Crime", releaseYear: 1994 },
        { title: "Forrest Gump", genre: "Drama", releaseYear: 1994 }
    ];

    const [searchCategory, setSearchCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Filter movies based on the search query and category
    const filteredMovies = searchQuery
        ? movies.filter((movie) => {
              if (searchCategory === "Title") {
                  return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
              } else if (searchCategory === "Genre") {
                  return movie.genre.toLowerCase().includes(searchQuery.toLowerCase());
              } else {
                  return (
                      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      movie.releaseYear.toString().includes(searchQuery)
                  );
              }
          })
        : [];

    // Styling constants for a stunning design
    const styles = {
        container: {
            padding: "30px",
            fontFamily: "'Poppins', sans-serif",
            maxWidth: "700px",
            margin: "auto",
            backgroundColor: "#f9f9f9",
            borderRadius: "10px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
        },
        title: {
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "20px"
        },
        searchBar: {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px"
        },
        select: {
            padding: "10px 15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
            backgroundColor: "#fff",
            color: "#333",
            cursor: "pointer",
            flex: "1"
        },
        input: {
            padding: "10px 15px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
            flex: "2",
            backgroundColor: "#fff",
            color: "#333"
        },
        movieCard: {
            marginBottom: "15px",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            backgroundColor: "#ffffff",
            boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
        },
        movieCardHover: {
            transform: "scale(1.02)",
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)"
        },
        movieTitle: { margin: 0, fontSize: "18px", fontWeight: "bold", color: "#222" },
        movieDetails: { margin: "5px 0", fontSize: "14px", color: "#555" },
        noResults: { textAlign: "center", color: "#888", fontSize: "16px", marginTop: "20px" }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Movie Search</h1>
            <div style={styles.searchBar}>
                <select
                    style={styles.select}
                    value={searchCategory}
                    onChange={(e) => setSearchCategory(e.target.value)}
                >
                    <option value="All">All</option>
                    <option value="Title">Title</option>
                    <option value="Genre">Genre</option>
                </select>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={styles.input}
                />
            </div>
            <div>
                {
                    filteredMovies.map((movie, index) => (
                        <div
                            key={index}
                            style={{
                                ...styles.movieCard,
                                ":hover": styles.movieCardHover
                            }}
                        >
                            <h3 style={styles.movieTitle}>{movie.title}</h3>
                            <p style={styles.movieDetails}>
                                <strong>Genre:</strong> {movie.genre} | <strong>Year:</strong> {movie.releaseYear}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default MovieSearch;
