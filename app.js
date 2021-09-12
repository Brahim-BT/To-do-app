
// Adding task

const AddBtn = document.querySelector("#Add-Btn");
AddBtn.e
AddBtn.addEventListener('click', function () {
    var AddForm = document.forms['Add-Task'];
    var TaskTitle = AddForm.querySelector('input[type="text"]').value;
    var TaskDescp = AddForm.querySelector("#Add-Task #floatingTextarea").textContent;
    var task = document.querySelector(".card");
    var Task = task.cloneNode(true);
    Task.querySelector('input[type="text"]').value = TaskTitle;
    Task.querySelector("#Add-Task #floatingTextarea").textContent = TaskDescp;
    const TaskL = document.querySelector("#Tasks-list");
    TaskL.append(Task);
    AddForm.querySelector('input[type="text"]').value = "";
    document.getElementById("floatingTextarea").value = "";
})



