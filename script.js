
// Store each release with its info
const releases = [
    {
        title: "Endless Hours",
        info: "LP",
        year: "2025",
        cover: "./media/releases/endless-hours-cover.jpg",
        spotifyEmbed: "https://open.spotify.com/album/56zbigxmWg2J3zOOkREkas?si=sXbE7n_lQ_qW5hdIqUSh6Q",
    },
    {
        title: "Dreams",
        info: "Single",
        year: "2025",
        cover: "./media/releases/dreams-cover.jpg"
    },
        {
        title: "Right Time",
        info: "Single",
        year: "2024",
        cover: "./media/releases/right-time-cover.jpg"
    },
        {
        title: "Over and Over",
        info: "Single",
        year: "2023",
        cover: "./media/releases/over-and-over-cover.jpg"
    },
        {
        title: "Move Your Body",
        info: "Single",
        year: "2023",
        cover: "./media/releases/move-your-body-cover.jpg"
    },
        {
        title: "Thoughtless Feeling",
        info: "Single",
        year: "2023",
        cover: "./media/releases/thoughtless-feeling-cover.jpg"
    },
];

// Tracks index of which release is currently being shown
let current = 0;

// Reference to id of div in index.html where carousel should appear
const releaseDisplay = document.getElementById("release-display");

// Function do display the release
function showRelease(index) {
    const release = releases[index];
    releaseDisplay.innerHTML = `
        <div class="release-container">
            <div class="spotify-player">
                <div class="release-title">${release.title}</div>
                <div class="release-info">${release.info}</div>
                <iframe style="border-radius:12px" 
                src="${release.spotifyEmbed}" 
                width="100%" 
                height="100%" 
                frameborder="0" 
                allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy">
                </iframe> 
            </div>   
            <img src="${release.cover}" alt="${release.title}" />
        </div>
        `;
}

// Event listeners for left and right arrows
document.querySelector(".arrow.left").addEventListener("click", () => {
    current = (current - 1 + releases.length) % releases.length;
    showRelease(current);
});

document.querySelector(".arrow.right").addEventListener("click", () => {
    current = (current + 1 ) % releases.length;
    showRelease(current);
});

// Show first release on load
showRelease(current);