// # FizzBuzz

// - creare funzione per i numeri da 1 - 100

const gridDOMElement = document.querySelector('.grid');
console.log(gridDOMElement);

for (let i = 1; i <= 100; i++) {

    //  - creare multipli di 3     
    //  - creare multipli di 5
    //  - e per i multipli di 3 e 5 creare una regola

    if (i % 15 === 0) {
        console.log('fizzbuzz');

    } else if (i % 5 === 0) {
        console.log('buzz');

    } else if (i % 3 === 0) {
        console.log('fizz');
        
    } else {
        console.log(i)
    }
    
    
     
    const boxDOMElement = document.createElement('div');
    boxDOMElement.classList.add('box');
    boxDOMElement.innerHTML = i;
    gridDOMElement.append(boxDOMElement);
}




    // const boxString = '<div class="box">' + i + '</div>' 
    // console.log(boxString)
    // gridDOMElement.innerHTML += boxString;
