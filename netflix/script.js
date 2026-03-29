// Script para alternar entre dark e light mode e gerenciar perfis

// Seleciona o botão de toggle (a ser adicionado no HTML)
const themeToggle = document.getElementById('theme-toggle');

// Verifica se há preferência salva no localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.add(savedTheme);
    // Atualiza o texto do botão se necessário
    updateToggleButton(savedTheme);
}

// Função para alternar o tema
function toggleTheme() {
    const currentTheme = document.body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
    const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';

    // Remove o tema atual e adiciona o novo
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);

    // Salva no localStorage
    localStorage.setItem('theme', newTheme);

    // Atualiza o botão
    updateToggleButton(newTheme);
}

// Função para atualizar o texto do botão
function updateToggleButton(theme) {
    if (themeToggle) {
        themeToggle.textContent = theme === 'light-mode' ? '🌙' : '☀️';
    }
}

// Adiciona evento de clique ao botão
if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
    // Inicializa o texto do botão
    updateToggleButton(document.body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode');
}

// Gerenciamento de perfis
const profileLinks = document.querySelectorAll('.profile');

// Adiciona evento de clique aos perfis
profileLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Obtém o nome e a imagem do perfil clicado
        const name = this.querySelector('figcaption').textContent;
        const image = this.querySelector('img').src;

        // Armazena no localStorage
        const activeProfile = {
            name: name,
            image: image
        };
        localStorage.setItem('activeProfile', JSON.stringify(activeProfile));
    });
});