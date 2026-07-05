const videoShowcase = document.querySelector(".video-showcase");

if (videoShowcase) {
  const videos = Array.from(videoShowcase.querySelectorAll(".video-template"));
  const previousButton = videoShowcase.querySelector(".video-arrow--prev");
  const nextButton = videoShowcase.querySelector(".video-arrow--next");
  let activeVideo = 0;

  const createPoster = (video) => {
    const videoId = video.dataset.videoId;
    const videoTitle = video.dataset.videoTitle;
    const videoChannel = video.dataset.videoChannel;

    video.innerHTML = `
      <button class="video-poster" type="button" aria-label="Play ${videoTitle}">
        <img
          src="https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg"
          alt="${videoTitle}"
          loading="lazy"
          onerror="this.onerror=null; this.src='https://i.ytimg.com/vi/${videoId}/hq720.jpg';">
        <span class="video-poster__shade"></span>
        <span class="video-poster__meta">
          <strong>${videoTitle}</strong>
          <small>${videoChannel}</small>
        </span>
        <span class="video-poster__play" aria-hidden="true"></span>
      </button>
    `;

    video.querySelector(".video-poster").addEventListener("click", () => {
      video.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
          title="${videoTitle}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      `;
    });
  };

  videos.forEach(createPoster);

  const showVideo = (nextVideo) => {
    createPoster(videos[activeVideo]);

    videos[activeVideo].classList.remove("is-active");
    activeVideo = (nextVideo + videos.length) % videos.length;
    videos[activeVideo].classList.add("is-active");
  };

  if (videos.length > 0 && previousButton && nextButton) {
    previousButton.addEventListener("click", () => {
      showVideo(activeVideo - 1);
    });

    nextButton.addEventListener("click", () => {
      showVideo(activeVideo + 1);
    });
  }
}
