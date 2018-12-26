// Create a GItHub object
const gitHub = new GitHub();
// Create a UI object
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Event listener
searchUser.addEventListener('keyup', e => {
  // Get input text
  const userText = e.target.value.trim();
  // Validate input
  if (userText) {
    gitHub.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert
          ui.showAlert('User not found', 'alert alert-danger');
          // Clear profile
          ui.clearProfile();
        } else {
          // Clear alert if user exist
          ui.clearAlert();
          // Show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      });
  } else {
    // Clear profile
    ui.clearProfile();
  }
})