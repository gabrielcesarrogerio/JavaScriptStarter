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

// Exercício 2

// var list = document.createElement('ul');
// var appendicite = document.querySelector('#app');
// appendicite.appendChild(list); 
// var btnElement = document.querySelector('button.botao');
// btnElement.onclick = function () {

//     var input = document.querySelector('input#user').value;
//     axios.get('https://api.github.com/users/' + input + '/repos')
//         .then(function(response){
//             var content = response.data;
//             content.forEach((index) => {
//                 var newrepo = document.createElement('li');
//                 var listsearch = document.querySelector('ul');
//                 listsearch.appendChild(newrepo);
//                 newrepo.innerHTML = index.name;
//                 console.log(index);
//             })
//         })
//         .catch(function(error){
//             console.log(error);
//         })

    
// }

//Exercício 3

var list = document.createElement('ul');
var appendicite = document.querySelector('#app');
appendicite.appendChild(list); 
var btnElement = document.querySelector('button.botao');
btnElement.onclick = function () {
    
        var loading = document.createElement('li');
        var listsearch = document.querySelector('ul');
        listsearch.appendChild(loading);
        var loadingtext = document.createTextNode('Carregando...');
        loading.appendChild(loadingtext);
        
   
        var input = document.querySelector('input#user').value;
        axios.get('https://api.github.com/users/' + input + '/repos')
        .then(function(response){
            var content = response.data;
            content.forEach((index) => {
                var newrepo = document.createElement('li');
                var listsearch = document.querySelector('ul');
                listsearch.appendChild(newrepo);
                newrepo.innerHTML = index.name;
                console.log(index);
            })
        })
        .catch(function(error){
            var loaded = document.createElement('li');
            listsearch.appendChild(loaded);
            var inexist = document.createTextNode('Este usuário não existe!');
            loaded.appendChild(inexist);
            console.log(error);
        })

    
}