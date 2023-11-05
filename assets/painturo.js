function copy(data) {
    navigator.clipboard.writeText(data);
    new bootstrap.Modal(document.querySelector("#success")).show();
}

function react(e) {
    if (e.classList.contains('bi-heart')){
        e.classList.remove('bi-heart')
        e.classList.add('bi-heart-fill')
    } else {
        e.classList.remove('bi-heart-fill')
        e.classList.add('bi-heart')
    }
}