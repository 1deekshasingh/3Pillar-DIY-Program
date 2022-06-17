import {asabenehChallenges2020} from "./fileinfo.js";

document.body.style.fontFamily = 'san-serif, helvetica';

let wrapper = document.querySelector('.wrapper');

let getDate = () => {
    let d = new Date();
    
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    let monthIndex = d.getMonth();
    let year = d.getFullYear();
    let date = d.getDate();
    let hour = d.getHours();
    let mins = d.getMinutes();
    
    date = date < 10? '0'+date.toString(): date;
    hour = hour < 10? '0'+hour.toString(): hour;  
    mins = mins < 10? '0'+mins.toString():mins;
    
    return `${months[monthIndex]} ${date}, ${year}  ${hour}:${mins}`;
}


let generateColor = () => {
    let alphanums = '0123456789abcdef';
    
    let colorArr = [];
    for(let i=0; i<6; i++) {
      let index = Math.floor(Math.random() * 15);
      colorArr.push(alphanums[index]);
    }
    return '#' + colorArr.join('');
}

let h1 = document.createElement('h1');
h1.innerHTML = 'Asabeneh Yetayeh Challenges in <strong>2022</strong>';
h1.style.textAlign = 'center';
h1.style.fontSize = '20px';
h1.style.fontWeight = '400';
h1.style.marginBottom = '5px';
h1.style.padding = '5px';
wrapper.appendChild(h1);


let yearText = document.querySelector('strong');
yearText.style.fontSize = '40px';

setInterval(() => yearText.style.color = generateColor(), 1000);


let h3 = document.createElement('h3');
h3.textContent = '30DaysOfJavaScript Challenge';
h3.style.fontWeight = '370';
h3.style.fontSize = '15px';
h3.style.textDecoration = 'underline';
h3.style.textAlign = 'center';
h3.style.padding = '3px';
h3.style.margin = '0px';
      
wrapper.appendChild(h3);




// date section 


let date = document.createElement('h4');
date.textContent = getDate();
date.style.fontSize = '15px';
date.style.padding = '8px';
date.style.margin = 'auto';
date.style.textAlign = 'center';
date.style.width = '15%';
date.style.fontWeight = '550';
date.style.marginBottom = '5px';
date.style.marginTop = '5px';
setInterval(() => {
date.style.backgroundColor = generateColor();
}, 1000);
      
wrapper.appendChild(date);


let list = document.createElement('ul');

list.style.listStyle = 'none';
list.style.width = '80%';
list.style.margin = 'auto';

asabenehChallenges2020.challenges.forEach(challenge => {
    let item = document.createElement('li');
    
    let titleSpan = document.createElement('span');
    let title = document.createTextNode(challenge.name);

    titleSpan.appendChild(title);





    let dropdown = document.createElement('details');
    let dropdownSpan = document.createElement('span');

    let summary = document.createElement('summary');
    summary.textContent  = challenge.name.split(' ')[challenge.name.split(' ').length - 1];

    let topics = document.createElement('ul');

    challenge.topics.forEach(topic => {
        let item = document.createElement('li');
        item.textContent = topic;
        topics.appendChild(item);

        item.style.padding='5px';
        item.style.width = '90%';
        item.style.marginTop ='3px';
        item.style.marginBottom = '3px';

    })

    topics.style.listStyleType = 'none';
    topics.style.width = '80%';
    topics.style.margin = 'auto';


    dropdownSpan.appendChild(dropdown);

    let status = document.createTextNode(challenge.status);
    let statusSpan = document.createElement('span');
    statusSpan.appendChild(status);



    item.appendChild(titleSpan);
    dropdown.appendChild(summary);
    dropdown.appendChild(topics);
    item.appendChild(dropdownSpan);
    item.appendChild(statusSpan);
    list.appendChild(item);


    item.style.border='1px blue solid'; 
    item.style.padding='25px';
    item.style.width = '90%';
    item.style.marginTop ='3px';
    item.style.marginBottom = '3px';
    // item.style.display = 'grid';
    // item.style.gridTemplateColumns = '33% 33% 33%';
    item.style.display = 'flex';
    item.style.justifyContent = 'space-between';

    if(challenge.status == 'Done') {
        item.style.backgroundColor = '#00D100';
    }
    else if(challenge.status == "Ongoing") {
        item.style.backgroundColor = '#FFD100';
    }
    else{
        item.style.backgroundColor = '#FF0000';
    }
})


let h3content = document.createElement('h3');
h3content.textContent = asabenehChallenges2020.author.bio;
h3content.style.fontWeight = '370';
h3content.style.fontSize = '15px';
h3content.style.color = '#black';


wrapper.appendChild(list);
body.appendChild(wrapper);
body.appendChild(h3content);
