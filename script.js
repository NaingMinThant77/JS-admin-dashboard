// Select all anchor tags with the class "list-group-item"
const aShowTags = document.querySelectorAll(".list-group-item");

// Event handler for anchor tag clicks
const handleChange = (event) => {
    // Get the target tab id from the href attribute
    const clickTabId = event.target.getAttribute('href');
    // // Toggle content visibility based on the selected tab
    // console.log(clickTabId)
    toggleContentVisibility(clickTabId);
};

// Function to toggle content visibility based on the selected tab
const toggleContentVisibility = (selectedTabId) => {
    // Hide all content containers
    const contentContainers = document.querySelectorAll('.contentContainer');
    contentContainers.forEach(container => {
        container.classList.remove('show');
    });

    // Show the selected content container
    const selectedContentContainer = document.querySelectorAll(selectedTabId);
    selectedContentContainer.forEach((selectedContentContainers) => {
        selectedContentContainers.classList.add("show");
    })
    // selectedContentContainer.classList.add('show');
    // console.log(selectedTabId)
};

// Show the first anchor (dashboard) content when the page loads
toggleContentVisibility("Dashboard");

// Add click event listeners to all anchor tags
aShowTags.forEach(aShowTags => {
    aShowTags.addEventListener("click", handleChange);
});

// animation day-night toggle

// Get the theme toggle button and body element
const themeToggleBtn = document.getElementById('themeToggle');
const themeBody = document.getElementById('themeBody');

// Add a click event listener to the theme toggle button
themeToggleBtn.addEventListener('click', toggleTheme);

// Function to toggle between day and night modes
function toggleTheme() {
  // Toggle the 'night' class on the body element
  themeBody.classList.toggle('night');

  // Check if the 'night' class is present to determine the current mode
  const isNightMode = themeBody.classList.contains('night');

  // Change the button icon based on the current mode
  themeToggleBtn.innerHTML = isNightMode ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

// alert info
const alertaTag = document.querySelector(".alertA");
const alertDiv = document.querySelector(".alertInfo");

const openToastAlert = () => {
    // alertDiv.innerHTML = "";
    const toastAlertDiv = document.createElement("div");
    toastAlertDiv.append("You are successfully log out");
    toastAlertDiv.classList.add("toastAlert");
    alertDiv.append(toastAlertDiv);
    toastAlertDiv.style.bottom = `-${toastAlertDiv.offsetHeight}px`;

    setTimeout(() => {
        toastAlertDiv.style.bottom = `0px`;
    }, 100);

    setTimeout(() => {
        // localStorage.setItem("accepted", "1")
        toastAlertDiv.style.bottom = `-${toastAlertDiv.offsetHeight}px`;
    }, 2000);
};

alertaTag.addEventListener("click", openToastAlert);

// window.localStorage("load", () => {
//     const accepted =  localStorage.getItem("accepted");
//     if (accepted !== "1") {
//         openToastAlert();
//     }
// } )


// Sort


