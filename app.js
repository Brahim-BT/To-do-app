
// Adding task

const AddBtn = document.querySelector("#Add-Btn");
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
    Task.querySelector(".btn").setAttribute('id', 'Delete-Btn');
    Task.querySelector(".btn").textContent = "Delete Task";
    Task.querySelector(".btn").setAttribute('class', 'btn btn-danger');
    document.querySelector("#Tasks-list .card-body").className += " bg-primary p-2 text-dark bg-opacity-25";
    AddForm.querySelector('input[type="text"]').value = null;
    document.getElementById("floatingTextarea").value = null;
})

