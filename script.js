const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

// Play when user clicks anywhere (due to autoplay restrictions)
window.addEventListener('click', () => {
  if (music.paused) {
    music.play().catch(err => {
      console.log("Autoplay blocked:", err);
    });
  }
});

// Mute/Unmute button
musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "🔊 Mute Music";
  } else {
    music.pause();
    musicBtn.textContent = "🔇 Unmute Music";
  }
});
// Set name to Pavan
document.getElementById("name").textContent = "Pavan 🎉";

// Music control - autoplay and mute/unmute functionality
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

// Play music when the user clicks anywhere (browsers block autoplay until user interacts)
window.addEventListener('click', () => {
  if (music.paused) {
    music.play().catch(err => {
      console.log("Autoplay blocked:", err);
    });
  }
});

// Mute/Unmute music button
musicBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "🔊 Mute Music";
  } else {
    music.pause();
    musicBtn.textContent = "🔇 Unmute Music";
  }
});

// Confetti generator
const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#1dd1a1', '#5f27cd'];
const confettiContainer = document.getElementById("confetti");

for (let i = 0; i < 100; i++) {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti-piece');
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.top = Math.random() * -100 + 'vh';
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  confetti.style.width = confetti.style.height = `${Math.random() * 8 + 4}px`;
  confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
  confettiContainer.appendChild(confetti);
}
