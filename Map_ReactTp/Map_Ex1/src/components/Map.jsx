import React from "react";

function MapFun() {
    const Livres = [
        { title: "1984", author: "George Orwell", publicationYear: 1949, genre: "Dystopian", rating: 4.8 },
        { title: "To Kill a Mockingbird", author: "Harper Lee", publicationYear: 1960, genre: "Classic", rating: 4.9 },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", publicationYear: 1925, genre: "Classic", rating: 4.4 },
        { title: "Pride and Prejudice", author: "Jane Austen", publicationYear: 1813, genre: "Romance", rating: 4.7 },
        { title: "Moby-Dick", author: "Herman Melville", publicationYear: 1851, genre: "Adventure", rating: 4.1 },
        { title: "War and Peace", author: "Leo Tolstoy", publicationYear: 1869, genre: "Historical Fiction", rating: 4.5 },
        { title: "The Alchemist", author: "Paulo Coelho", publicationYear: 1988, genre: "Philosophical Fiction", rating: 4.7 },
    ];

    const styles = {
        container: {
            fontFamily: "Roboto, sans-serif",
            margin: "20px auto",
            maxWidth: "800px",
            color: "#555",
        },
        title: {
            color: "#34495e",
            fontSize: "26px",
            marginBottom: "15px",
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "capitalize",
        },
        list: {
            listStyle: "none",
            padding: "0",
            marginBottom: "20px",
        },
        listItem: {
            padding: "12px 20px",
            margin: "8px 0",
            backgroundColor: "#f9fbfc",
            borderRadius: "8px",
            fontSize: "18px",
            border: "1px solid #dfe4ea",
            transition: "all 0.3s ease",
            cursor: "pointer",
        },
        listItemHover: {
            backgroundColor: "#dceefb",
            transform: "scale(1.02)",
        },
        table: {
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        },
        th: {
            backgroundColor: "#1e3799",
            color: "#fff",
            padding: "12px 15px",
            textAlign: "left",
            fontSize: "16px",
            fontWeight: "600",
        },
        td: {
            padding: "12px 15px",
            borderBottom: "1px solid #f1f1f1",
            fontSize: "16px",
        },
        evenRow: {
            backgroundColor: "#f8f9fa",
        },
        oddRow: {
            backgroundColor: "#ffffff",
        },
        tableRowHover: {
            backgroundColor: "#eaf3f7",
        },
    };
    
    

    return (
        <div style={styles.container}>
            <h3 style={styles.title}>Affichage simple</h3>
            <ul style={styles.list}>
                {Livres.map((livre, index) => (
                    <li
                        key={index}
                        style={styles.listItem}
                        onMouseOver={(e) => (e.target.style.backgroundColor = styles.listItemHover.backgroundColor)}
                        onMouseOut={(e) => (e.target.style.backgroundColor = styles.listItem.backgroundColor)}
                    >
                        {livre.title} ({livre.author} - {livre.publicationYear})
                    </li>
                ))}
            </ul>

            <h3 style={styles.title}>Affichage sous forme de tableau</h3>
            <table style={styles.table}>
                <thead>
                    <tr>
                        <th style={styles.th}>Titre</th>
                        <th style={styles.th}>Auteur</th>
                        <th style={styles.th}>Année de publication</th>
                        <th style={styles.th}>Genre</th>
                        <th style={styles.th}>Note</th>
                    </tr>
                </thead>
                <tbody>
                    {Livres.map((livre, index) => (
                        <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                            <td style={styles.td}>{livre.title}</td>
                            <td style={styles.td}>{livre.author}</td>
                            <td style={styles.td}>{livre.publicationYear}</td>
                            <td style={styles.td}>{livre.genre}</td>
                            <td style={styles.td}>{livre.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MapFun;
