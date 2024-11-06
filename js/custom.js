function validateForm(event) {
  "use strict";
  event.preventDefault();
  const form = document.getElementById("create-page");
  if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");
      return false;
  }
  return submitForm();
}

function submitForm() {
  const nameField = document.getElementById("name");
  const nameValue = nameField.value;  // Capture the actual input value
  axios.post('/pages/', { name: nameValue })
      .then(response => {
          if (response.status === 200) {
              alert(`Page "${nameValue}" created successfully`);
              window.location.reload();  // Reload page to update the list
          } else {
              alert("Something went wrong");
          }
      })
      .catch(err => {
          console.log('Error:', err);
          alert('An error occurred while creating the page');
      });
  clearForm();
  return true;
}

function clearForm() {
  const nameField = document.getElementById("name");
  nameField.value = "";
  const form = document.getElementById("create-page");
  form.classList.remove("was-validated");
}
