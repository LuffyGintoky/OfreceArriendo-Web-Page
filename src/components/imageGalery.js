
// Lista de nombres de imágenes o puedes generar esta lista dinámicamente
var imageNames = [ '3988b9_2bc0620386f84ab3899402dc58f0fb7a~mv2_d_3864_5152_s_4_2.webp', '3988b9_54010271a9424111a32ce16427beda01~mv2_d_2560_1920_s_2.webp', '3988b9_5c9b238cb5ba4419b0574b3a317582e0~mv2_d_2560_1920_s_2.webp', '3988b9_6345473489894259937cc817b939b948~mv2_d_5152_3864_s_4_2.webp', '3988b9_68bd39272b4248f5b1e6314ca3a6c657~mv2_d_2560_1920_s_2.webp', '3988b9_80bdadfc273f46c7a14d3d5700e82843~mv2_d_2560_1920_s_2.webp', '3988b9_8f604bf4ffc0462e98ad1d4d7bfe2319~mv2_d_1920_2560_s_2.webp', '3988b9_945ef506c00d4a1f970e8a762c23becb~mv2.webp', '3988b9_a43341f893c9429fbab7b892d8d64499~mv2_d_3864_5152_s_4_2.webp', '3988b9_bd7ba7917e9042f1873ab42a837ad6bd~mv2_d_1920_2560_s_2.webp', '3988b9_be3e9647062b462b82555184919f9a3a~mv2_d_2560_1920_s_2.webp', '3988b9_c02f1a6699804391a3100a189c984b4b~mv2.webp', '3988b9_c0f2c2d8ea8549f38d499116edb26f69~mv2.webp', '3988b9_c7de1e327d0f4c3cb9e426bf73e4e6a5~mv2_d_3864_5152_s_4_2.webp', '3988b9_c965a247854f459589cb8ea722189aff~mv2_d_2560_1920_s_2.webp', '3988b9_cbecc3f3cdb742b4ad93d37ba4f62e43~mv2.webp', '3988b9_d7ac8ff145294560a827cda2377d60d3~mv2_d_1920_2560_s_2.webp', '3988b9_d84c27b336364764afb29c0e4eb26aa8~mv2_d_5152_3864_s_4_2.webp', '3988b9_ea36cbb3de05407e9953c70c19c229e2~mv2.webp', 'casa52.jpg']

// Obtener el contenedor de la galería
var galleryDiv = document.getElementById("gallery");

var fullImgBox = document.getElementById("fullImgBox")
var fullImg = document.getElementById('fullImg')

var currentImgIndex = 0; // Índice de la imagen actual en pantalla completa

function oppenFullImg(pic) {
    fullImgBox.style.display = 'flex';
    fullImg.src = pic;
    currentImgIndex = imageNames.indexOf(pic.split("/").pop()); // Obtener el índice de la imagen actual basado en su nombre de archivo
}

function changeImg(step) {
    currentImgIndex += step; // Cambiar el índice de la imagen actual

    // Verificar los límites de la lista de imágenes
    if (currentImgIndex < 0) {
        currentImgIndex = imageNames.length - 1; // Si es menor que 0, ir a la última imagen
    } else if (currentImgIndex >= imageNames.length) {
        currentImgIndex = 0; // Si es mayor que el número de imágenes, volver a la primera
    }

    // Establecer la nueva imagen
    fullImg.src = "../images/properties/antofagasta/casas/casa 53/" + imageNames[currentImgIndex];
}

// Función para crear y añadir imágenes al contenedor
function loadImages(imageArray, container) {
    imageArray.forEach(function(imageName) {
        // Crear nuevo elemento img
        var newImg = document.createElement("img");
        // Establecer el atributo src
        newImg.src = "../images/properties/antofagasta/casas/casa 53/" + imageName; // actualiza la ruta a tu carpeta de imágenes

        // Añadir evento onclick a la imagen
        newImg.onclick = function() {
            oppenFullImg(newImg.src);
        };

        // Añadir la nueva imagen al contenedor
        container.appendChild(newImg);
    });
}

// Llamar a la función para cargar imágenes
loadImages(imageNames, galleryDiv);
