// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
// Even numbers background is green
// Odd numbers background is yellow
// Prime numbers background is red



let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');

h1.className = 'header';
h2.className = 'header';
h3.className = 'header';

// header styling

let fontWeight = 400;

document.querySelectorAll('.header').forEach(x => {
    x.style.textAlign = 'center';
    x.style.fontWeight = `${fontWeight}`;
    x.style.fontFamily = 'sans-serif helvetica';
    x.style.padding = '2px';
    x.style.margin = '0px';
});

h1.style.fontWeight = '550';
h2.style.textDecoration = 'underline';
h3.style.textDecoration = 'underline';


// prime function

let isPrime = num => {
    if (num == 1 || num == 0) return false;
    if (num == 2 || num == 3)
      return true;
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) return false;
    }
    return true;
}


// table creation
let container = document.createElement('div');

let table = document.createElement('table');

let nums = 0;
while (nums < 101) {

    let row = document.createElement('tr');

    for(let x =1 ;x<=6;x++){
        let data = document.createElement('td');
        data.textContent = nums;

        data.style.margin = '15px';
        data.style.padding = '15px';

        if(isPrime(nums)){
            data.style.backgroundColor = '#f76262';
        }
        else if(nums % 2 != 0){
            data.style.backgroundColor = '#fee904';
        }
        else{
            data.style.backgroundColor = '#42b845';
        }

        row.appendChild(data);
        nums++;
    }

    table.appendChild(row);
}


//table styling

table.style.width = '60%';
table.style.marginRight = '20%';
table.style.marginLeft = '20%';
table.style.marginTop = '1pc';
table.style.textAlign = 'center';
table.style.fontFamily = 'ariel';
table.style.fontSize = '22px';
table.style.fontWeight = 'bold';
table.style.color = 'white';

container.appendChild(table);
document.body.appendChild(container);
