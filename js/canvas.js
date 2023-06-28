const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const largBtn = 200;
const altBtn = 50;
const textoBtn = 'Login';

context.fillStyle = "#fff";
context.fillRect(0,0, largBtn, altBtn);

context.fillStyle = '#000';
context.font = '20px Arial';
context.textAlign = 'center';
context.textBaseLine = 'middle';

const textX = largBtn / 2;
const textY = altBtn / 2;
context.fillText(textoBtn, textX, textY);

canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
  
    if (mouseX >= 0 && mouseX <= largBtn && mouseY >= 0 && mouseY <= altBtn) {
      // O botão foi clicado, vá para a home
      window.open("../index.html")
    }
  });