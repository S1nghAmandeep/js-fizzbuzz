// # FizzBuzz

// - creare funzione per i numeri da 1 - 100

const gridDOMElement = document.querySelector('.grid');
console.log(gridDOMElement);


for (let i = 1; i <= 100; i++) {

    console.log(i);

    const fizz = 'fizz';
    const buzz = 'buzz';

    let boxElement = document.createElement('div');
    boxElement.classList.add('box');

    //  - e per i multipli di 3 e 5 creare una regola
    if (i % 3 === 0 && i % 5 ===0) {
        console.log('fizzbuzz');
        boxElement.append(fizz + buzz);
        boxElement.classList.add('fizzbuzz');
    //  - creare multipli di 5

    } else if (i % 5 === 0) {
        console.log('buzz');
        boxElement.append(buzz);
        boxElement.classList.add('buzz');


    //  - creare multipli di 3     
    
    } else if (i % 3 === 0) {
        console.log('fizz');
        boxElement.append(fizz);
        boxElement.classList.add('fizz');
        
    } else {
        boxElement.append(i);
    }

    gridDOMElement.append(boxElement);

}




    // const boxString = '<div class="box">' + i + '</div>' 
    // console.log(boxString)
    // gridDOMElement.innerHTML += boxString;
