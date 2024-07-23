const togglebutton = document.querySelector('.togglebutton');
const togglebuttonicon = document.querySelector('.togglebutton span');
const dropdown = document.querySelector('.dropdown');

togglebutton.onclick = function () {
    dropdown.classList.toggle('open')

    const isopen = dropdown.classList.contains('open')
    if (isopen)
        togglebuttonicon.innerHTML = 'close'
    else
        togglebuttonicon.innerHTML = 'menu'
}