
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
    console.log(x.value)
}