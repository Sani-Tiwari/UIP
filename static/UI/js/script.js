function toggleMenu() {
    var selectElement = document.getElementById("toggleSelect");
    var selectedValue = selectElement.value;



    if (selectedValue === "image") {
        menu1.style.display = "block";
      } else if (selectedValue === "video") {
        menu2.style.display = "block";
      } else if (selectedValue === "text") {
        menu3.style.display = "block";
      }else if (selectedValue === "reel") {
        menu3.style.display = "block";
      }else if (selectedValue === "story") {
        menu3.style.display = "block";
      }
    }



function changeUploadType(uploadType) {
    var uploadButtonContainer = document.getElementById("uploadButtonContainer");
    var uploadButton = document.getElementById("uploadButton");
    var uploadButtonIcon = document.getElementById("uploadButtonIcon");

    // Clear previous upload type classes
    uploadButtonContainer.classList.remove("image-upload", "video-upload", "text-upload", "link-upload", "reel-upload", "story-upload");

    // Add class based on selected upload type
    uploadButtonContainer.classList.add(uploadType + "-upload");

    // Set button label and icon based on selected upload type
    if (uploadType === "image") {
        uploadButton.innerText = "Add Image";
        uploadButtonIcon.innerText = "image";
    } else if (uploadType === "video") {
        uploadButton.innerText = "Add Video";
        uploadButtonIcon.innerText = "video";
    } else if (uploadType === "text") {
        uploadButton.innerText = "Add Text";
        uploadButtonIcon.innerText = "text";

        
        

    } else if (uploadType === "link") {
        uploadButton.innerText = "Add Link";
        uploadButtonIcon.innerText = "link";
    } else if (uploadType === "reel") {
        uploadButton.innerText = "Add Reel";
        uploadButtonIcon.innerText = "reel";
    } else if (uploadType === "story") {
        uploadButton.innerText = "Add Story";
        uploadButtonIcon.innerText = "story";
    }
}


//  
// var currentUploadType = null; // Track the current upload type

// function changeUploadType(uploadType) {
//     var uploadButton = document.getElementById("uploadButton");

//     if (uploadType === "image") {
//         uploadButton.innerText = "Add Image";
//         uploadButton.removeEventListener("click", handleVideoUpload);
//         uploadButton.removeEventListener("click", handleTextUpload);
//         uploadButton.removeEventListener("click", handleLinkUpload);
//         // Add event listener to handle image upload
//         uploadButton.addEventListener("click", handleImageUpload);
//     } else if (uploadType === "video") {
//         uploadButton.innerText = "Add Video";
//         uploadButton.removeEventListener("click", handleImageUpload);
//         uploadButton.removeEventListener("click", handleTextUpload);
//         uploadButton.removeEventListener("click", handleLinkUpload);
//         // Add event listener to handle video upload
//         uploadButton.addEventListener("click", handleVideoUpload);
//     } else if (uploadType === "text") {
//         uploadButton.innerText = "Add Text";
//         uploadButton.removeEventListener("click", handleImageUpload);
//         uploadButton.removeEventListener("click", handleVideoUpload);
//         uploadButton.removeEventListener("click", handleLinkUpload);
//         // Add event listener to handle text upload
//         uploadButton.addEventListener("click", handleTextUpload);
//     } else if (uploadType === "link") {
//         uploadButton.innerText = "Add Link";
//         uploadButton.removeEventListener("click", handleImageUpload);
//         uploadButton.removeEventListener("click", handleVideoUpload);
//         uploadButton.removeEventListener("click", handleTextUpload);
//         // Add event listener to handle link upload
//         uploadButton.addEventListener("click", handleLinkUpload);
//     }

//     currentUploadType = uploadType;
// }

// function handleImageUpload() {
//     var fileInput = document.createElement("input");
//     fileInput.type = "file";
//     fileInput.accept = "image/*";
//     fileInput.addEventListener("change", uploadFile);
//     fileInput.click();
// }

