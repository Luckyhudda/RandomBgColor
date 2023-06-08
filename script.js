const box =document.querySelector('#box');
const url = "https://jsonplaceholder.typicode.com/todos";

function finalResult(data) {
  data.forEach((el)=>{
     let div = document.createElement('div');
     let para1 = document.createElement('p');
     let para2 = document.createElement('p');
     let btn = document.createElement('button');
     btn.classList.add('btn');
     div.classList.add('divData');
      btn.textContent = 'Click Me';
     para1.textContent = el.title;
     para2.textContent = el.completed;
    para2.classList.add(el.completed === true ? 'green' : 'red');

    
   div.append(para1,para2);
   div.appendChild(btn);
   box.append(div);

   btn.addEventListener('click', function(){
    let randomColor1 = Math.trunc(Math.random() * 255) +1;
    let randomColor2 = Math.trunc(Math.random() * 255) +1;
    let randomColor3 = Math.trunc(Math.random() * 255) +1;
    btn.parentElement.style.background = `rgb(${randomColor1},${randomColor2},${randomColor3})`
   })
   
  })
}

async function getData(){
  try{
    let data = await fetch(url);
    let finalData = await data.json();
    finalResult(finalData);
  }catch{
    console.log('Error')
  }
}
getData()

