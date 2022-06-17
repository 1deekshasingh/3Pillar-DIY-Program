let wrapper = document.querySelector('.wrapper');
let profession = [['🌱', 'Educator'],
['💻', 'Programmer'],
['🌐', 'Developer'],
['🔥', 'Motivator'],
['📔', 'Content Creator']];


let pro = document.querySelector('#profession');

setInterval(() => {
    pro.innerText = profession[Math.floor(Math.random() * profession.length)][0] + ' ' + profession[Math.floor(Math.random() * profession.length)][1];

}, 1000);

wrapper.appendChild(pro);

let para = document.querySelector('.para');

wrapper.appendChild(para);

let container = document.querySelector('.box');

wrapper.appendChild(container);



let technologies = ["REACT" , "REDUX" , "HTML" , "CSS" , "PYTHON" , "PANDAS" ,"NUMPY" , "NODEJS" ," EXPRESSS" , "JAVA" , "JAVASCRIPT"]

let techno = () => {
    let tech = technologies[Math.floor(Math.random() * technologies.length)];
    return tech;
}


console.log(techno);

let tech = document.querySelector('.tech');

setInterval(() => {
    tech.innerHTML = "The technologies I teach <strong style = 'fontSize:40px'>" + techno() + "</strong>";
},1000)


wrapper.appendChild(tech);
