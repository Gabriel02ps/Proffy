//Procurar o botao
document.querySelector("#add-time")
.addEventListener('click' , cloneField)
// Quando clicar no botao 

//Executar uma acao
function cloneField() {
    //Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) // boolean

     //pegar os campos 
    const fields = newFieldContainer.querySelectorAll('input')

    //limpar campos
    fields.forEach(function(field) {

        field.value =""
        
    });

    //Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}