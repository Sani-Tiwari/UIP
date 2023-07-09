var selectedFile = null;
var fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.style.display = 'none';

document.body.appendChild(fileInput);

document.getElementById('imageButton').addEventListener('click', function() {
  // Trigger the file selection dialog
  fileInput.click();
});

fileInput.addEventListener('change', function(event) {
  selectedFile = event.target.files[0];

  // Check if a file is selected
  if (selectedFile) {
    var reader = new FileReader();

    // Read the selected file as a data URL
    reader.readAsDataURL(selectedFile);

    reader.onload = function() {
      var imageContainer = document.getElementById('imageContainer');
      var imageContainer2 = document.getElementById('imageContainer2');
      
      // Create <img> elements and set their sources to the uploaded image data URL
      var imageElement1 = document.createElement('img');
      var imageElement2 = document.createElement('img');
      imageElement1.src = reader.result;
      imageElement2.src = reader.result;
      imageElement1.className = 'image-preview';
      imageElement2.className = 'image-preview';


      imageElement1.style.width = '200px'; // Adjust the width as needed
      imageElement1.style.height = '200px'; // Adjust the height as needed
      imageElement2.style.width = '200px'; // Adjust the width as needed
      imageElement2.style.height = '200px'; // Adjust the height as needed


      // Clear previous image previews
      imageContainer.innerHTML = '';
      imageContainer2.innerHTML = '';

      // Append the image elements to the respective columns
      imageContainer.appendChild(imageElement1);
      imageContainer2.appendChild(imageElement2);
    };
  }
});



























const imageCheckboxes = document.querySelectorAll(".image-checkbox");
const selectedImagesContainer = document.getElementById("imageContainer");


imageCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const checkedImages = Array.from(imageCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map(
        (checkbox) =>
          checkbox.closest(".card").querySelector(".card-img-top").src
      );

    displaySelectedImages(checkedImages);
  });
});

function displaySelectedImages(checkedImages) {
  selectedImagesContainer.innerHTML = "";

  checkedImages.forEach((image) => {
    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.className = "selected-image m-1";
    imgElement.style.width = "200px";
    imgElement.style.height = "200px";

    selectedImagesContainer.appendChild(imgElement);
  });

  // Remove previously selected images
  const unselectedImages = Array.from(selectedImagesContainer.children).filter(
    (child) => !checkedImages.includes(child.src)
  );
  unselectedImages.forEach((image) => image.remove());
}




// caption n hashtag
function redirectText() {
  var inputText1 = document.getElementById("textareaInput").value;
  var inputText2 = document.getElementById("hashtagTextarea").value;
  document.getElementById("outputTextField").value = inputText1 + "\n" + inputText2;
}











// yaha icon javascript
function openFacebookTemplate() {
  
  var facebookTemplate = document.getElementById("facebook-template");
  var instagramTemplate = document.getElementById("instagram-template");
  var twitterTemplate = document.getElementById("twitter-template");

  facebookTemplate.style.display = "block";
  instagramTemplate.style.display = "none";
  twitterTemplate.style.display = "none";
 
}

function openInstagramTemplate() {
  var facebookTemplate = document.getElementById("facebook-template");
  var instagramTemplate = document.getElementById("instagram-template");
  var twitterTemplate = document.getElementById("twitter-template");

  facebookTemplate.style.display = "none";
  instagramTemplate.style.display = "block";
  twitterTemplate.style.display = "none";
}

function openTwitterTemplate() {
  var facebookTemplate = document.getElementById("facebook-template");
  var instagramTemplate = document.getElementById("instagram-template");
  var twitterTemplate = document.getElementById("twitter-template");

  facebookTemplate.style.display = "none";
  instagramTemplate.style.display = "none";
  twitterTemplate.style.display = "block";
}

// ye hamara direct image redirect

// Function to handle checkbox selection
function handleCheckboxSelection() {
  const checkboxes = document.getElementsByClassName("image-checkbox");
  const selectedImageElement = document.getElementById("selectedImage");
  const selectedCaptionElement = document.getElementById("selectedCaption");
  const selectedHashtagsElement = document.getElementById("selectedHashtags");

  // Add event listeners to all checkboxes
  Array.from(checkboxes).forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        // Get the selected image source and caption
        const imageSrc =
          this.parentNode.parentNode.parentNode.getElementsByClassName(
            "image-card"
          )[0].src;
        const caption =
          this.parentNode.parentNode.getElementsByClassName("card-title")[0]
            .innerText;

        // Display the selected image, caption, and hashtags in the Facebook template
        selectedImageElement.src = imageSrc;
        selectedCaptionElement.innerText = caption;
        selectedHashtagsElement.innerText = getSelectedHashtags();
      }
    });
  });
}

// Function to get the selected hashtags
function getSelectedHashtags() {
  const hashtagsTextarea = document.getElementById("hashtagTextarea");
  const hashtags = hashtagsTextarea.value.split("\n");
  const selectedHashtags = [];

  // Filter and format selected hashtags
  for (let i = 0; i < hashtags.length; i++) {
    if (hashtags[i].trim() !== "") {
      selectedHashtags.push("#" + hashtags[i].trim());
    }
  }

  return selectedHashtags.join(" ");
}

// Call the handleCheckboxSelection function to set up the event listeners
handleCheckboxSelection();


      function chooseFile() {
          var fileInput = document.getElementById('file-input');
          fileInput.click();
          fileInput.addEventListener('change', validateFileType);
      }

      function validateFileType(event) {
          var fileInput = event.target;
          var files = fileInput.files;
          var allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/avi', 'video/mov'];

          for (var i = 0; i < files.length; i++) {
              var file = files[i];
              if (!allowedTypes.includes(file.type)) {
                  alert('Invalid file type. Please select an image or video file.');
                  fileInput.value = ''; // Reset the file input
                  return;
              }
          }

          // Submit the form
          fileInput.removeEventListener('change', validateFileType);
          fileInput.closest('form').submit();
      }
  
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const applyButton = document.getElementById('applyBtn');
  
    radioButtons.forEach(function(radioButton) {
      radioButton.addEventListener('click', function() {
        applyButton.click(); // Trigger the click event on the hidden Apply button
      });
    });
  

