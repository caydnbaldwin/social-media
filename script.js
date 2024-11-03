// Select necessary elements
const postButton = document.querySelector('.post-btn');
const postInput = document.querySelector('.post-creator textarea');
const feed = document.querySelector('.feed');

console.log('JavaScript file is loaded'); // Check if the file is loaded

// Function to create a new post
function createPost(content) {
    console.log('Creating post:', content); // Check if function is called

    // Create article element
    const post = document.createElement('article');
    post.classList.add('post');

    // Set the inner HTML of the new post
    post.innerHTML = `
        <div class="post-header">
            <img src="assets/headshot.jpg" alt="Profile Picture" class="profile-pic-small">
            <div class="post-user-info">
                <h3>Your Name</h3>
                <p>Just now</p>
            </div>
        </div>
        <div class="post-content">
            <p>${content}</p>
        </div>
        <div class="post-footer">
            <button class="like-btn"><i class="fas fa-thumbs-up"></i> Like</button>
            <button class="comment-btn"><i class="fas fa-comment"></i> Comment</button>
            <button class="share-btn"><i class="fas fa-share"></i> Share</button>
        </div>
    `;

    // Insert the new post at the beginning of the feed
    feed.prepend(post);
}

// Add event listener for post button
postButton.addEventListener('click', () => {
    console.log('Post button clicked'); // Check if button click is detected
    const content = postInput.value.trim(); // Get text area content and remove extra spaces

    if (content) { // Only post if there's content
        createPost(content); // Create and add the post
        postInput.value = ''; // Clear the text area
    } else {
        console.log('No content to post'); // Check if content is empty
    }
});

// Select necessary elements for the modal
const profileModal = document.getElementById('profile-modal');
const closeBtn = document.querySelector('.close-btn');
const profileLink = document.querySelector('nav ul li:nth-child(2) a'); // Adjust index for "Profile"

// Function to open the profile modal
profileLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor click behavior
    profileModal.style.display = 'block'; // Show the modal
});

// Function to close the profile modal
closeBtn.addEventListener('click', () => {
    profileModal.style.display = 'none'; // Hide the modal
});

// Close modal when clicking outside of modal content
window.addEventListener('click', (event) => {
    if (event.target === profileModal) {
        profileModal.style.display = 'none'; // Hide the modal
    }
});

// Select necessary elements
const messageButton = document.querySelector('nav ul li:nth-child(3) a'); // Messages menu item
const messageModal = document.getElementById('messageModal');
const closeMessageModal = document.getElementById('closeMessageModal');

// Show message modal
messageButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    messageModal.style.display = 'block'; // Show modal
});

// Close message modal
closeMessageModal.addEventListener('click', () => {
    messageModal.style.display = 'none'; // Hide modal
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === messageModal) {
        messageModal.style.display = 'none'; // Hide modal if clicked outside
    }
});

// Select necessary elements
const notificationsButton = document.querySelector('nav ul li:nth-child(4) a'); // Notifications menu item
const notificationsModal = document.getElementById('notificationsModal');
const closeNotificationsModal = document.getElementById('closeNotificationsModal');

// Show notifications modal
notificationsButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    notificationsModal.style.display = 'block'; // Show modal
});

// Close notifications modal
closeNotificationsModal.addEventListener('click', () => {
    notificationsModal.style.display = 'none'; // Hide modal
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === notificationsModal) {
        notificationsModal.style.display = 'none'; // Hide modal if clicked outside
    }
});

// Function to remove notification
function removeNotification(element) {
    const notificationItem = element.parentElement; // Get the notification item
    notificationItem.remove(); // Remove the notification item from the DOM
}