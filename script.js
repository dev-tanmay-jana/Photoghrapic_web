let boxlist = document.getElementById("boxlist")
boxlist.style.maxHeight ="0px"

function togglemenue(){
    if(boxlist.style.maxHeight=="0px")
    {
        boxlist.style.maxHeight="20rem"
        console.log('click')
    }
    else{
        boxlist.style.maxHeight="0px"
    }
}

function popuop() {
    const customer = document.querySelector("#name").value;
    const mobile = document.querySelector("#mobile_No").value;
    const options = document.querySelector("#options").value;
    const loc = document.querySelector("#locationinput").value;
    const massage = document.querySelector("#massage").value;
    
    if (!customer || !mobile || !options || !loc) {
        alert("One or more required input fields could not be found. Please check your HTML IDs.");
        return false;
    }
    if (customer === "" || mobile === "" || options === "" || loc === "") {
        alert("All fields are mandatory.");
        return false;
    }
    else if (mobile.length !== 10) {
        alert("Please enter a 10-digit mobile number.");
        return false;
    }
    else if (isNaN(Number(mobile))) {
        alert("Please enter a valid mobile number (digits only).");
        return false;
    }
    else {
    
        const currentDate = new Date().toLocaleDateString();
        console.log(`Name: ${customer}\nMobile No: ${mobile}\nSide: ${options}\nLocation: ${loc}\nDate: ${currentDate}`);
        alert("Form submitted successfully!");
    }
}

const submit =document.querySelector("#submit");
submit.addEventListener("click",(evt)=>{
    evt.preventDefault();
    console.log("submit button clicked");
    popuop();
});