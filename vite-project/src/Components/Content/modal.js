document.getElementById('modal_btn').addEventListener('click', () => {
    document.getElementById('modal').classList.add('active');
})
document.getElementById('modal_close').addEventListener('click', () => {
    document.getElementById('modal').classList.remove('active');
})