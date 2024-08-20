

// --------------------------------------------

     
function handleSignup(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

  
    localStorage.setItem('username', username);

  
    window.location.href ='index.html'; 
}




function handleSignin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Perform signin logic (e.g., send data to server)
    console.log('Signin data:', { email, password });
}



// ----------------------------------------------

// -----------reservation-------------

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservation-form');
    const submitButton = document.querySelector('.submit-btn');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); 

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guest = document.getElementById('guest').value.trim();

     
        if (name && phone && email && date && time && guest) {
            alert('Reservation Submitted Successfully!\n' +
                `Name: ${name}\n` +
                `Phone: ${phone}\n` +
                `Email: ${email}\n` +
                `Date: ${date}\n` +
                `Time: ${time}\n` +
                `Number of Guests: ${guest}\n`);

            
            form.reset();
        } else {
            alert("Please fill in all the fields.");
        }
    });
});


// -------------------------contact---------------------------------

document.addEventListener('DOMContentLoaded',()=>{
    const form = document.querySelector('.contact-form');
    

    form.addEventListener('submit',function event() {
        const name = document.getElementById('contact-name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
    

        if (!name || !phone || !message) {
            alert('please fill in all the fiels');
            event.preventDefault();
            return;
        }
        
        alert("Form submitted successfully");

    }); 
       
}); 

