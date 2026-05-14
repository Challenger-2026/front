document.addEventListener("DOMContentLoaded", () => {
    
    const header = document.querySelector(".cabecalho-principal");


    window.addEventListener("scroll", () => {
        
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
        } else {
            header.style.boxShadow = "none";
        }
    });

    console.log("Scripts do Lobo-guará Tech carregados com sucesso!");
});

document.addEventListener("DOMContentLoaded", () => {
    
    const header = document.querySelector(".cabecalho-principal");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)";
        } else {
            header.style.boxShadow = "none";
        }
    });


// Funcionalidade do FAQ

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        const item = question.parentElement;
        
        document.querySelectorAll(".faq-item").forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }
        });

        item.classList.toggle("active");
    });
});

// formulário

const form = document.getElementById('form-contato');
const msgErro = document.getElementById('msg-erro');
const msgSucesso = document.getElementById('msg-sucesso');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            msgErro.style.display = 'none';
            msgSucesso.style.display = 'none';

            if (!nome && !email && !mensagem) {
                msgErro.textContent = "Erro: Por favor, preencha o formulário antes de enviar.";
                msgErro.style.display = 'block';
                return; // Interrompe o envio
            }

            if (!nome || !email || !mensagem) {
                msgErro.textContent = "Erro: Todos os campos são obrigatórios.";
                msgErro.style.display = 'block';
                return;
            }

            if (!email.includes('@') || !email.includes('.')) {
                msgErro.textContent = "Erro: Por favor, insira um e-mail válido.";
                msgErro.style.display = 'block';
                return;
            }

            msgSucesso.style.display = 'block';
            

            form.reset();
            console.log("Formulário validado e enviado com sucesso!");
        });
    }
});