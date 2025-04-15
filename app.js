window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    const line = document.querySelector(".vertical-line");

    // This number should match or exceed your actual image height
    const maxHeight = 1800;

    // Prevent height from exceeding image size
    const newHeight = Math.min(scrollPercent * maxHeight, maxHeight);
    line.style.height = `${newHeight}px`;
  });


const explorBtn = document.querySelector(".services-btn")
const moreContainer = document.querySelector('.more-type')
explorBtn.addEventListener('click',()=>{
  moreContainer.classList.add("expand");

  moreContainer.classList.toggle('more-type')
  explorBtn.textContent = moreContainer.classList.contains('more-type') ? "Explore More" : "Explore Less"

})

const video = document.getElementById('video1');
  video.addEventListener('mouseenter', () => video.play());
  video.addEventListener('mouseleave', () => video.pause());

const video2 = document.getElementById('video2');
  video2.addEventListener('mouseenter', () => video2.play());
  video2.addEventListener('mouseleave', () => video2.pause());