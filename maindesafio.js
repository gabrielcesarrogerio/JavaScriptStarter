// Exercício 1

// var checaIdade = function (idade) {
//     return new Promise(function(resolve, reject){
//         if (idade >= 18){
//             resolve('Maior que 18');
//         }else {
//             reject('Menor que 18')
//         }

//     }) 
// }

// checaIdade(20)
//     .then(function(response){
//         console.log(response);
//     })
//     .catch(function(error){
//         console.log(error);
//     })
var list = document.createElement('ul');
var appendicite = document.querySelector('#app').
appendicite.appendChild(list); 
var btnElement = document.querySelector('button.botao');
btnElement.onclick = function () {
    var input = document.querySelector('input#user').value;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users/' + input);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if(xhr.readyState === 4){
            console.log(JSON.parse(xhr.responseText));
            return JSON.parse(xhr.responseText);
        }
        var newrepo = document.createElement('li');
        var listsearch = document.querySelector('ul');
        listsearch.appendChild(newrepo);
        
    }

}