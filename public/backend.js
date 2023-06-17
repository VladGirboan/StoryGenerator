// Get the form element
const form = document.getElementById('storyForm');

// Add an event listener for form submission
form.addEventListener('submit', handleSubmit);

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // Retrieve form values
    const childName = document.getElementById('childName').value || "TEST_PLACEHOLDER";
    const childAge = document.getElementById('childAge').value || "TEST_PLACEHOLDER";
    const childGender = document.getElementById('childGender').value || "TEST_PLACEHOLDER";
    const friendName = document.getElementById('friendName').value || "TEST_PLACEHOLDER";
    const parentName = document.getElementById('parentName').value || "TEST_PLACEHOLDER";
    const storySetting = document.getElementById('storySetting').value || "TEST_PLACEHOLDER";
    const storyStyle = document.getElementById('storyStyle').value || "TEST_PLACEHOLDER";
    const storyLength = document.getElementById('storyLength').value || "TEST_PLACEHOLDER";
    const storyMoral = document.getElementById('storyMoral').value || "TEST_PLACEHOLDER";
    const childInterest = document.getElementById('childInterest').value || "TEST_PLACEHOLDER";


    // Generate the prompt message
    const promptMessage = `Write me a story for ${childName}, my ${childAge} year old ${childGender}. \n
    I want the story to be taking place in a ${storySetting} and be written in the style of ${storyStyle}. \n
    If possible include the following characters: ${childName} as the main hero, ${friendName} as the best friend or help, and ${parentName} as their parrent or potector. \n
    Include some underlying messaging about ${storyMoral}. Keep in mind that my child is passionate about ${childInterest} right now. \n
    The story should be ${storyLength} length.\n`;

    // Display the prompt message
    const messageOutput = document.getElementById('storyOutput');
    messageOutput.textContent = promptMessage;

    return false; // Prevent form submission
}
