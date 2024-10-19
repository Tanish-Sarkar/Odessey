let openIcon = document.querySelector('.navbar--icon');
    let menu = document.querySelector('.nav--open');
    let closeIcon = document.querySelector('.nav--open-icon');

    // Open the menu
    openIcon.addEventListener('click', function() {
      menu.classList.remove('close'); // Remove the close class to show the menu
      addCloseButton(); // Add the close button dynamically
    });

    // Close the menu when close icon is clicked
    closeIcon.addEventListener('click', function() {
      closeMenu();
    });

    // Function to add a close button dynamically with a PNG image
    function addCloseButton() {
      let closeButton = document.createElement('button');
      closeButton.classList.add('close-button');
      closeButton.style.cssText = `
        position: absolute;
        top: 17px;
        right: 10px;
        // background-color: #d4af37;
        // color: #333;
        border: none;
        border-radius: 50%;
        // padding: 10px 15px;
        // font-size: 1em;
        cursor: pointer;
        display: flex;
        align-items: center;
      `;

      // Add a PNG image
      let img = document.createElement('img');
      img.src = '/assets/close.png'; // Replace with the path to your PNG file
      img.alt = 'Close Menu'; // Alt text for accessibility
      img.style.cssText = `
        width: 20px; /* Set width as needed */
        height: 20px; /* Set height as needed */
        // margin-right: 8px; /* Space between the image and text */
      `;

      // Add text next to the image
      let text = document.createTextNode('');

      // Append the image and text inside the button
      closeButton.appendChild(img);
      closeButton.appendChild(text);

      // Append the close button inside the menu
      menu.appendChild(closeButton);

      // Attach event listener to close button
      closeButton.addEventListener('click', function() {
        closeMenu();
      });
    }

    // Function to close the menu and remove the close button
    function closeMenu() {
      menu.classList.add('close'); // Add the close class to hide the menu

      // Remove the close button if it exists
      let closeButton = document.querySelector('.close-button');
      if (closeButton) {
        closeButton.remove();
      }
    }

// -----------------------------------------------------------------------------------------------------------

let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    let image = document.querySelector('.images');
    let items = document.querySelectorAll('.images .item');
    let contents = document.querySelectorAll('.content .item');
    
    let rotate = 0;
    let active = 0;
    let countItem = items.length;
    let rotateAdd = 360 / countItem;
    
    function nextSlider(){
        active = active + 1 > countItem - 1 ? 0 : active + 1;
        rotate = rotate + rotateAdd; 
        show();
    }
    function prevSlider(){
        active = active - 1 < 0 ? countItem - 1 : active - 1;
        rotate = rotate - rotateAdd; 
        show();     
         
    }
    function show(){
        image.style.setProperty("--rotate", rotate + 'deg');
        image.style.setProperty("--rotate", rotate + 'deg');
        contents.forEach((content, key) => {
            if(key == active){
                content.classList.add('active');
            }else{
                content.classList.remove('active');
            }
        })
    }
    next.onclick = nextSlider;
    prev.onclick = prevSlider;
    const autoNext = setInterval(nextSlider, 3000);