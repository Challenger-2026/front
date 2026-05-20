// Fazer uma sombra quando desde a página

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

const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const mensagem = document.querySelector('#mensagem')

document.querySelector('form').addEventListener('submit', (e) =>{
    if(nome.value == "" || email.value == "" || mensagem.value == "")
        e.preventDefault();
})

document.querySelectorAll('span').forEach(e => e.style.color = 'red')

nome.addEventListener('blur', () => {
    if(nome.value == ""){
        document.querySelector('#span1').innerHTML = 'O nome é obrigatório!'
    }else{
        document.querySelector('#span1').innerHTML = ''
    }
})

email.addEventListener('blur', () => {
    if(email.value == ""){
        document.querySelector('#span2').innerHTML = 'O e-mail é obrigatório!'
    }else{
        document.querySelector('#span2').innerHTML = ''
    }
})

mensagem.addEventListener('blur', () => {
    if(mensagem.value == ""){
        document.querySelector('#span3').innerHTML = 'A mensagem é obrigatório!'
    }else{
        document.querySelector('#span3').innerHTML = ''
    }
})

// corrigir a parte de ajeitar a mensagem e verificando todas para tirar a mensagem

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
                return;
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
    };