// function handleVideoUpload() {
//     var fileInput = document.createElement("input");
//     fileInput.type = "file";
//     fileInput.accept = "video/*";
//     fileInput.addEventListener("change", uploadFile);
//     fileInput.click();
// }

// function handleTextUpload() {
//     var fileInput = document.createElement("input");
//     fileInput.type = "file";
//     fileInput.accept = ".txt";
//     fileInput.addEventListener("change", uploadFile);
//     fileInput.click();
// }

// function handleLinkUpload() {
//     var link = prompt("Enter the link URL:");
//     // Handle link upload logic here
// }

// function uploadFile(event) {
//     var files = event.target.files;
//     // Handle file upload logic based on currentUploadType here
// }

//upload 1st
 
  



// upload image
$(document).ready(function() {
    $("#uploadButton").click(function() {
      $("#imageInput").trigger("click");
    });
  
    $("#imageInput").change(function(e) {
      var files = e.target.files;
  
      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var reader = new FileReader();
        // document.getElementById("abc").style.display="flex";
        reader.onload = function(e) {
          var imageSrc = e.target.result;
          
    
          var imageTemplate = 
          
          '<!--content-->'+
          '<div class="row mt-2">'+
              '<div class="col-auto ms-3" style="width: 18.75%;">'+
                  '<div class="row">'+
                      '<div class="col-4 mt-2">'+
                          '<img src="'+imageSrc+'" class="rounded" style="width: 93px;">'+
                      '</div>' +
                      '<div class="col-8 mt-4 ps-3">'+
                          '<h6>Thumbnail Name</h6>'+
                          '<div class="row">'+
                              '<div class="col">'+
                                  '<div class="progress mt-1" style="height:5px;width: 70px;">'+
                                      '<div class="progress-bar bg-success" style="width:100%"></div>'+
                                  '</div>'+
                              '</div>'+
                              '<div class="col">'+
                                  '<h6 style="font-size: 10px !important;">'+
                                  '<span class="material-symbols-outlined" style="color: green; font-size: 8px !important;">verified</span>100%</h6>'+
                              '</div>'+
                          '</div>'+
                      '</div>'+
                  '</div>'+
              '</div>'+
              '<div class="col-auto" style="width: 18.75%;">'+
                  '<div class="row">'+
                      '<div class="col-12"  style="border: 1px solid gray;border-radius:5px; ">' +  
                          '<textarea class="form-control" rows="3" id="comment" name="text" style="font-size: 9px;resize: none;border-radius:5px 5px 0 0;"></textarea>' +                                                 
                          '<div class="mt-1 float-end pe-1">'+
                              '<button class="btn text-primary" type="button">'+
                              '<span class="material-symbols-outlined" id="printpage">print</span></button>'+
                              '<button class="btn" type="button"><span class="material-symbols-outlined" id="saveCaption">save</span></button>'+
                              '<button class="btn" type="button"><span class="material-symbols-outlined">title</span></button>'+
                              '<button class="btn" type="button"><span class="material-symbols-outlined">mood</span></button>'+
                          '</div>'+
                      '</div>'+
                  '</div>'+
              '</div>'+
              '<div class="col-auto ms-1" style="width: 18.75%;">'+
                  '<div class="row">'+
                      '<div class="col-12"  style="border: 1px solid gray;border-radius:5px; ">'+   
                          '<textarea class="form-control" rows="3" id="comment" name="text" style="font-size: 9px;resize: none;border-radius:5px 5px 0 0;"></textarea>'+                                                  
                          '<div class="mt-1 float-end pe-1">'+
                              '<button class="btn text-primary" type="button"><span class="material-symbols-outlined" id="printpage">print</span></button>'+
                              '<button class="btn" type="button"><span class="material-symbols-outlined" id="saveCaption">save</span></button>'+
                          '</div>'+
                      '</div>'+
                  '</div>'+
              '</div>'+
              '<div class="col-auto ms-1" style="width: 13.7%;">'+
                  '<div class="mt-4">'+
                      '<div class="dropdown dropdown-menu-end">'+
                          '<button type="button" class="btn btn-outline-secondary dropdown-toggle px-2" style="font-weight: 600;" data-bs-toggle="dropdown">Scheduling options</button>'+
                          '<ul class="dropdown-menu">'+
                            '<li><a class="dropdown-item" href="#">Public</a></li>'+
                            '<li><a class="dropdown-item" href="#">Private</a></li>'+
                          '</ul>'+
                        '</div>'+
                  '</div>'+
              '</div>'+
              '<div class="col-auto" style="width: 28%;">'+
                  '<div>'+
                      '<form action="" style="height:100% !important;">'+
                          '<select name="multiselect" id="multiselect1" multiple>'+
                              '<option value="1"><i class="fa-brands fa-instagram"></i>Instagram</option>'+
                              '<option value="2"><i class="fa-brands fa-facebook"></i>Face Book</option>'+
                              '<option value="3"><i class="fa-brands fa-twitter"></i>Twitter</option>'+
                              '<option value="4"><i class="fa-brands fa-tiktok"></i>TikTok</option>'+
                          '</select>'+
                      '</form>'+
                  '</div>'+
              '</div>'+
          '</div>';
     
    
          $("#preview").append(imageTemplate);
          $("#uploadButtonContainer").remove();
          
        };
  
        reader.readAsDataURL(file);
        
             

      }
      document.getElementById("abc").style.display="flex";
  
      $("#uploadButtonContainer").remove();
    //   $("#uploadLogo").remove();
    });
  });


