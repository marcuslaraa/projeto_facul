const formulario = document.getElementById("form");
const card = document.getElementById("card");
console.log(formulario)


formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const file = formulario.imagem.files[0];
    const reader = new FileReader();
  
    reader.onload = function(e) {
    const imgSrc = e.target.result;
    
    card.innerHTML = `<div class="container__card__pet">
    <img
      class="card__foto"
      src="${imgSrc}"
      alt="Cachorro preto e branco"
    />
    <div class="card__nome__status">
      <h2 class="card__nome">${formulario.nome.value}</h2>
      <p class="card__status">Perdido</p>
    </div>
    <p class="card__endereco">${formulario.local.value}</p>
    <p class="card__descricao">
      ${formulario.notas.value}
    </p>
    <p class="card__report">Reportado há menos de 1 min</p>
    <p class="info">
      <a class="card__info" href="#">Mais informações</a>
    </p>
    </div>`;}

    reader.readAsDataURL(file);
})

   
