const videoShowcase = document.querySelector(".video-showcase");

if (videoShowcase) {
  const videos = Array.from(videoShowcase.querySelectorAll(".video-template"));
  const previousButton = videoShowcase.querySelector(".video-arrow--prev");
  const nextButton = videoShowcase.querySelector(".video-arrow--next");
  let activeVideo = 0;

  const stopVideo = (video) => {
    const iframe = video.querySelector("iframe");

    video.classList.remove("is-playing");

    if (iframe) {
      iframe.removeAttribute("src");
    }
  };

  const playVideo = (video) => {
    const iframe = video.querySelector("iframe");
    const videoUrl = iframe?.dataset.src;

    if (iframe && videoUrl) {
      iframe.src = `${videoUrl}&autoplay=1`;
      video.classList.add("is-playing");
    }
  };

  const showVideo = (nextVideo) => {
    stopVideo(videos[activeVideo]);
    videos[activeVideo].classList.remove("is-active");

    activeVideo = (nextVideo + videos.length) % videos.length;
    videos[activeVideo].classList.add("is-active");
  };

  if (videos.length > 0 && previousButton && nextButton) {
    videos.forEach((video) => {
      const cover = video.querySelector(".video-cover");

      if (cover) {
        cover.addEventListener("click", () => {
          playVideo(video);
        });
      }
    });

    previousButton.addEventListener("click", () => {
      showVideo(activeVideo - 1);
    });

    nextButton.addEventListener("click", () => {
      showVideo(activeVideo + 1);
    });
  }
}
