// scripts.js
document.addEventListener('DOMContentLoaded', () => {
  const sidePanel = document.getElementById('side-panel');
  const toggleButton = document.createElement('button');
  toggleButton.textContent = '☰';
  toggleButton.style.position = 'absolute';
  toggleButton.style.right = '10px';
  toggleButton.style.top = '10px';
  toggleButton.onclick = () => sidePanel.classList.toggle('collapsed');
  sidePanel.appendChild(toggleButton);
});