//   
function uploadImage2() {
    var input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.style.display = "none";

    input.addEventListener("change", function() {
      var file = input.files[0];
      var reader = new FileReader();

      reader.onload = function(e) {
        var imageSrc = e.target.result;
        // createTemplate(imageSrc);
        var imageTemplate = 
        '<!--content-->'+
        '<div class="row mt-2">'+
            '<div class="col-auto ms-3" style="width: 18.75%;">'+
                '<div class="row">'+
                    '<div class="col-4 mt-2">'+
                        '<img src="'+imageSrc+'" class="rounded" style="width: 93px;">'+
                    '</div>' +
                    '<div class="col-8 mt-4 ps-3">'+
                        '<h6>Thumbnail Name</h6>'+
                        '<div class="row">'+
                            '<div class="col">'+
                                '<div class="progress mt-1" style="height:5px;width: 70px;">'+
                                    '<div class="progress-bar bg-success" style="width:100%"></div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="col">'+
                                '<h6 style="font-size: 10px !important;">'+
                                '<span class="material-symbols-outlined" style="color: green; font-size: 8px !important;">verified</span>100%</h6>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="col-auto" style="width: 18.75%;">'+
                '<div class="row">'+
                    '<div class="col-12"  style="border: 1px solid gray;border-radius:5px; ">' +  
                        '<textarea class="form-control" rows="3" id="comment" name="text" style="font-size: 9px;resize: none;border-radius:5px 5px 0 0;"></textarea>' +                                                 
                        '<div class="mt-1 float-end pe-1">'+
                            '<button class="btn text-primary" type="button">'+
                            '<span class="material-symbols-outlined" id="printpage">print</span></button>'+
                            '<button class="btn" type="button"><span class="material-symbols-outlined" id="saveCaption">save</span></button>'+
                            '<button class="btn" type="button"><span class="material-symbols-outlined">title</span></button>'+
                            '<button class="btn" type="button"><span class="material-symbols-outlined">mood</span></button>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="col-auto ms-1" style="width: 18.75%;">'+
                '<div class="row">'+
                    '<div class="col-12"  style="border: 1px solid gray;border-radius:5px; ">'+   
                        '<textarea class="form-control" rows="3" id="comment" name="text" style="font-size: 9px;resize: none;border-radius:5px 5px 0 0;"></textarea>'+                                                  
                        '<div class="mt-1 float-end pe-1">'+
                            '<button class="btn text-primary" type="button"><span class="material-symbols-outlined" id="printpage">print</span></button>'+
                            '<button class="btn" type="button"><span class="material-symbols-outlined" id="saveCaption">save</span></button>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'+
            '<div class="col-auto ms-1" style="width: 13.7%;">'+
                '<div class="mt-4">'+
                    '<div class="dropdown dropdown-menu-end">'+
                        '<button type="button" class="btn btn-outline-secondary dropdown-toggle px-2" style="font-weight: 600;" data-bs-toggle="dropdown">Scheduling options</button>'+
                        '<ul class="dropdown-menu">'+
                          '<li><a class="dropdown-item" href="#">Public</a></li>'+
                          '<li><a class="dropdown-item" href="#">Private</a></li>'+
                        '</ul>'+
                      '</div>'+
                '</div>'+
            '</div>'+
            '<div class="col-auto" style="width: 28%;">'+
                '<div>'+
                    '<form action="" style="height:100% !important;">'+
                        '<select name="multiselect" id="multiselect1" multiple>'+
                            '<option value="1"><i class="fa-brands fa-instagram"></i>Instagram</option>'+
                            '<option value="2"><i class="fa-brands fa-facebook"></i>Face Book</option>'+
                            '<option value="3"><i class="fa-brands fa-twitter"></i>Twitter</option>'+
                            '<option value="4"><i class="fa-brands fa-tiktok"></i>TikTok</option>'+
                        '</select>'+
                    '</form>'+
                '</div>'+
            '</div>'+
        '</div>';
     
    
          $("#preview").append(imageTemplate);
          
      };

      reader.readAsDataURL(file);
    });
    $("#uploadButtonContainer").remove();

    // document.body.appendChild(input);
    input.click();
  }

  

  
