const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark');
    }else{
        document.body.classList.remove('dark');
    }
});