document.addEventListener("DOMContentLoaded", function() {
  // Get the form, input fields, and CSS container elements
  const form = document.querySelector('form');
  const backgroundColorInput = document.querySelector('#background-color');
  const borderColorInput = document.querySelector('#border-color');
  const borderWidthInput = document.querySelector('#border-width');
  const borderStyleInput = document.querySelector('#border-style');
  const borderRadiusInput = document.querySelector('#border-radius');
  const cssContainer = document.querySelector('#css-display');

  
  // Add a "submit" event listener to the form
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    
    // Get the values of the input fields
    const backgroundColorValue = backgroundColorInput.value;
    const borderColorValue = borderColorInput.value;
    const borderWidthValue = borderWidthInput.value;
    const borderStyleValue = borderStyleInput.value;
    const borderRadiusValue = borderRadiusInput.value;
    
    // Generate the CSS code
    const cssCode = `
      background-color: ${backgroundColorValue};
      border-color: ${borderColorValue};
      border-width: ${borderWidthValue}px;
      border-style: ${borderStyleValue};
      border-radius: ${borderRadiusValue}px;
    `;
    
    // Set the CSS code as the text content of the CSS container element
    cssContainer.textContent = cssCode;
    
  });
});
