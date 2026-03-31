
const results = document.getElementById("results");

async function fetchMovies() {
    try {
        let movies = [];

        for (let page = 1; page <= 2; page++) {
            const response = await fetch(
                `https://www.omdbapi.com/?s=batman&page=${page}&apikey=fecba01c`
            );
            const data = await response.json();
            if (data.Response === "True") {
                movies = movies.concat(data.Search || []);
            }
        }
        if (movies.length > 0) {
            results.innerHTML = movies.map(movie => `
                <div class="movie-card">
                    <img src="${movie.Poster !== "N/A" ? movie.Poster : ""}">
                    <h3>${movie.Title}</h3>
                    <p>${movie.Year}</p>
                </div>
            `).join("");
        } else {
            results.innerHTML = "<p>No movies found</p>";
        }
    } catch (error) {
        results.innerHTML = "<p>Error loading movies</p>";
    }
}
fetchMovies();