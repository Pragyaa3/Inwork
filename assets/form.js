const firebaseConfig = {
  apiKey: "AIzaSyAySsqUupU_QGh6RDOccKruKBCjP3QMB9M",
  authDomain: "form-e3663.firebaseapp.com",
  databaseURL: "https://form-e3663-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "form-e3663",
  storageBucket: "form-e3663.appspot.com",
  messagingSenderId: "67534306966",
  appId: "1:67534306966:web:59cec734c01079ab8c4cb7",
  measurementId: "G-J3ZF2N6V2D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
const auth = firebase.auth();

// Variable to access database collection
const formDataCollection = firestore.collection("formData");

document.addEventListener('DOMContentLoaded', function () {
  const roleSelect = document.getElementById('role');
  const additionalFields = document.getElementById('additional-fields');
  const form = document.getElementById('loginForm');

  roleSelect.addEventListener('change', function () {
    additionalFields.innerHTML = ''; // Clear previous fields

    if (roleSelect.value === 'admin') {
      addAdminFields();
    } else if (roleSelect.value === 'client') {
      addClientFields();
    }
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Add additional fields to data object
    if (roleSelect.value === 'admin') {
      data['company_id'] = document.getElementById('company_id').value;
    } else if (roleSelect.value === 'client') {
      data['company_name'] = document.getElementById('company_name').value;
      data['employee_id'] = document.getElementById('employee_id').value;
    }

    console.log("Form submitted with values:", data);

    // Attempt to sign in
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user);

        // Save form data to Firestore
        formDataCollection.doc(user.uid).set(data)
          .then(() => {
            console.log("Data saved!");
            alert("Login successful and data saved!");

            // Redirect based on role
            if (roleSelect.value === 'admin') {
              window.location.href = "../adminDashboard.html";
            } else if (roleSelect.value === 'client') {
              window.location.href = "../clientDashboard.html";
            }
          })
          .catch((error) => {
            console.error("Error saving data:", error);
          });
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
        alert("Login failed. Please check your credentials.");
      });
  });

  function addAdminFields() {
    const companyIdField = createField('company_id', 'Company ID');
    additionalFields.appendChild(companyIdField);
  }

  function addClientFields() {
    const companyNameField = createField('company_name', 'Company Name');
    const employeeIdField = createField('employee_id', 'Employee ID');
    additionalFields.appendChild(companyNameField);
    additionalFields.appendChild(employeeIdField);
  }

  function createField(id, label) {
    const fieldWrapper = document.createElement('div');

    const fieldLabel = document.createElement('label');
    fieldLabel.setAttribute('for', id);
    fieldLabel.textContent = label;

    const fieldInput = document.createElement('input');
    fieldInput.setAttribute('type', 'text');
    fieldInput.setAttribute('id', id);
    fieldInput.setAttribute('name', id);
    fieldInput.required = true;

    fieldWrapper.appendChild(fieldLabel);
    fieldWrapper.appendChild(fieldInput);

    return fieldWrapper;
  }
});
