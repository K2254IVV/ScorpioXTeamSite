(function() {
    const isPS3 = /PLAYSTATION 3|PS3/i.test(navigator.userAgent);
    if (isPS3) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'css/ps3-style.css';
        document.head.appendChild(link);
        document.body.classList.add('ps3-mode');
        console.log('PS3 mode activated');
    }
})();
