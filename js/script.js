//Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTable = document.querySelector("#multiplication-operations");

const multiplicationTitle = document.querySelector("#multiplication-title span")
//Funções
    const createTable = (number, multiplicatorNumber) => {
        multiplicationTable.innerHTML = "";

        for (i = 1; i <= multiplicatorNumber; i++){
            const result = number * i;

            const template = `<div class="row">
                <div class="operation">${number} x ${i} = </div>
                <div class="result">${result}</div>
            </div>`;


            const parser = new DOMParser();
            //convertendo e jogando para o HTML
            const htmlTemplate = parser.parseFromString(template, "text/html");
            //pegando a .class no html
            const row = htmlTemplate.querySelector(".row");
            //aplicando o template como um elemento filho de multiplication-operations
            multiplicationTable.appendChild(row);
        }

        multiplicationTitle.innerHTML = number;
    };
//Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber)
});