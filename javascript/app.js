// Alert Banner //
const alertBanner = document.getElementById(".alert");
// Create HTML for Banner
alertBanner.innerHTML = `<div class="alert-banner">
                        <p><strong>Alert:</strong>You have <strong>6</strong> overdue tasks to complete.</p>
                        <p class="alert-banner-close">x</p>
                        </div>`;

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if(element.classList.contains("alert-banner-close")){
        alertBanner.style.display = "none";
    }
});

// Bell Icon Notification

// Set Timer for notification to light on
setTimeout(() => {
    const dot = document.querySelector(".notification-dot");
    dot.style.opacity = "1";
}, 2000);

const bellIcon = document.querySelector('.bell-icon');
const remarks = document.querySelector('.remarks');
const modal = document.querySelector('.modal');
const newRemarks = document.querySelector(".notification-content");
const close = document.querySelector(".close");

// Generate random notifications from the list
function randomNumber(){
    return Math.floor(Math.random() * 3) + 1; //    Generate a random number from 0 to 4
}

// Generate Notifications
bellIcon.addEventListener('click', (e) => {
    let num1;
    let num2;
    do {
        num1 = randomNumber();
        num2 = randomNumber();
    } while(num1 === num2);
    let txt1 = remarks.item(num1).innerText;
    let txt2 = remarks.item(num2).innerText;

    newRemarks.innerHTML = `<p>${txt1}</p>
                            <p>${txt2}</p>`;

    modal.style.display = "block";
    newRemarks.style.display ="block";
});

close.addEventListener('click', e=> {
    modal.style.display = "none";
})



