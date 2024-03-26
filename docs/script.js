let timerId = 0;

const setupCarousel = () => {
  let carouselIndex = 0;

  const carouselCount = document.getElementsByClassName("carousel-item").length;
  const carouselContainer =
    document.getElementsByClassName("carousel-container")[0];
  const indicators = document.getElementsByClassName("indicator-item");

  timerId = setInterval(() => {
    const carouselItemWidth =
      document.getElementsByClassName("carousel-item")[0].clientWidth;

    //set indicator
    console.log(indicators[carouselIndex].classList.remove("active"));
    carouselIndex = (carouselIndex + 1) % carouselCount;
    console.log(indicators[carouselIndex].classList.add("active"));

    carouselContainer.style.left = `-${carouselIndex * carouselItemWidth}px`;
  }, 2000);
};

window.addEventListener("load", () => {
  setupCarousel();
});

window.addEventListener("unload", () => {
  clearInterval(timerId);
});
