let newItemCounter = 1;
const list = document.querySelector('#list');
const btn = document.getElementById('button');
const headline = document.getElementById('headline');
const listItems = document.querySelectorAll('#list');
// const listItems = document.getElementById('list').getElementsByTagName('li');

for( const item of listItems) {
  item.addEventListener('click', (event) => {
    if(event.target.nodeName == 'LI') {
      headline.innerHTML = event.target.innerHTML;
      const list = event.target.parentNode.children;
      for (i = 0; i < list.length; i++){
        list[i].classList.remove('bg-warning');
      }
      event.target.classList.add('bg-warning');
    }
    
  }
  )}; 

  btn.addEventListener('click', (event) => {
    list.innerHTML += `<li class="border-bottom m-3"> Something new ${newItemCounter} </li>`
    newItemCounter++
  })
  
/* Another way */

// for(i = 0; i < listItems.length; i++) {
//   listItems[i].addEventListener('click', activateItem);
// }

// function activateItem (event) {
//   if(event.target.nodeName == 'LI') {
//     headline.innerHTML = event.target.innerHTML;
//     const list = event.target.parentNode.children;
//     for (i = 0; i < list.length; i++){
//       list[i].classList.remove('bg-warning');
//     }
//     event.target.classList.add('bg-warning');
//   } 
// }


// btn.addEventListener('click', createNewItem);

// function createNewItem() {
//   list.innerHTML += `<li class="border-bottom m-3"> Something new ${newItemCounter} </li>`
//   newItemCounter++
// }