new MultiSelectTag('multiselect1')  // id
new MultiSelectTag('multiselect2')  // id
new MultiSelectTag('multiselect3')  // id
new MultiSelectTag('multiselect4')  // id
new MultiSelectTag('multiselect5')  // id
function MultiSelectTag (el, customs = {shadow: false, rounded:true}) {
    var element = null
    var options = null
    var customSelectContainer = null
    var wrapper = null
    var btnContainer = null
    var body = null
    var inputContainer = null
    var inputBody = null
    var input = null
    var button = null
    var drawer = null
    var ul = null
    var domParser = new DOMParser()
    init()

    function init() {
        element = document.getElementById(el)
        createElements()
        initOptions()
        enableItemSelection()
        setValues(false)

        button.addEventListener('click', () => {
            if(drawer.classList.contains('hidden')) {
                initOptions()
                enableItemSelection()
                drawer.classList.remove('hidden')
                input.focus()
            }
        })

        input.addEventListener('keyup', (e) => {
                initOptions(e.target.value)
                enableItemSelection()
        })

        input.addEventListener('keydown', (e) => {
            if(e.key === 'Backspace' && !e.target.value && inputContainer.childElementCount > 1) {
                const child = body.children[inputContainer.childElementCount - 2].firstChild
                const option = options.find((op) => op.value == child.dataset.value)
                option.selected = false
                removeTag(child.dataset.value)
                setValues()
            }
            
        })
        
        window.addEventListener('click', (e) => {   
            if (!customSelectContainer.contains(e.target)){
                drawer.classList.add('hidden')
            }
        });

    }

    function createElements() {
        // Create custom elements
        options = getOptions();
        element.classList.add('hidden')
        
        // .multi-select-tag
        customSelectContainer = document.createElement('div')
        customSelectContainer.classList.add('mult-select-tag')

        // .container
        wrapper = document.createElement('div')
        wrapper.classList.add('wrapper')

        // body
        body = document.createElement('div')
        body.classList.add('body')
        if(customs.shadow) {
            body.classList.add('shadow')
        }
        if(customs.rounded) {
            body.classList.add('rounded')
        }
        
        // .input-container
        inputContainer = document.createElement('div')
        inputContainer.classList.add('input-container')

        // input
        input = document.createElement('input')
        input.classList.add('input')
        input.placeholder = `${customs.placeholder || 'Search...'}`

        inputBody = document.createElement('inputBody')
        inputBody.classList.add('input-body')
        inputBody.append(input)

        body.append(inputContainer)

        // .btn-container
        btnContainer = document.createElement('div')
        btnContainer.classList.add('btn-container')

        // button
        button = document.createElement('button')
        button.type = 'button'
        btnContainer.append(button)

        const icon = domParser.parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 21 6 15"></polyline></svg>`, 'image/svg+xml').documentElement
        button.append(icon)


        body.append(btnContainer)
        wrapper.append(body)

        drawer = document.createElement('div');
        drawer.classList.add(...['drawer', 'hidden'])
        if(customs.shadow) {
            drawer.classList.add('shadow')
        }
        if(customs.rounded) {
            drawer.classList.add('rounded')
        }
        drawer.append(inputBody)
        ul = document.createElement('ul');
        
        drawer.appendChild(ul)
    
        customSelectContainer.appendChild(wrapper)
        customSelectContainer.appendChild(drawer)

        // Place TailwindTagSelection after the element
        if (element.nextSibling) {
            element.parentNode.insertBefore(customSelectContainer, element.nextSibling)
        }
        else {
            element.parentNode.appendChild(customSelectContainer);
        }
    }

    function initOptions(val = null) {
        ul.innerHTML = ''
        for (var option of options) {
            if (option.selected) {
                !isTagSelected(option.value) && createTag(option)
            }
            else {
                const li = document.createElement('li')
                li.innerHTML = option.label
                li.dataset.value = option.value
                
                // For search
                if(val && option.label.toLowerCase().startsWith(val.toLowerCase())) {
                    ul.appendChild(li)
                }
                else if(!val) {
                    ul.appendChild(li)
                }
            }
        }
    }

    function createTag(option) {
        // Create and show selected item as tag
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item-container');
        const itemLabel = document.createElement('div');
        itemLabel.classList.add('item-label');
        itemLabel.innerHTML = option.label
        itemLabel.dataset.value = option.value
        const itemClose = new DOMParser().parseFromString(`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="item-close-svg">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>`, 'image/svg+xml').documentElement
 
        itemClose.addEventListener('click', (e) => {
            const unselectOption = options.find((op) => op.value == option.value)
            unselectOption.selected = false
            removeTag(option.value)
            initOptions()
            setValues()
        })
    
        itemDiv.appendChild(itemLabel)
        itemDiv.appendChild(itemClose)
        inputContainer.append(itemDiv)
    }

    function enableItemSelection() {
        // Add click listener to the list items
        for(var li of ul.children) {
            li.addEventListener('click', (e) => {
                options.find((o) => o.value == e.target.dataset.value).selected = true
                input.value = null
                initOptions()
                setValues()
                input.focus()
            })
        }
    }

    function isTagSelected(val) {
        // If the item is already selected
        for(var child of inputContainer.children) {
            if(!child.classList.contains('input-body') && child.firstChild.dataset.value == val) {
                return true
            }
        }
        return false
    }
    function removeTag(val) {
        // Remove selected item
        for(var child of inputContainer.children) {
            if(!child.classList.contains('input-body') && child.firstChild.dataset.value == val) {
                inputContainer.removeChild(child)
            }
        }
    }
    function setValues(fireEvent=true) {
        // Update element final values
        selected_values = []
        for(var i = 0; i < options.length; i++) {
            element.options[i].selected = options[i].selected
            if(options[i].selected) {
                selected_values.push({label: options[i].label, value: options[i].value})
            }
        }
        if (fireEvent && customs.hasOwnProperty('onChange')) {
            customs.onChange(selected_values)
        }
    }
    function getOptions() {
        // Map element options
        return [...element.options].map((op) => {
            return {
                value: op.value,
                label: op.label,
                selected: op.selected,
            }
        })
    }
}
