// Initialize Menu tabs
  var tabsList = ["Layers","Tools","Login"];
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
  // clear any menu content, and send event to content toggle function
  clearMenuContent();
  toggleMenuContent(e);
}

function toggleMenuContent(e){
  let target = e.target.innerText;
  // decorate button
    decorateBtn(e);
  // toggle display
    let selection = e.target.innerText;
    if(selection == 'Layers'){
      showLayersMenu();
    }else if(selection == 'Tools'){
      showToolsMenu();
    }else if(selection == 'Login'){
      showLoginMenu();
    }
}

function decorateBtn(e){
  // clear text decoration for other buttons
  let buttons = tabsUL.children;
  for (var i in buttons){
    try{
      buttons[i].style.fontWeight = '';
      buttons[i].style.textDecoration = '';
      buttons[i].style.backgroundColor = 'white';
      buttons[i].style.color = 'black';
    }
    catch(err){
      // do nothing
    }
  }
  let style = e.target.style;
  if(style.fontWeight != 'bold'){
    style.fontWeight = 'bold';
    style.textDecoration = 'underline';
    style.backgroundColor = tabBtnColorActive;
    style.color = 'white'
  }else{
    style.fontWeight = '';
    style.textDecoration = '';
    style.backgroundColor = 'black';
  }
}

function clearMenuContent(e){
  let menuDivs = menuContent.children;
  for (var i in menuDivs){
    if(menuDivs[i].nodeName == 'DIV'){
      menuDivs[i].style.display = 'none';
    }
  }
}

function showLayersMenu(){
  layersContent.style.display = 'block';
}

function showToolsMenu(){
  toolsContent.style.display = 'block';
}

function showLoginMenu(){
  loginContent.style.display = 'block';
}
