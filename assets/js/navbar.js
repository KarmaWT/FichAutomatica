document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o container onde a navbar será inserida
    const navbarContainer = document.getElementById('navbar-container');
    
    // Carrega o conteúdo do arquivo navbar.html
    fetch('/src/views/navbar.html')  // Caminho absoluto para a navbar.html
        .then(response => response.text())
        .then(data => {
            // Insere o conteúdo da navbar no elemento com id 'navbar-container'
            navbarContainer.innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a navbar:', error));
});
