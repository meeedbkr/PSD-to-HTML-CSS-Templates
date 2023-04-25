window.addEventListener('click', (e) => {
    if (e.target.id == 'menu-button') {
        document.querySelector('header#menu i + ul').classList.toggle('active');
    }
    else{
    	document.querySelector('header#menu i + ul').classList.remove('active');
    }
});