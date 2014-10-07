var myForm = document.getElementById("myForm");
myForm.addEventListener("submit", function (event) {
    // prevent the data from being sent to the server
    event.preventDefault();

    //toDoInput referrs to input name in HTML
    var toDoInput = this.toDoInput.value;
    if (toDoInput === "") {
        return;
    }

    console.log(toDoInput);

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    var listItem = document.createElement("li");
    listItem.innerText = toDoInput;

    var deleteLink = document.createElement("a");
    deleteLink.innerText = "delete";

    toDoList.appendChild(listItem);
    listItem.appendChild(checkBox);
    listItem.appendChild(deleteLink);

    // // clears input
    document.getElementById('text').value="";

    deleteLink.addEventListener("click", function() {
        //delete the parent li
        var listItemToDelete = this.parentNode;
        var confirmBox = confirm("Are you sure you'd like to delete this item?");
        if (confirmBox) {
            listItemToDelete.parentNode.removeChild(listItemToDelete);
        }
    });

    var strikeOut = false;
    checkBox.addEventListener("click", function() {
        //add class to li element
        if (strikeOut === false) {
            listItem.classList.add("strikeout");
            strikeOut = true;
        }
        else {
            listItem.classList.remove("strikeout");
            strikeOut = false;
        }
    });

});

