const videoShowcase = document.querySelector(".video-showcase");

if (videoShowcase) {
  const videos = videoShowcase.querySelectorAll(".video-template");
  const previousButton = videoShowcase.querySelector(".video-arrow--prev");
  const nextButton = videoShowcase.querySelector(".video-arrow--next");
  let activeVideo = 0;

  const showVideo = (nextVideo) => {
    const currentVideo = videos[activeVideo];
    const currentIframe = currentVideo.querySelector("iframe");

    videos[activeVideo].classList.remove("is-active");
    activeVideo = (nextVideo + videos.length) % videos.length;
    videos[activeVideo].classList.add("is-active");

    if (currentIframe) {
      currentIframe.src = currentIframe.src;
    }
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
