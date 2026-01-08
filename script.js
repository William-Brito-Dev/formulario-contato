const form = document.getElementById('meuForm');
const areaSucesso = document.getElementById('mensagemSucesso');
const btnEnviar = document.getElementById('btnEnviar');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    btnEnviar.innerText = "Enviando...";
    btnEnviar.disabled = true;

    setTimeout(() => {
        form.style.display = 'none';
        areaSucesso.style.display = 'block';
    }, 1200);
});