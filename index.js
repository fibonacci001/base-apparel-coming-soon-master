function isValidEmail(email) {
    
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    return pattern.test(email);
  }
  var error;
  
  function handleSubmit() {
    
    let input = getInputValue().trim();
    
    input = input.toLowerCase();
   
    
    if (input === "") {
      
      document.querySelector('.error_message').innerHTML="please enter an email address";
      error = document.querySelector(".error-icon"). style.display = "inline-block";
    } else {
      
      if (isValidEmail(input)) {
        
        sendEmail(input);
       
        document.querySelector('.error_message').innerHTML="";
        document.querySelector(".error-icon").style.display = "none";
      } else {
       
        document.querySelector('.error_message').innerHTML="please enter a valid email address";
         document.querySelector(".error-icon").style.display = "inline-block";
        
      }
    }
  }

  function clearError() {
    
    document.querySelector('.error_message').innerHTML="";
    document.querySelector(".error-icon").style.display = "none";
  }
  
  function getInputValue() {
    
    let inputElement = document.getElementById("email-input");
    
    return inputElement.value;
  }
  
  
  function sendEmail(email) {
    
    console.log("Email sent to " + email);
  }
  
  
  document.getElementById("email-input").addEventListener("input", handleSubmit);

  
  document.getElementById("email-input").addEventListener("blur", clearError);
