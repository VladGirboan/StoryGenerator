console.log("checking user");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");

  // Check the user's authentication status
  const loggedIn = getCookie('loggedIn') === 'true';
  console.log("got cookie");

  if (loggedIn) {
    // User is logged in, check if already on create.html
    console.log("User is logged in, check if already on create.html");
    if (window.location.pathname !== '/create.html') {
      // Not on create.html, redirect to create.html
      console.log("User is logged in, redirecting to create.html");
      window.location.href = "create.html";
    }
    console.log("User is logged in, on the correct page");
  } else {
    // User is not logged in, redirect to join-to-create.html
    console.log("User is not logged in, redirecting to join-to-create.html");
    window.location.href = "join-to-create.html";
  }
});

// Retrieve the cookie value
function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : '';
}
