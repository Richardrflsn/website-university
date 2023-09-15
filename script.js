document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var lastEducation = document.getElementById("lastEducation").value;
    var schoolProvince = document.getElementById("schoolProvince").value;
    var interestedMajor = document.getElementById("interestedMajor").value;
    var schoolName = document.getElementById("schoolName").value;
    
    if (firstName && lastName && phoneNumber && email && password && lastEducation && schoolProvince && interestedMajor && schoolName) {

        document.getElementById("registrationForm").reset();
        
        alert("Thank you for your registration! Admission form will be sent via email immediately.");
    } else {
        alert("Please fill in all fields.");
    }
});