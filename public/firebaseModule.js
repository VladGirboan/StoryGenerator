
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // Fetch the Firebase configuration from the server
        fetch('/config')
            .then(response => {
                console.log("firebaseconfig json fetched");
                return response.json();
            })
            .then(firebaseConfig => {
                // Initialize Firebase with the fetched configuration
                console.log("trying to initialize the app");
                const app = firebase.initializeApp(firebaseConfig);
                console.log("firebase app initialised.");
                
            })
            .catch(error => {
                console.error('Error fetching Firebase configuration:', error);
            });