
  //Logic for user sign in or login
  document.querySelector("#sign-in").addEventListener("click", () => {
    let userEmail = document.querySelector("#first-value").value;
    let userPassword = document.querySelector("#second-value").value;
  
    //Checking for empty values in input fields
    if (!userEmail || !userPassword) {
      alert("Email and password field's can't be empty!");
    }
    //Checking whether the user has an account
    else if (!localStorage.getItem(userEmail)) {
      alert(
        "No user found with email ${userEmail}"
      );
    } else if (localStorage.getItem(userEmail) === userPassword) {
      alert(
        `Hello! welcome to internet card ${userEmail.slice(
          0,
          userEmail.indexOf("@")
        )}`
      );
    } else {
      alert("Incorrect user name or password");
    }
  });
  
   //Signing up for a new account
 document.querySelector("#sign-up-btn").addEventListener("click", () => {
    let signupEmail = document.querySelector("#first").value;
    let signupPassword = document.querySelector("#second").value;
    let signupConfirmPassword = document.querySelector(
      "#third"
    ).value;
  
    //Checking for empty values in input fields
    if (!signupEmail || !signupPassword || !signupConfirmPassword) {
      alert("Email and password's field's can't be empty!");
    } // Checking for passwords mismatch
    else if (signupPassword !== signupConfirmPassword) {
      alert("Passwords do not match, please reverify!");
    } else {
      alert("Account created successfully!");
      localStorage.setItem(signupEmail, signupPassword);
    }
  });
 