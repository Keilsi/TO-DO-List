function addTask () {
    var input = document.getElementById("input");
    var newTask = input.value;
    if (newTask != "") {
        var item = document.createElement("li");
        item.innerHTML = '<input type="button" class="done" onclick="markDone(this.parentNode)" value="&#x2713;" /> ' +
            '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
            '<input type="button" class="important" onClick="important(this.parentNode)" value="!"/> '+
            newTask;
        document.getElementById("tasks").appendChild(item);
        input.value = "";
        input.placeholder = "enter next task...";
    }
}

function markDone (item) {
    item.className = 'finished';
}

function remove (item) {
    // remove item completely from document
    if (item.className === 'finished') {
    item.remove();
    }
}

function doAbout() {
    var element = document.getElementById("divabout");
    element.innerHTML = "Author is Irina Eliseeva";
    element.className = "yellowbackground";
}

function clearAbout() {
    var element = document.getElementById("divabout");
    element.innerHTML = "";
}

function important (item) {
    item.className = 'important';
}
