// ===== Mostrar/ocultar senha =====
document.getElementById("toggle-senha").addEventListener("click", function() {
    const senhaInput = document.getElementById("senha");
    senhaInput.type = senhaInput.type === "password" ? "text" : "password";
});

// ===== Carregar dados salvos (usuário e senha) =====
window.addEventListener("load", function() {
    const usuarioSalvo = localStorage.getItem("usuario");
    const senhaSalva = localStorage.getItem("senha");

    if (usuarioSalvo && senhaSalva) {
        document.getElementById("usuario").value = usuarioSalvo;
        document.getElementById("senha").value = senhaSalva;
        document.getElementById("lembrar").checked = true;
    }
});

// ===== Login + Lembrar-me =====
document.getElementById("form-login").addEventListener("submit", function(e) {
    e.preventDefault(); // evita envio real do form

    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const lembrar = document.getElementById("lembrar").checked;

    // ===== Armazenamento dos dados =====
    if (lembrar) {
        localStorage.setItem("usuario", usuario);
        localStorage.setItem("senha", senha);
    } else {
        localStorage.removeItem("usuario");
        localStorage.removeItem("senha");
    }

    // ===== Validação de exemplo =====
    if (usuario === "admin" && senha === "1234") {
        window.location.href = "painel.html";
    } else {
        alert("Usuário ou senha inválidos!");
    }
});
