document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o container onde o footer será inserido
    const footerContainer = document.getElementById('footer-container');

    // Carrega o conteúdo do arquivo footer.html
    fetch('/src/views/footer.html')  // Caminho absoluto para a footer.html
        .then(response => response.text())
        .then(data => {
            // Insere o conteúdo do footer no elemento com id 'footer-container'
            footerContainer.innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));
});

