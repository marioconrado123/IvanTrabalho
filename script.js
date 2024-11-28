document.addEventListener('DOMContentLoaded', () => {
    // Função de validação do formulário
    function validarFormulario(event) {
      event.preventDefault();
      let valido = true;
  
      const nome = document.getElementById('nome');
      const email = document.getElementById('email');
      const mensagem = document.getElementById('mensagem');
  
      document.querySelectorAll('.erro').forEach(erro => (erro.textContent = ''));
  
      if (!nome.value.trim()) {
        document.getElementById('erro-nome').textContent = 'Por favor, insira seu nome';
        valido = false;
      }
  
      if (!email.value.trim()) {
        document.getElementById('erro-email').textContent = 'Por favor, insira seu e-mail';
        valido = false;
      } else if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        document.getElementById('erro-email').textContent = 'Por favor, insira um e-mail válido';
        valido = false;
      }
  
      if (!mensagem.value.trim()) {
        document.getElementById('erro-mensagem').textContent = 'Por favor, insira sua mensagem';
        valido = false;
      }
  
      if (valido) {
        alert('Mensagem enviada com sucesso!');
        event.target.reset();
      }
  
      return valido;
    }
  
    // Modal para imagens da galeria
    const modal = document.getElementById('modal-imagem');
    const imagemModal = document.getElementById('imagem-modal');
    const fecharModal = document.querySelector('.fechar-modal');
  
    document.querySelectorAll('.item-galeria').forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
          modal.style.display = 'block';
          imagemModal.src = img.src;
        }
      });
    });
  
    fecharModal.onclick = () => (modal.style.display = 'none');
    window.onclick = event => {
      if (event.target === modal) modal.style.display = 'none';
    };
  
    // Navegação suave
    document.querySelectorAll('nav a').forEach(ancora => {
      ancora.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(ancora.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  });
  