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

// Check if user is logged in and get their data
auth.onAuthStateChanged((user) => {
    if (user) {
        const userId = user.uid;
        const userDocRef = firestore.collection("formData").doc(userId);

        userDocRef.get()
            .then((doc) => {
                if (doc.exists) {
                    const userData = doc.data();
                    document.getElementById('name').value = userData.name;
                    document.getElementById('designation').value = userData.designation || ''; // Assuming designation is stored in the data
                    document.getElementById('company-id').value = userData.companyId || ''; // Assuming companyId is stored in the data
                    document.getElementById('company-name').value = userData.companyName || ''; // Assuming companyName is stored in the data
                    document.getElementById('industry').value = userData.industry || ''; // Assuming industry is stored in the data
                    document.getElementById('mobile-number').value = userData.mobile;
                    document.getElementById('email').value = userData.email;
                } else {
                    console.log("No such document!");
                }
            })
            .catch((error) => {
                console.log("Error getting document:", error);
            });
    } else {
        console.log("User is not logged in");
    }
});
