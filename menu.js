// Initialize Menu tabs
  var tabsList = ["Layers","Tools"];
  // loop through tabs and append an <li> for each item
  for (var i in tabsList){
    let li = document.createElement('li');
    li.className = "menuItem";
    li.innerText = tabsList[i];
    // add an event listener to the <li> element
    li.addEventListener('click',menuItemClick);
    tabsUL.appendChild(li);
  }



// Toggle menu when menu button is clicked

menuLines.addEventListener('click',(e)=>{
  let menu = document.getElementById('menu');
  menuToggle(menu);
});

function menuToggle(menu){
  // if menu is closed, open it
  if(menu.style.width != '30%'){
    menu.style.width = '30%';
    menu.style.height = '100%';
    menu.style.backgroundColor = 'black';
    menu.style.opacity = 0.8;
    menuLines.src = '/images/close.svg';
    menuHead.style.borderBottom = '5px white solid';
    menuHead.style.paddingBottom = '15px';
    tabs.style.display = 'block';
    menuContent.style.display = 'block';
  }else{
    menu.style.width = '';
    menu.style.height = '';
    menu.style.backgroundColor = 'black';
    menu.style.opacity = 1;
    menuLines.src = '/images/menuLines.svg';
    menuHead.style.borderBottom = '';
    menuHead.style.paddingBottom = '5px';
    tabs.style.display = 'none';
    menuContent.style.display = 'none';
  }
};

/*
// toggle Layers div when Layers button is clicked
  // get the layers button and assign it to the var layersBtn
  var menuItems = document.getElementsByClassName('menuItem');
  for (var i in menuItems){
    if(menuItems[i].innerText == 'Layers'){
      var layersBtn = menuItems[i];
    }
  }
  layersBtn.addEventListener('click',(e)=>{
    layersContent.style.display = 'block';
  })
*/

//initialize layers list in menu
  // Layers object
  var mapLayers = ["Map Locations","Lines","Transformers","Meters","OCRs","Open Points"];
  var layersUL = document.getElementById('layersList');
  for (var i in mapLayers){
    // create <li>
    let li = document.createElement('li');
    // create <input>
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // add an event listener for the checkbox
    checkbox.addEventListener('change',layerToggle);
    // create <label> for input
    let label = document.createElement('label');
    label.innerHTML = mapLayers[i];
    // place chekbox and labels tags inside of li tag
    li.appendChild(checkbox);
    li.appendChild(label);
    // append new li to layersUL
    layersUL.appendChild(li);
  }

function layerToggle(e){
  let layerName = e.target.nextSibling.innerText;
  if(e.target.checked == true){
    var state = 'on';
  }else{
    var state = 'off';
  }
  console.log(layerName + " is " + state);
}

function menuItemClick(e){
  if(e.target.innerText == 'Layers'){
    toggleLayerMenu();
  }
}


function toggleLayerMenu(){
  let menuItems = document.getElementsByClassName('menuItem');
  for (var i in menuItems){
    if (menuItems[i].innerText == 'Layers'){
      var layersBtn = menuItems[i];
    }
  }
  if(layersContent.style.display != 'block'){
    layersContent.style.display = 'block';
    layersBtn.style.textDecoration = 'underline';
    layersBtn.style.fontWeight = 'bold';
  }else{
    layersContent.style.display = 'none';
    layersBtn.style.textDecoration = '';
    layersBtn.style.fontWeight = '';
  }
}
