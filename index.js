
  const images = [
    "images/3.png",
    "images/4.png",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/9.jpg",
  ];

  let currentIndex = 0;
  const galleryImage = document.getElementById("galleryImage");

  document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImage.src = images[currentIndex];
  });

  document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    galleryImage.src = images[currentIndex];
  });

