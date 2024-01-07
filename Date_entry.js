let username = document.getElementById("username");

let phone = document.getElementById("phone");

let education = document.getElementById("education");

let branch = document.getElementById("branch");

let college = document.getElementById("college");

let passout = document.getElementById("passout-year");

let email = document.getElementById("email");

let tableBody = document.getElementById("tablebody");

let srno = 1;

let check = null;

function dataProcessing() {

    let formData = fetchData();
    if (check == null) {
        storeData(formData);
    }
}

// fetching data from user

function fetchData() {

    let formData = {};

    formData.username = username.value;
    formData.phone = phone.value;
    formData.education = education.value;
    formData.branch = branch.value;
    formData.college = college.value;
    formData.passout = passout.value;
    formData.email = email.value;
    return formData;
}


// storing data into table

function storeData(formData) {
    let newRow = tableBody.insertRow(tableBody.length);

    let cell0 = newRow.insertCell(0);
    cell0.innerHTML = srno++;

    let cell1 = newRow.insertCell(1);
    cell1.innerHTML = formData.username;

    let cell2 = newRow.insertCell(2);
    cell2.innerHTML = formData.email;

    let cell3 = newRow.insertCell(3);
    cell3.innerHTML = formData.phone;

    let cell4 = newRow.insertCell(4);
    cell4.innerHTML = formData.education;

    let cell5 = newRow.insertCell(5);
    cell5.innerHTML = formData.passout;

    let cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<button onclick="editData(this)" class="btn btn-primary"> EDIT </button>
    <button onclick="deleteData(this)" class="btn btn-primary"> DELETE</button> `;

    clearFeilds();
}

// function to clear fields

function clearFeilds() {
    username.value = "";
    phone.value = "";
    education.value = "";
    branch.value = "";
    college.value = "";
    passout.value = "";
    email.value = "";
}

// function to edit data

function editData(btn) {
    let editRow = btn.parentElement.parentElement;

    username.value = editRow.cells[1].innerHTML;
    email.value = editRow.cells[2].innerHTML;
    phone.value = editRow.cells[3].innerHTML;
    education.value = editRow.cells[4].innerHTML;
    passout.value = editRow.cells[5].innerHTML;

    check = "newdata";

}