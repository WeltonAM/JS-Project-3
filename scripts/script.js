function carregar() {
    var msg = document.getElementById('msg');
    var img1 = document.getElementById('img1');
    var date = new Date();
    var hour = date.getHours();
    msg.innerHTML = `Now it's ${hour} o'clock.`;
    if(hour >= 0 && hour < 12) {
        img1.src = 'images/1.jpg';
        document.body.style.background = '#e2cd9f';
        msg.innerHTML += '<br /> Good morning!';
    } else if(hour >= 12 && hour < 18) {
        img1.src = 'images/2.jpg';
        document.body.style.background = '#b9846f';
        msg.innerHTML += '<br /> Good afternoon!';
    } else {
        img1.src = 'images/3.jpg';
        document.body.style.background = '#515154';
        msg.innerHTML += '<br /> Good evening!';
    }
}

