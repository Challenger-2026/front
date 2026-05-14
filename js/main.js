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

// Adicione este bloco dentro do seu document.addEventListener("DOMContentLoaded", ...)

// 3. Funcionalidade de Accordion para o FAQ (Critério 9)
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const item = question.parentElement;
        
        // Fecha outros itens abertos (opcional - comportamento de sanfona)
        document.querySelectorAll(".faq-item").forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }
        });

        // Alterna o estado do item clicado
        item.classList.toggle("active");
    });
});

// Adicione este bloco ao seu js/main.js existente

const form = document.getElementById('form-contato');
const msgErro = document.getElementById('msg-erro');
const msgSucesso = document.getElementById('msg-sucesso');

if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Bloqueia o envio padrão para validação (Critério 9)

        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Esconde feedbacks anteriores
        msgErro.style.display = 'none';
        msgSucesso.style.display = 'none';

        // Validação de campos obrigatórios (Critério 9)
        if (!nome || !email || !mensagem) {
            msgErro.textContent = "Erro: Todos os campos são obrigatórios.";
            msgErro.style.display = 'block';
            return;
        }

        // Validação simples de formato de e-mail
        if (!email.includes('@') || !email.includes('.')) {
            msgErro.textContent = "Erro: Por favor, insira um e-mail válido.";
            msgErro.style.display = 'block';
            return;
        }

        // Feedback visual de sucesso e experiência do usuário (Critério 9)
        msgSucesso.style.display = 'block';
        form.reset(); // Limpa o formulário após o sucesso
        
        console.log("Formulário validado e enviado com sucesso!");
    });
}