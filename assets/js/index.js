
function replace() {
    // let element = document.querySelector(selector);
    // let template = Handlebars.compile(element.innerHTML);
    this.innerHTML = template(context);
}


function toggleNotifications() {
    var menu = document.getElementsByClassName('menu')[0]
    console.log("click no menu funcionou");
    if (menu.style.display != "grid") {
        menu.style.display = "grid";
    }
    else {
        menu.style.display = "none";
    }
}