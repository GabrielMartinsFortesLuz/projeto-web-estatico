document.getElementById('mapImageInput').addEventListener('change', function(event) {
    const input = event.target;
    const imageUpload = document.querySelector('.image-upload-div');

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.onload = function() {
                fitImageToDiv(img, imageUpload);
            };
            img.src = e.target.result;

            imageUpload.innerHTML = ''; // Limpa o conteúdo existente
            imageUpload.appendChild(img);
        };

        reader.readAsDataURL(input.files[0]);
    }
});

function fitImageToDiv(img, imageUpload) {
    const imageUploadWidth = imageUpload.offsetWidth;
    const imageUploadHeight = imageUpload.offsetHeight;

    const imgWidth = img.width;
    const imgHeight = img.height;

    const widthRatio = imageUploadWidth / imgWidth;
    const heightRatio = imageUploadHeight / imgHeight;

    // Calcula o fator de redimensionamento mantendo a proporção
    const resizeRatio = Math.min(widthRatio, heightRatio);

    // Redimensiona a imagem para preencher a div
    img.style.width = imgWidth * resizeRatio + 'px';
    img.style.height = imgHeight * resizeRatio + 'px';
}
