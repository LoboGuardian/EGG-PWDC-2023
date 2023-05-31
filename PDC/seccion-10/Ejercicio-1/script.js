  const images = [
    "images/image.webp",
    "images/image.webp",
    "images/image.webp",
    "images/image.webp",
  ];
    
  let currentImageIndex = 0;
  
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  const galleryContainer = document.querySelector('.gallery-container');
  const toggleButton = document.querySelector('.toggle-button');
  const galleryContainerBottom = document.querySelector('.gallery-container-bottom');

  prevButton.addEventListener('click', showPrevImage);
  nextButton.addEventListener('click', showNextImage);
  toggleButton.addEventListener('click', toggleView);
  
  function showPrevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    const img = document.querySelector('.img');
    img.src = images[currentImageIndex];
  }
  
  function showNextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    const img = document.querySelector('.img');
    img.src = images[currentImageIndex];
  }
  
  function toggleView() {
    galleryContainer.classList.toggle('gallery-container-visible');
    galleryContainerBottom.classList.toggle('hidden');
  }

//   function toggleView() {
//     if (galleryContainer.style.display === 'none') {
//       galleryContainer.style.display = 'flex';
//       imageSlider.style.display = 'none';
//       toggleButton.textContent = 'Ver vistade slider de imágenes';
//     } else {
//       galleryContainer.style.display = 'none';
//       imageSlider.style.display = 'flex';
//       toggleButton.textContent = 'Ver vista de galería de imágenes';
//     }
//   }