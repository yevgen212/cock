
const crazyButton = document.getElementById('crazyButton');
crazyButton.addEventListener('click', () => {
  alert('іді ка ти нахуй');
  document.body.style.background = getRandomColor();
});


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const projects = document.querySelectorAll('.project');
projects.forEach((project, index) => {
  project.addEventListener('click', () => {
    alert(`Ти вибрав Real BIG Cock ${index + 1}. Заєбісь?`);
  });
});
