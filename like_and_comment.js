const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');
const commentForm = document.getElementById('commentForm');
const commentInput = document.getElementById('comment');
const commentsSection = document.getElementById('comments');

// Initialize like count and comments array
let currentLikes = 0;
const comments = [];

// Function to update the like count display
function updateLikeCount() {
    likeCount.textContent = currentLikes;
}

// Function to add a new comment
function addComment(text) {
    const commentElement = document.createElement('div');
    commentElement.textContent = text;
    commentsSection.appendChild(commentElement);
}

// Function to handle the "like" button click event
function toggleLike() {
    if (likeButton.textContent === 'Like') {
        currentLikes++;
        likeButton.textContent = 'Unlike';
    } else {
        currentLikes--;
        likeButton.textContent = 'Like';
    }
    updateLikeCount();
}

// Function to handle comment submission
function handleCommentSubmit(event) {
    event.preventDefault();
    const commentText = commentInput.value;
    if (commentText.trim() !== '') {
        comments.push(commentText);
        addComment(commentText);
        commentInput.value = '';
    }
}

// Attach event listeners
likeButton.addEventListener('click', toggleLike);
commentForm.addEventListener('submit', handleCommentSubmit);

// Initial display of like count
updateLikeCount();
