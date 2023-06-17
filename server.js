const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route to serve your index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define route for login and register pop-ups
app.get('/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'pop-ups.js'));
  });

  // Define route for login and register pop-ups
app.get('/join-to-create.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'join-to-create.html'));
  });
  // Define route for login and register pop-ups
app.get('/stories.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/stories.html'));
  });
  
// Endpoint to retrieve the Firebase configuration
app.get('/config', (req, res) => {
    console.log('Received request for /config'); // Add this log
    const firebaseConfig = {
        apiKey: "AIzaSyCZaHRO46F48RY27YAY4xBC-_ZtOy2Pjto",
        authDomain: "storycraft-78d71.firebaseapp.com",
        projectId: "storycraft-78d71",
        storageBucket: "storycraft-78d71.appspot.com",
        messagingSenderId: "790503326677",
        appId: "1:790503326677:web:a3ee598f0b933365c6335c",
        measurementId: "G-YHZ9BMEPFH"
    };
    console.log('Sending Firebase configuration:', firebaseConfig);
    res.json(firebaseConfig);
  });
  
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Add the required dependencies
const bodyParser = require('body-parser');

// Parse JSON request bodies
app.use(bodyParser.json());

// Define a new endpoint for form submission
app.post('/submitForm', (req, res) => {
  // Retrieve form data from the request body
  const formData = req.body;

  // Generate the prompt message using the form data
  const promptMessage = generatePromptMessage(formData);

  // Send the prompt message as the response
  res.send(promptMessage);
});

// Define the function to generate the prompt message
function generatePromptMessage(formData) {
  // Retrieve form values from the formData object
  const { childName, childAge, childGender, friendName, parentName, storySetting, storyStyle, storyLength, storyMoral, childInterest } = formData;

  // Generate the prompt message
  const promptMessage = `Write me a story for ${childName}, my ${childAge} year old ${childGender}. \n
    I want the story to be taking place in a ${storySetting} and be written in the style of ${storyStyle}. \n
    If possible include the following characters: ${childName} as the main hero, ${friendName} as the best friend or help, and ${parentName} as their parent or protector. \n
    Include some underlying messaging about ${storyMoral}. Keep in mind that my child is passionate about ${childInterest} right now. \n
    The story should be ${storyLength} length.\n`;

  return promptMessage;
}


