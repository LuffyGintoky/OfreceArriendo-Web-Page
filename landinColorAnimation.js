
function initTypedAnimation() {
    if (document.querySelector('.auto-type')) {

        var typed = new Typed('.auto-type', {
            strings : ['Ofrece Arriendo ', 'Compra!', 'Arrienda!','Permuta!','Antofagasta', 'Calama'],
            typeSpeed : 25,
            backSpeed : 25,
            loop: true,
            showCursor: true,
            cursorChar: '',
            preStringTyped: function() {
                changeColors();  // Llama a la función changeColors después de que cada texto ha aparecido y desaparecido
            }
        });


        // Definir arrays de colores
        var textColors = ['#FBCEB1','#AA00FF', '#012677', '#1B66FF', '#F733FF','#F3FFD2'];  // Ejemplo de colores para el texto
        var backgroundColors = ['#0E8D94','#C5F7F0','#F2E4F9','#DCE4F7','#000039','#55024A' ,'#231B42'];  // Ejemplo de colores para el fondo

        // Índice para seguir la posición actual en los arrays de colores
        var colorIndex = 0;

        function changeColors() {
        // Cambia el color del texto y del fondo usando los arrays
        document.querySelector('.container-typed').style.backgroundColor = backgroundColors[colorIndex];
        document.querySelector('.auto-type').style.color = textColors[colorIndex];
        document.querySelector('.typed-cursor').style.backgroundColor = textColors[colorIndex];
        document.querySelector('.main-container').style.backgroundColor = backgroundColors[colorIndex];

        // Incrementa el índice para el próximo ciclo
        colorIndex++;
        if (colorIndex >= textColors.length) {  // Si el índice excede el tamaño de los arrays, reinícialo
            colorIndex = 0;
            } 
        }
    }
}    