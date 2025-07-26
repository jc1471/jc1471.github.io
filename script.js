
// Store each release with its info
const releases = [
    {
        title: "Endless Hours",
        info: "LP",
        year: "2025",
        cover: "./media/releases/endless-hours-cover_CONVERT.webp",
        spotifyEmbed: "https://open.spotify.com/embed/album/56zbigxmWg2J3zOOkREkas?utm_source=generator",
    },
    {
        title: "Dreams",
        info: "Single",
        year: "2025",
        cover: "./media/releases/dreams-cover_CONVERT.webp",
        spotifyEmbed:"https://open.spotify.com/embed/album/7rlsDpGwJhDq0Lw9TFa3pk?utm_source=generator&theme=0"
    },
        {
        title: "Right Time",
        info: "Single",
        year: "2024",
        cover: "./media/releases/right-time-cover_CONVERT.webp",
        spotifyEmbed:"https://open.spotify.com/embed/track/0Kbcx15PiEPNsNvzGoLFwA?utm_source=generator"
    },
        {
        title: "Over and Over",
        info: "Single",
        year: "2023",
        cover: "./media/releases/over-and-over-cover_CONVERT.webp",
        spotifyEmbed: "https://open.spotify.com/embed/album/0dteORZVjB4FcAqNqYRag8?utm_source=generator"
    },
        {
        title: "Move Your Body",
        info: "Single",
        year: "2023",
        cover: "./media/releases/move-your-body-cover_CONVERT.webp",
        spotifyEmbed: "https://open.spotify.com/embed/album/4smjhRlOoOuHEjawOHjmoo?utm_source=generator"
    },
        {
        title: "Thoughtless Feeling",
        info: "Single",
        year: "2023",
        cover: "./media/releases/thoughtless-feeling-cover_CONVERT.webp",
        spotifyEmbed: "https://open.spotify.com/embed/album/6OqwBX07u1gDecyoxkmL4Z?utm_source=generator&theme=0"
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
                <div class="all-releases" id="all-releases">All Releases</div>
                <iframe style="border-radius:10px" 
                src="${release.spotifyEmbed}"
                height="100%"
                width="100%"
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