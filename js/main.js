//CUSTOM FUNCTIONS//

// jQuery animated scroll for menu
$(function () {
    $('#primary-menu a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 1000);
                return false;
            }
        }
    });
});

// initiate slideshow
$(function () {
    $('#ei-slider').eislideshow({
        easing: 'easeOutExpo',
        titleeasing: 'easeOutExpo',
        titlespeed: 1200
    });
});

//Toggle accordion with navbar
function OpenTimelapse() {
    if ($("#collapseOne").hasClass("in")) {
        return;
    }
    else {
        document.getElementById("timelapse-anchor").click();
    }
};

function OpenCaHiSpeed() {
    if ($("#collapseTwo").hasClass("in")) {
        return;
    }
    else {
        document.getElementById("ca-anchor").click();
    }
};

function OpenMono() {
    if ($("#collapseThree").hasClass("in")) {
        return;
    }
    else {
        document.getElementById("mono-anchor").click();
    }
};

function OpenColour() {
    if ($("#collapseFive").hasClass("in")) {
        return;
    }
    else {
        document.getElementById("colour-anchor").click();
    }
};

function OpenLight() {
    if ($("#collapseSix").hasClass("in")) {
        return;
    }
    else {
        document.getElementById("light-anchor").click();
    }
};

function OpenStages() {
    if ($("#collapseSeven").hasClass("in")) {
        return;
    }
    else {
        document.getElementById("stages-anchor").click();
    }
};

function OpenFilters() {
    if ($("#collapseEight").hasClass("in")) {
        return;
    }
    else {
        document.getElementById("filters-anchor").click();
    }
};



