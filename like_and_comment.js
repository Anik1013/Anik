// Get references to the button and like count elements
const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');

// Initialize the like count
let currentLikes = 0;

// Function to update the like count display
function updateLikeCount() {
    likeCount.textContent = currentLikes;
}

// Function to handle the "like" button click event
function toggleLike() {
    if (likeButton.textContent === 'Like') {
        // User clicked to like the content
        currentLikes++;
        likeButton.textContent = 'Unlike';
    } else {
        // User clicked to unlike the content
        currentLikes--;
        likeButton.textContent = 'Like';
    }

    // Update the like count display
    updateLikeCount();
}

// Attach the toggleLike function to the button's click event
likeButton.addEventListener('click', toggleLike);

// Initial display of like count
updateLikeCount();

