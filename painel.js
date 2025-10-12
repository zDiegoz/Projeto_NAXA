// Mostrar/ocultar senha
function mostrarSenha() {
    const campoSenha = document.getElementById("senha");
    if (campoSenha.type === "password") {
        campoSenha.type = "text";
    } else {
        campoSenha.type = "password";
    }
}

// Toggle do menu
let botaoToggleMenu = document.getElementById('toggle-menu');
let botaoAparecerMenu = document.getElementById('button-aparecer-menu');
let menu = document.getElementById('menu-div-id');
menu.style.display = 'grid';

botaoAparecerMenu.addEventListener('click', function() {
    if (menu.style.display === 'none') {
        menu.style.display = 'grid';
        botaoAparecerMenu.style.display = 'none';
        botaoToggleMenu.style.display = 'grid';
    }
});

botaoToggleMenu.addEventListener('click', function() {
    if (menu.style.display === 'grid') {
        menu.style.display = 'none';
        botaoAparecerMenu.style.display = 'flex';
        botaoToggleMenu.style.display = 'none';
    }
});

// Botão de logout (agora dentro do menu)
let btnLogout = document.getElementById("btn-logout");
if (btnLogout) {
    btnLogout.addEventListener("click", function() {
        window.location.href = "login.html"; // redireciona para a página de login
    });
}
// Botão de logout
document.getElementById("btn-logout").addEventListener("click", function() {
    window.location.href = "login.html";
});
