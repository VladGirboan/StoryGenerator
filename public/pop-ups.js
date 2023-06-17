
        document.addEventListener("DOMContentLoaded", function () {
            // Get the register link element
            var registerLink = document.getElementById("registerLink");

            // Add a click event listener to the register link
            registerLink.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent the default link behavior

                // Create the modal overlay element
                var overlay = document.createElement("div");
                overlay.className = "modal-overlay";

                // Create the modal content container
                var modal = document.createElement("div");
                modal.className = "modal-content";

                // Load the register.html into the modal content container
                modal.innerHTML = '<object type="text/html" data="register.html"></object>';

                // Append the modal content container to the overlay
                overlay.appendChild(modal);

                // Append the overlay to the document body
                document.body.appendChild(overlay);

                // Listen for custom events sent from the modal
                window.addEventListener("message", function (event) {
                    if (event.data === "closeModal") {
                        // Remove the modal overlay element from the document body
                        document.body.removeChild(overlay);
                    }
                });
            });

            // Get the login link element
            var loginLink = document.getElementById("loginLink");

            // Add a click event listener to the login link
            loginLink.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent the default link behavior

                // Create the modal overlay element
                var overlay = document.createElement("div");
                overlay.className = "modal-overlay";

                // Create the modal content container
                var modal = document.createElement("div");
                modal.className = "modal-content";

                // Load the login.html into the modal content container
                modal.innerHTML = '<object type="text/html" data="login.html"></object>';

                // Append the modal content container to the overlay
                overlay.appendChild(modal);

                // Append the overlay to the document body
                document.body.appendChild(overlay);

                // Listen for custom events sent from the modal
                window.addEventListener("message", function (event) {
                    if (event.data === "closeModal") {
                        // Remove the modal overlay element from the document body
                        document.body.removeChild(overlay);
                    }
                });
            });
        });
