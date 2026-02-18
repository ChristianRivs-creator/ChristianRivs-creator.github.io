
  const images = [
    "images/3.jpeg",
    "images/4.jpeg",
    "images/5.jpeg",
    "images/6.jpeg",
    "images/7.jpeg",
    'images/2.jpeg',
    "images/8.jpeg",
    "images/9.jpeg",
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

