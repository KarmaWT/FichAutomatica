document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o container onde a navbar será inserida
    const navbarContainer = document.getElementById('navbar-container');

    // Carrega o conteúdo do arquivo navbar.html
    fetch('/src/views/navbar.html')  // Caminho absoluto para a navbar.html
        .then(response => response.text())
        .then(data => {
            // Insere o conteúdo da navbar no elemento com id 'navbar-container'
            navbarContainer.innerHTML = data;

            // Lógica para exibir a imagem selecionada ou mostrar o texto padrão
            const inputFoto = document.getElementById('inputGroupFoto');
            const previewContainer = document.getElementById('previewContainer');
            const previewImage = document.getElementById('previewImage');
            const noImageText = document.getElementById('noImageText');

            // Lógica para exibir a imagem selecionada ou mostrar o texto padrão
            if (inputFoto) {
                inputFoto.addEventListener('change', function (event) {
                    const file = event.target.files[0];

                    if (file) {
                        const reader = new FileReader();
                        reader.onload = function (e) {
                            // Exibe a imagem e esconde o texto
                            previewImage.style.display = 'block';
                            previewImage.src = e.target.result;
                            noImageText.style.display = 'none';
                        };
                        reader.readAsDataURL(file);
                    } else {
                        // Se não houver imagem, mostra o texto
                        previewImage.style.display = 'none';
                        noImageText.style.display = 'block';
                    }
                });
            }
        })
        .catch(error => console.error('Erro ao carregar a navbar:', error));
});
