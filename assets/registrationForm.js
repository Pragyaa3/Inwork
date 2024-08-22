// Initialize Firebase with your configuration
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
  const firestore = firebase.firestore();
  const auth = firebase.auth();
  
  // Variable to access database collection
  const db = firestore.collection("formData");
  
  document.addEventListener('DOMContentLoaded', function () {
    const roleSelect = document.getElementById('role');
    const additionalFields = document.getElementById('additional-fields');
    const form = document.getElementById('registration-form');
  
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
        data['company_name'] = document.getElementById('company_name').value;
      } else if (roleSelect.value === 'client') {
        data['company_id'] = document.getElementById('company_id').value;
        data['employee_id'] = document.getElementById('employee_id').value;
      }
  
      // Get additional field values
      const company_id = document.getElementById('company_id') ? document.getElementById('company_id').value : null;
      const company_name = document.getElementById('company_name') ? document.getElementById('company_name').value : null;
      const employee_id = document.getElementById('employee_id') ? document.getElementById('employee_id').value : null;
  
      // Validate form fields
      if (!title || !role || !name || !email || !password || !confirmPassword || !countryCode || !mobile || !gender || 
          (role === 'admin' && (!company_id || !company_name)) || 
          (role === 'client' && (!company_id || !employee_id))) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Check if passwords match
      if (password !== confirmPassword) {
        alert("Passwords do not match. Please re-enter.");
        return;
      }
  
      // Sign up the user with email and password
      auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed up:", user);
  
          // Save Form Data To Firebase
          db.doc(user.uid).set(data)
            .then(() => {
              console.log("Data saved!");
              alert("Data Saved!");
              window.location.href = "../../index.html"; // Redirect to index.html
            })
            .catch((error) => {
              console.log("Error saving data:", error);
            });
        })
        .catch((error) => {
          console.error("Error signing up:", error);
          alert("Error signing up. Please try again.");
        });
    });
  
    function addAdminFields() {
      const companyIdField = createField('company_id', 'Company ID');
      const companyNameField = createField('company_name', 'Company Name');
      additionalFields.appendChild(companyIdField);
      additionalFields.appendChild(companyNameField);
    }
  
    function addClientFields() {
      const companyIdField = createField('company_id', 'Company ID');
      const employeeIdField = createField('employee_id', 'Employee ID');
      additionalFields.appendChild(companyIdField);
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
  
  // Main JavaScript functionality
  document.addEventListener('DOMContentLoaded', function () {
    // Get Submit Form
    let submitButton = document.getElementById('submit');
  
    // Create Event Listener To Allow Form Submission
    submitButton.addEventListener("click", (e) => {
      e.preventDefault();
  
      // Get Form Values
      let title = document.querySelector('input[name="title"]:checked') ? document.querySelector('input[name="title"]:checked').value : null;
      let role = document.getElementById('role').value;
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;
      let confirmPassword = document.getElementById('confirm_password').value;
      let countryCode = document.getElementById('country_code').value;
      let mobile = document.getElementById('mobile').value;
      let gender = document.getElementById('gender').value;
  
      // Get additional field values
      const company_id = document.getElementById('company_id') ? document.getElementById('company_id').value : null;
      const company_name = document.getElementById('company_name') ? document.getElementById('company_name').value : null;
      const employee_id = document.getElementById('employee_id') ? document.getElementById('employee_id').value : null;
  
      // Validate form fields
      if (!title || !role || !name || !email || !password || !confirmPassword || !countryCode || !mobile || !gender || 
          (role === 'admin' && (!company_id || !company_name)) || 
          (role === 'client' && (!company_id || !employee_id))) {
        alert("Please fill in all fields.");
        return;
      }
  
      // Check if passwords match
      if (password !== confirmPassword) {
        alert("Passwords do not match. Please re-enter.");
        return;
      }
  
      // Sign up the user with email and password
      auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed up:", user);
  
          // Save Form Data To Firebase
          const data = {
            title: title,
            role: role,
            name: name,
            email: email,
            password: password,
            countryCode: countryCode,
            mobile: mobile,
            gender: gender,
            ...(role === 'admin' && { company_id: company_id, company_name: company_name }),
            ...(role === 'client' && { company_id: company_id, employee_id: employee_id })
          };
  
          db.doc(user.uid).set(data)
            .then(() => {
              console.log("Data saved!");
              alert("Data Saved!");
              window.location.href = "../../index.html"; // Redirect to index.html
            })
            .catch((error) => {
              console.log("Error saving data:", error);
            });
        })
        .catch((error) => {
          console.error("Error signing up:", error);
          alert("Error signing up. Please try again.");
        });
    });
  });
  