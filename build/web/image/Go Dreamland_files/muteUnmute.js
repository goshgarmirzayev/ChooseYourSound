function mute() {
    document.getElementById('volumeImg').src = "image/mute.png";
    stopAll();
}
function unMute() {
    document.getElementById('volumeImg').src = "image/unmute.png";
}
var i = 1;
function setImage() {
    i += 1;
    if (i % 2 === 0) {
        mute();

    } else {
        unMute();

    }
}
function stopAll() {
    var sounds = document.getElementsByTagName('img');
    for (i = 0; i < sounds.length; i++)
        sounds[i].pause();


}
$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});




