// Aguarda o carregamento completo do HTML antes de executar
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona o cabeçalho
    const header = document.querySelector(".cabecalho-principal");

    // Adiciona um evento de rolagem na janela
    window.addEventListener("scroll", () => {
        // Se a página for rolada mais de 50 pixels para baixo
        if (window.scrollY > 50) {
            // Escreva aqui a lógica se quiser alterar a cor do menu ao rolar
            header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
        } else {
            // Remove a sombra se voltar ao topo
            header.style.boxShadow = "none";
        }
    });

    console.log("Scripts do Lobo-guará Tech carregados com sucesso!");
});

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Interatividade do Cabeçalho (Já existia)
    const header = document.querySelector(".cabecalho-principal");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
        } else {
            header.style.boxShadow = "none";
        }
    });

    // 2. Validação de Formulário (Novo componente interativo exigido)
    const formContato = document.getElementById("form-contato");
    const msgErro = document.getElementById("mensagem-erro");
    const msgSucesso = document.getElementById("mensagem-sucesso");

    if (formContato) {
        formContato.addEventListener("submit", function(event) {
            event.preventDefault(); // Bloqueia o envio inválido inicial
            
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;

            // Limpa mensagens anteriores
            msgErro.style.display = "none";
            msgSucesso.style.display = "none";

            // Validação de campos obrigatórios
            if (nome.trim() === "" || email.trim() === "") {
                msgErro.textContent = "Por favor, preencha todos os campos obrigatórios.";
                msgErro.style.display = "block";
                return; // Para a execução se houver erro
            }

            if (!email.includes("@")) {
                msgErro.textContent = "Por favor, insira um e-mail válido.";
                msgErro.style.display = "block";
                return;
            }

            // Feedback visual de sucesso
            msgSucesso.style.display = "block";
            formContato.reset(); // Limpa o formulário
        });
    }
});