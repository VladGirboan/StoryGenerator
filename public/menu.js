// Get a reference to the "Create Story" link
var createStoryLink = document.getElementById("createStoryLink");
console.log("Got link");

// Add a click event listener
createStoryLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default link behavior

  console.log("Click event triggered");

  // Check the user's authentication status
  const loggedIn = getCookie('loggedIn') === 'true';

  if (loggedIn) {
    // User is logged in, redirect to create.html
    console.log("User is logged in");
    window.location.href = "create.html";
  } else {
    // User is not logged in, redirect to join-to-create.html
    console.log("User is not logged in");
    window.location.href = "join-to-create.html";
  }
});

// Retrieve the cookie value
function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : '';
}

// Check the user's authentication status
const loggedIn = getCookie('loggedIn') === 'true';

if (loggedIn) {
  // User is logged in, hide "Register" and "Login" buttons
  console.log("User is logged in, hide 'Register' and 'Login' buttons");
  document.getElementById('registerLink').style.display = 'none';
  document.getElementById('loginLink').style.display = 'none';
} else {
  // User is not logged in, hide "My Account" button
  console.log("User is not logged in, hide 'My Account' button");
  document.getElementById('accountLink').style.display = 'none';
}
