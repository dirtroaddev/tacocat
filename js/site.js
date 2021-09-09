//get the values from the string
//controller function
function getValue() {

    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let palString = checkPalindrome(userString);
    displayString(palString);

}

//reverse the string
//logic function
function checkPalindrome(userString) {
    let palindrome = "";
    let revString = "";

    for(let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }
    
    if(userString.toLowerCase().replace(/\s+/g, '') == revString.toLowerCase().replace(/\s+/g, '')) {
        palindrome = `${userString} is a Palindrome.`;
    } else {
        palindrome = `${userString} is not a Palindrome.`;
    }
    
    return palindrome;
   
}


//display the message to the user
//view function
function displayString(palindrome) {
    //write to the page
    document.getElementById("msg").innerHTML = palindrome;

    //show the alert box
    document.getElementById("alert").classList.remove("invisible");
}