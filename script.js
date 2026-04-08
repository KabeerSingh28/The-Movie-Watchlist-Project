const results = document.getElementById("results");
const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");
const sortSelect = document.getElementById("sortSelect");
const themeToggle = document.getElementById("themeToggle");

let allMovies = [];

async function fetchMovies() {
    try {
        let movies = [];
        const searchTerms = ['marvel', 'batman', 'star wars', 'matrix'];

        for (const term of searchTerms) {
            const response = await fetch(
                `https://www.omdbapi.com/?s=${term}&page=1&apikey=fecba01c`
            );
            const data = await response.json();
            if (data.Response === "True") {
                movies = movies.concat(data.Search || []);
            }
        }

        const uniqueMovies = [];
        const map = new Map();
        for (const item of movies) {
            if (!map.has(item.imdbID)) {
                map.set(item.imdbID, true);
                uniqueMovies.push(item);
            }
        }

        allMovies = uniqueMovies;
        renderMovies();
    } catch (error) {
        results.innerHTML = "<p>Error loading movies</p>";
    }
}

function renderMovies() {
    const searchTerm = searchInput.value.toLowerCase();
    let filteredMovies = allMovies.filter(movie =>
        movie.Title.toLowerCase().includes(searchTerm)
    );

    const filterType = typeFilter.value;
    if (filterType !== "all") {
        filteredMovies = filteredMovies.filter(movie => movie.Type === filterType);
    }

    const sortType = sortSelect.value;
    if (sortType === "yearAsc") {
        filteredMovies.sort((a, b) => parseInt(a.Year.substring(0, 4)) - parseInt(b.Year.substring(0, 4)));
    } else if (sortType === "yearDesc") {
        filteredMovies.sort((a, b) => parseInt(b.Year.substring(0, 4)) - parseInt(a.Year.substring(0, 4)));
    } else if (sortType === "titleAsc") {
        filteredMovies.sort((a, b) => a.Title.localeCompare(b.Title));
    } else if (sortType === "titleDesc") {
        filteredMovies.sort((a, b) => b.Title.localeCompare(a.Title));
    }

    if (filteredMovies.length > 0) {
        results.innerHTML = filteredMovies.map(movie => `
            <div class="movie-card">
                <img src="${movie.Poster !== "N/A" ? movie.Poster : ""}" alt="${movie.Title}">
                <h3>${movie.Title}</h3>
                <p>${movie.Year} - ${movie.Type.charAt(0).toUpperCase() + movie.Type.slice(1)}</p>
            </div>
        `).join("");
    } else {
        results.innerHTML = "<p>No movies found matching your criteria</p>";
    }
}

searchInput.addEventListener("input", renderMovies);
typeFilter.addEventListener("change", renderMovies);
sortSelect.addEventListener("change", renderMovies);

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌙 Dark Mode";
    } else {
        themeToggle.textContent = "☀️ Light Mode";
    }
});

fetchMovies();