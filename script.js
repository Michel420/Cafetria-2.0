
/* Logica de Programação
    = Saber quando o usuario clicou no botão
    = Mudar o posicionamento do modal 
    = Fazer a mascara ficar visivel
    = Quando clicar na mascara, fechar o modal
    */

    const modal = document.querySelector(".modal")

    const mascara = document.querySelector(".mascara-modal")

    function mostrarModal(){
        modal.style.left = "50%"
        mascara.style.visibility = " visible"
    }

    function esconderModal(){
        modal.style.left = "-30%"
        mascara.style.visibility = "hidden"
    }