window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

function openGmail() {
    const email = "shah.sync@outlook.com";
    const subject = encodeURIComponent("");
    const body = encodeURIComponent("");

    const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    const a = document.createElement('a');
    a.href = mailtoUrl;
    a.target = "_blank";
    a.click();
}
