var _gaq = _gaq || [];

(function () {
    var s = document.getElementsByTagName('script')[0]; 
})();

/*Water Clock start*/
setInterval(clock, 1000);
function clock() {
    const date = new Date();

    const hours = ((date.getHours() + 11) % 12 + 1);
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if (h < 10)
        h = '0' + h;
    if (m < 10)
        m = '0' + m;
    if (s < 10)
        s = '0' + s;

    if (localStorage.getItem("timeType") == "12hours") {
        document.querySelector(".time").innerText = hours+":"+minutes;

    } else if(localStorage.getItem("timeType") == "24hours"){
        document.querySelector(".time").innerText = h+":"+m;
    }
}

if (localStorage.getItem("defaultStyle") == null) {
    document.querySelector(".stylePoint").setAttribute("href", `galaxy.css`);
    localStorage.setItem("defaultStyle", `galaxy.css`);
    _gaq.push(['_trackEvent', themeId + "_theme", 'newtab_theme']);
} else {
    document.querySelector(".stylePoint").setAttribute("href", `${localStorage.getItem("defaultStyle")}`);
    var themeId = localStorage.getItem("defaultStyle").split(".")[0];
    document.querySelector(`#${themeId}`).classList.add("active");
    _gaq.push(['_trackEvent', themeId + "_theme", 'newtab_theme']);
}

document.querySelectorAll(".themes .theme").forEach(function (element) {
    element.addEventListener("click", function (event) {
        document.querySelectorAll(".themes .theme").forEach(function (element) {
            if (element.classList.contains("active")) {
                element.classList.remove("active");
                if (event.currentTarget.id == element.id) {
                    var defaultStyleTheSame = event.currentTarget.id;
                    element.classList.remove("active");
                    localStorage.setItem("defaultStyle", `${defaultStyleTheSame}.css`);
                }
            }
        });

        if (event.currentTarget.id) {
            var defaultStyleId = event.currentTarget.id;
            element.classList.add("active");
        }

        document.querySelector(".stylePoint").setAttribute("href", `${defaultStyleId}.css`);
        localStorage.setItem("defaultStyle", `${defaultStyleId}.css`);
    });
    element.addEventListener("mouseover", function (event) {
        document.querySelector(".caption").innerText = event.currentTarget.id;
    });
    element.addEventListener("mouseout", function (event) {
        document.querySelector(".caption").innerText = "WaterClock";
    });
});

document.querySelector(".closed").addEventListener("click", function () {
    if (!document.querySelector(".closed").classList.contains("hide")) {
        document.querySelector(".closed").classList.add("hide");
        document.querySelector(".opened").classList.remove("hide");
        document.querySelector(".opened").classList.add("block");
    }
});

var settings = document.querySelector(".opened");

// Detect all clicks on the document
document.addEventListener("click", function (event) {
    // If user clicks inside the element, do nothing
    if (event.target.closest(".opened") || event.target.closest(".closed")) {
        //debugger;
        return;
    } else {
        document.querySelector(".opened").classList.add("hide");
        document.querySelector(".closed").classList.remove("hide");
        document.querySelector(".closed").classList.add("show");
        var themeId = localStorage.getItem("defaultStyle").split(".")[0];

        _gaq.push(['_trackEvent', themeId + "_theme", 'current_theme']);
    }

});

function trackButton(e) {
    _gaq.push(['_trackEvent', e.currentTarget.id + "_button", 'click']);
};

function trackClosedButton(e) {
    _gaq.push(['_trackEvent', e.currentTarget.id + "_button", 'click']);
};
var buttons = document.querySelectorAll(".themes .theme");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', trackButton);
} 

document.querySelector("#settings").addEventListener("click", function (e) {
    trackClosedButton(e);
    localStorage.setItem("new-time-tooltip", "true");
    document.querySelector(".new-time-tooltip").classList.remove("show");
    document.querySelector(".new-time-tooltip").classList.add("hide");
});
var links = document.querySelectorAll(".names a");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', trackButton);
}

if(localStorage.getItem("timeType") == "24hours"){
    document.querySelector(".checked").classList.remove("hide");
}else{
    localStorage.setItem("timeType","12hours");  
    document.querySelector(".checked").classList.add("hide");
}
document.querySelector(".time-check .input").addEventListener("click", function () {
    if (!(document.querySelector(".time-check").classList.contains("active"))) {
        document.querySelector(".time-check").classList.add("active");
        document.querySelector(".checked").classList.remove("hide");  
        localStorage.setItem("timeType","24hours");  
        _gaq.push(['_trackEvent', "24hours" + "_checked", 'current_time_zone']);
    }else{
        document.querySelector(".time-check").classList.remove("active");
        document.querySelector(".checked").classList.add("hide");  
        localStorage.setItem("timeType","12hours");  
        _gaq.push(['_trackEvent', "12hours" + "_checked", 'current_time_zone']);
    }
});

if (localStorage.getItem("new-time-tooltip") == "true") {
    document.querySelector(".new-time-tooltip").classList.add("hide");
    document.querySelector(".new-time-tooltip").classList.remove("show");
} else {
    localStorage.setItem("new-time-tooltip", "false");
    document.querySelector(".new-time-tooltip").classList.remove("hide");
    document.querySelector(".new-time-tooltip").classList.add("show");
}

var full_screen = document.querySelector("#full_screen");
full_screen.addEventListener("click", go_full_screen);
function go_full_screen(){
  var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
}
