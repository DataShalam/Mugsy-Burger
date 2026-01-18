async function loadBurgerSlides(count = 10) {
  const container = document.querySelector(
    ".section--burger--carousel__container",
  );

  container.innerHTML = "";

  try {
    const requests = Array.from({ length: count }, () =>
      fetch("https://foodish-api.com/api/images/burger").then((res) =>
        res.json(),
      ),
    );

    const results = await Promise.all(requests);

    results.forEach(({ image }) => {
      const slide = document.createElement("li");
      slide.className = "splide__slide section--burger--carousel__item";

      const imageDiv = document.createElement("div");
      imageDiv.className = "section--burger--carousel__image";
      imageDiv.style.backgroundImage = `url(${image})`;

      slide.appendChild(imageDiv);
      container.appendChild(slide);
    });

    new Splide("#burger-carousel", {
      type: "loop",
      perPage: 4,
      gap: "1.5rem",
      autoplay: true,
      pauseOnHover: true,
      arrows: true,
      pagination: true,
      breakpoints: {
        1024: { perPage: 2 },
        768: { perPage: 1 },
      },
    }).mount();
  } catch (error) {
    console.error("Failed to load burgers:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadBurgerSlides(20);
});
