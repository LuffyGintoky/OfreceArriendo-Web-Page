class ImageGallery extends HTMLElement {
    constructor() {
        super();


        // Es buena idea adjuntar un shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Aquí deberías agregar tus estilos, ya sea como una cadena de texto o como un elemento <style>

        // Definición del HTML interno
        shadow.innerHTML = `
            
            <div class="full-img" id="fullImgBox">
                <div id="imgContainer">
                    <img id='fullImg' src="../images/properties/antofagasta/casas/casa 53/casa52.jpg">
                    <button id="prevButton">❮</button>
                    <button id="nextButton">❯</button>
                </div>
                <span id="closeButton">X</span>
            </div>

            <div id="gallery" class="img-gallery">
                <!-- Las imágenes se cargarán aquí -->
            </div>`;

        // Aquí, debes agregar los event listeners en lugar de usar 'onclick' en el HTML
        this.shadowRoot.querySelector('#prevButton').addEventListener('click', () => this.changeImg(-1));
        this.shadowRoot.querySelector('#nextButton').addEventListener('click', () => this.changeImg(1));
        this.shadowRoot.querySelector('#closeButton').addEventListener('click', () => this.closeFullImg());
        this.currentImgIndex = 0;
        this.imageNamesArray = [];


        // Fetch the external CSS
        fetch('imageGalery.css') // Asegúrate de actualizar esto con la ruta correcta a tu archivo CSS
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.text();
            })
            .then(css => {
                const style = document.createElement('style');
                style.textContent = css;
                shadow.appendChild(style);
            })
            .catch(error => {
                console.error('Error fetching the CSS file:', error);
            });

    }


    connectedCallback() {
        // Asegúrate de que tus estilos estén definidos y sean correctos.
        // Añade tus imágenes cuando el elemento esté en el DOM.
        const imageNames = this.getAttribute('images');
        console.log('Image names received:', imageNames); // Imprimir imageNames en la consola
        console.log('Type of imageNamesString:', typeof imageNames); // Debería imprimir 'string'

            // Convierte la cadena de texto a un array
        const imageNamesJSON = JSON.parse(imageNames);
        console.log('Image names array:', imageNamesJSON); // Imprimir el array en la consola
        this.loadImages(imageNamesJSON);

        this.imageNamesArray = JSON.parse(imageNames);
    }

    loadImages(imageArray) {
        // Debes obtener el contenedor de la galería de imágenes desde shadow DOM
        const galleryContainer = this.shadowRoot.querySelector("#gallery");

        imageArray.forEach((imageName) => {
            // Crear nuevo elemento img
            let newImg = document.createElement("img");
            // Establecer el atributo src
            const imagesSrc = this.getAttribute('imagesSrc')

            newImg.src = imagesSrc + imageName; // actualiza la ruta a tu carpeta de imágenes

            // Añadir evento onclick a la imagen
            newImg.onclick = () => {
                this.openFullImg(newImg.src);
            };

            // Añadir la nueva imagen al contenedor
            galleryContainer.appendChild(newImg);
        });
    }


    openFullImg(src) {
        const fullImgBox = this.shadowRoot.querySelector("#fullImgBox");
        const fullImg = this.shadowRoot.querySelector("#fullImg");
        
        fullImgBox.style.display = 'flex';
        fullImg.src = src;
        this.currentImgIndex = imageNames.indexOf(src.split("/").pop()); // Extrae el nombre del archivo y obtiene el índice
    }

    closeFullImg() {
        const fullImgBox = this.shadowRoot.querySelector("#fullImgBox");
        fullImgBox.style.display = 'none';
    }

    changeImg(step) {
        this.currentImgIndex += step; // Cambiar el índice de la imagen actual

        // Verificar los límites de la lista de imágenes
        if (this.currentImgIndex < 0) {
            this.currentImgIndex = this.imageNamesArray.length - 1;
        } else if (this.currentImgIndex >= this.imageNamesArray.length) {
            this.currentImgIndex = 0;
        }

        const imagesSrc = this.getAttribute('imagesSrc')
        // Establecer la nueva imagen
        const fullImg = this.shadowRoot.querySelector("#fullImg");
        fullImg.src = imagesSrc + this.imageNamesArray[this.currentImgIndex];
    }





}

customElements.define('image-gallery', ImageGallery);