// ======== ELEMENTOS ========
const menu = document.getElementById('menu-div-id');
const toggleBtn = document.getElementById('btn-toggle-menu');
const botoes = document.querySelectorAll('.item-div-menu[data-section]');
const secoes = document.querySelectorAll('.sessao');
const btnLogout = document.getElementById('btn-logout');
const tituloPagina = document.getElementById('titulo-pagina'); // novo elemento para o título

// ======== TOGGLE MENU ========
toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('fechado');
});

// ======== TROCAR SEÇÕES ========
botoes.forEach(btn => {
    btn.addEventListener('click', () => {
        // remove classe ativa dos botões
        botoes.forEach(b => b.classList.remove('ativo'));
        btn.classList.add('ativo');

        // troca a seção exibida
        secoes.forEach(sec => sec.classList.remove('ativa'));
        const destino = btn.getAttribute('data-section');
        const secao = document.getElementById(destino);
        if (secao) secao.classList.add('ativa');

        // ======== ATUALIZA TÍTULO DA BARRA SUPERIOR ========
        const nomeSecao = btn.querySelector('.texto-menu').textContent;
        if (tituloPagina) {
            tituloPagina.textContent = nomeSecao;
        }
    });
});

// ======== LOGOUT ========
btnLogout.addEventListener('click', () => {
    if (confirm('Deseja realmente sair do sistema?')) {
        localStorage.removeItem('usuarioNome');
        window.location.href = 'index.html';
    }
});
