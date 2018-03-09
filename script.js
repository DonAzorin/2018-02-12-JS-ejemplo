function holaMundo() {
  console.log('¡hola mundo!');
}

//holaMundo()

function herencia(dineroJose, dineroJuan, herencia) {
  var mitadherencia = herencia/2;
    dineroJose = dineroJose + mitadherencia
    dineroJuan = dineroJuan + mitadherencia
    dineroTotal = dineroJose + dineroJuan
    document.getElementsByClassName('holaMundo')[0].innerHTML = '$' +  dineroTotal
    console.log('mitadherencia ' , mitadherencia);
    console.log('dineroJose', dineroJose);
    console.log('dineroJuan', dineroJuan);
    console.log('dineroTotal', dineroTotal);
}

//herencia(100, 500, 2000);


function cuenta(numeroInicial, numeroFinal) {
  for (var i = numeroInicial; i <= numeroFinal; i++) {
    console.log(i);
    }
}

//cuenta(10,100)

document.querySelector(".new-function").addEventListener("click", tengoHambre);

function tengoHambre(hambre) {
  if(hambre <= 30){
    if(hambre <=5) {
      console.log('Estoy enojado');
  } else {
    console.log('Estoy Triste');
    }
  } else if(hambre > 80) {
    console.log('Estoy feliz!');
  } else {
    console.log('Medio tengo hambre');
  }
}

//tengoHambre(3);


//var titulo = document.querySelector('h1');

//titulo.innerHTML

//object.addEventListener('click', titulo )
