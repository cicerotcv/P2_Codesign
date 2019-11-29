
function replace() {
    // let element = document.querySelector(selector);
    // let template = Handlebars.compile(element.innerHTML);
    this.innerHTML = template(context);
}


function toggleNotifications(x) {
    x.classList.toggle("change");
    var menu = document.getElementsByClassName('menu')[0];
    console.log("click no menu funcionou");
    if (menu.style.display != "grid") {
        menu.style.display = "grid";
    }
    else {
        menu.style.display = "none";
    }

    
}

function interestRemove(x) {
    var parent = document.getElementsByClassName(x.parentElement.className)[0];
    parent.style.display = "none"
}

function appendSuggestions(x) {
    var condicional = document.getElementsByClassName("condicional")[0];
    if(x.value != "") {
        if (condicional.style.display != 'block') {
            condicional.style.display = 'block'
        }
    }
    else {
        condicional.style.display = 'none'
    }
}

function changeColor(x) {
    console.log(x.style.backgroundColor)
    if ( x.style.backgroundColor != "rgb(196, 196, 196)") {
        x.style.backgroundColor = 'rgb(196, 196, 196)'
    }
    else {
        x.style.backgroundColor = 'rgb(192, 235, 106)'
    }
}