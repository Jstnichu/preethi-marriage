document.addEventListener('DOMContentLoaded', () => {
  // Gallery population
  const imagePaths = [
    "../images/IMG_0366.jpg",
    "../images/lowlight.jpg",
    "../images/wedding.jpg",
    "../images/OMP10156.jpg",
    "../images/OMP10089.jpg",
    "../images/IMG_0360.jpg",

  ];
  const gallery = document.getElementById('galleryGrid');
  imagePaths.forEach((src, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `<img src="${src}" alt="Wedding Moment ${index + 1}">`;
    gallery.appendChild(item);
  });
  // Duplicate all gallery items once
  const items = Array.from(gallery.children);
  items.forEach(item => gallery.appendChild(item.cloneNode(true)));

  // Background image rotation
  const bgImages = [
    '../images/wedding.jpg',
    '../images/OMP10156.jpg',
    '../images/lowlight.jpg',
  ];
  let currentBg = 0;
  setInterval(() => {
    currentBg = (currentBg + 1) % bgImages.length;
    document.getElementById('invitation').style.backgroundImage = `url('${bgImages[currentBg]}')`;
  }, 3000);

  // Countdown timer
  const countDownDate = new Date("JUN 10, 2025 16:00:00").getTime();
  const countdownfunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
    if (distance < 0) {
      clearInterval(countdownfunction);
      document.getElementById("countdown").innerHTML = "The wedding has started!";
    }
  }, 1000);

  // Modal close handler
  window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
