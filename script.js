
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

// Store each video with its info
const videos = [
    {
        title: "Dreams",
        youtubeEmbed: "https://youtube.com/embed/S2uRbuOiAs4?si=P2uvZN0V7nlWZZ5R",
    },
    {
        title: "Right Time",
        youtubeEmbed: "https://youtube.com/embed/JQCNcYpbHl0?si=a6kQXAW8hxSbsBhi",
    },
    {
        title: "Over and Over",
        youtubeEmbed: "https://youtube.com/embed/c0wq2fk9j8Y?si=AVauXYE6sSP0L3xn",
    },
    {
        title: "Move Your Body",
        youtubeEmbed: "https://youtube.com/embed/ZHxou6Fxdqw?si=aGO9T-x6p1_u2Ff2",
    },
    {
        title: "Thoughtless Feeling",
        youtubeEmbed: "https://youtube.com/embed/tRIyhs0BEDw?si=n-gn-DBFcB8m16tU",
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
                <!--
                <div class="release-title">${release.title}</div>
                <div class="release-info">${release.info}</div>
                -->
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







// VIDEO



// Reference to carousel slide container
const videoContainer = document.getElementById("video-carousel-slide");

// 1. Dynamically create each video slide div with iframe
videoContainer.innerHTML = videos.map((video, i) => `
  <div class="video${i === 0 ? " active" : ""}">
    <iframe 
      src="${video.youtubeEmbed}" 
      frameborder="0" 
      allowfullscreen
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  </div>
`).join("");

// Get all video slides
const videoSlides = document.querySelectorAll(".video");
let currentVideo = 0;

// Show video by index with slide + fade effect
function showVideo(index) {
  videoSlides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
      slide.style.transform = "translateX(0)";
      slide.style.opacity = "1";
      slide.style.position = "relative";
      slide.style.zIndex = "1";
    } else if (i < index) {
      slide.classList.remove("active");
      slide.style.transform = "translateX(-100%)";
      slide.style.opacity = "0";
      slide.style.position = "absolute";
      slide.style.zIndex = "0";
    } else {
      slide.classList.remove("active");
      slide.style.transform = "translateX(100%)";
      slide.style.opacity = "0";
      slide.style.position = "absolute";
      slide.style.zIndex = "0";
    }
  });
}

// Button click events
document.querySelector(".video-arrow.left").addEventListener("click", () => {
  currentVideo = (currentVideo - 1 + videos.length) % videos.length;
  showVideo(currentVideo);
});

document.querySelector(".video-arrow.right").addEventListener("click", () => {
  currentVideo = (currentVideo + 1) % videos.length;
  showVideo(currentVideo);
});

// Show first video on load
showVideo(currentVideo);
/*

// Tracks index of which release is currently being shown
let currentVideo = 0;

// Reference to id of div in index.html where carousel should appear
const videoDisplay = document.getElementById("video-display");

// Function do display the video
function showVideo(index) {
    const video = videos[index];
    videoDisplay.innerHTML = `
    <iframe width="1244" height="700" 
    src="${video.youtubeEmbed}" frameborder="0" allowfullscreen></iframe>`;
}

// Event listeners for left and right arrows
document.querySelector(".video-arrow.left").addEventListener("click", () => {
    currentVideo = (currentVideo - 1 + videos.length) % videos.length;
    showVideo(currentVideo);
});

document.querySelector(".video-arrow.right").addEventListener("click", () => {
    currentVideo = (currentVideo + 1 ) % videos.length;
    showVideo(currentVideo);
});

// Show first release on load
showVideo(currentVideo);

*/