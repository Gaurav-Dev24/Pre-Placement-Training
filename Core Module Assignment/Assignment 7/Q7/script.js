document.addEventListener("DOMContentLoaded", function() {
    // Get form inputs
    const titleInput = document.getElementById("title");
    const imageInput = document.getElementById("image");
    const authorInput = document.getElementById("author");
    const categoryInput = document.getElementById("category");
    const storyInput = document.getElementById("story");
  
    // Get preview elements
    const previewTitle = document.getElementById("preview-title");
    const previewImage = document.getElementById("preview-image");
    const previewAuthor = document.getElementById("preview-author");
    const previewCategory = document.getElementById("preview-category");
    const previewStory = document.getElementById("preview-story");
  
    // Listen for input changes
    titleInput.addEventListener("input", updatePreview);
    imageInput.addEventListener("input", updatePreview);
    authorInput.addEventListener("input", updatePreview);
    categoryInput.addEventListener("input", updatePreview);
    storyInput.addEventListener("input", updatePreview);
  
    function updatePreview() {
      // Update preview with form input values
      previewTitle.textContent = titleInput.value;
      previewImage.src = imageInput.value;
      previewAuthor.textContent = "Written By " + authorInput.value;
      // previewCategory.textContent = "Category: " + categoryInput.value;
      previewStory.textContent = storyInput.value;
    }

    
  });
    