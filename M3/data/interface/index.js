var $ = (ele) =>{return document.querySelector(ele)}, elem = document.documentElement,
domReady = (callback)=> {document.readyState === 'complete' ? callback() : window.addEventListener('load', callback, false);};


const translate = () => {
  return new Promise((resolve) => {
    const elements = document.querySelectorAll("[data-message]");
    for (const element of elements) {
      const key = element.dataset.message;
      const message = chrome.i18n.getMessage(key);
      if (message) {
        element.textContent = message;
      } else {
        console.error("Missing chrome.i18n message:", key);
      }
    }
    resolve();
  });
}

const info = async() =>{
	responsePromise = new Promise((resolve, reject) =>{
	        chrome.storage.local.get({
	          "timeType": true,
	          "newtimetooltip": true,
	          "styleSheet" : "galaxy"
	        }, (options)=>{
	            resolve(options);
	        })
	    });

	responseOptions = await responsePromise;

	$(".stylePoint") ? $(".stylePoint").setAttribute("href", `css/${responseOptions.styleSheet}.css`) : null;
	$("link[rel='icon']") ? $("link[rel='icon']").setAttribute("href", `../icons/${responseOptions.styleSheet}.svg`) : null;

	var buttons = document.querySelectorAll(".themes .theme");
	for (var i = 0; i < buttons.length; i++) {
		if (buttons[i].id === responseOptions.styleSheet) {
			buttons[i].classList.add("active");
		}
  }


	localStorage.timeType = responseOptions.timeType;
	if (localStorage.timeType === "true") {
		$(".checked") ? $(".checked").classList.remove("hide") : null;
		$(".time-check") ? $(".time-check").classList.add("active") : null;
	}else{
		$(".checked") ? $(".checked").classList.add("hide") : null;
	}

	if (responseOptions.newtimetooltip === true) {
		$(".new-time-tooltip") ? $(".new-time-tooltip").classList.add("show") : null;
		$(".new-time-tooltip") ? $(".new-time-tooltip").classList.remove("hide") : null;
	}else{
		$(".new-time-tooltip") ? $(".new-time-tooltip").classList.add("hide") : null;
		$(".new-time-tooltip") ? $(".new-time-tooltip").classList.remove("show") : null;
	}


}

const eventListener = ()=>{
	$("#settings").addEventListener("click", async(e) => {
		    await chrome.storage.local.set({ "newtimetooltip": false})
        $(".new-time-tooltip").classList.remove("show");
        $(".new-time-tooltip").classList.add("hide");
    });

    $(".closed").addEventListener("click", () => {
      if (!$(".closed").classList.contains("hide")) {
        $(".closed").classList.add("hide");
        $(".opened").classList.remove("hide");
        $(".opened").classList.add("block");
      }
  });	

	$("#full_screen").addEventListener("click", () => {
  	elem ? elem.requestFullscreen ? elem.requestFullscreen() : 
  	elem.msRequestFullscreen ? elem.msRequestFullscreen() : 
  	elem.mozRequestFullScreen ? elem.mozRequestFullScreen() :
  	elem.webkitRequestFullscreen ? elem.webkitRequestFullscreen() : null : null;
  });

	document.addEventListener("click", function (event) {
	    if (event.target.closest(".opened") || event.target.closest(".closed")) {
	        return;
	    } else {
	        $(".opened").classList.add("hide");
	        $(".closed").classList.remove("hide");
	        $(".closed").classList.add("show");
	    }

	});

	$(".time-check .input").addEventListener("click", async()=>{
	    if (!($(".time-check").classList.contains("active"))) {
	      $(".time-check").classList.add("active");
	      $(".checked").classList.remove("hide");  
		    await chrome.storage.local.set({ "timeType": true})
		    localStorage.setItem("timeType",true);
	    }else{
		    await chrome.storage.local.set({ "timeType": false})
	      $(".time-check").classList.remove("active");
	      $(".checked").classList.add("hide");  
	      localStorage.setItem("timeType",false);
	    }
	});

	document.querySelectorAll(".themes .theme").forEach((element)=> {
	  element.addEventListener("click", async(event)=> {
	        document.querySelectorAll(".themes .theme").forEach( async(element)=> {
	            if (element.classList.contains("active")) {
	                element.classList.remove("active");
	                if (event.currentTarget.id == element.id) {
	                    var defaultStyleTheSame = event.currentTarget.id;
	                    element.classList.remove("active");
	                    await chrome.storage.local.set({ "styleSheet": `${defaultStyleTheSame}`})
	                }
	            }
	        });

	        if (event.currentTarget.id) {
	            var defaultStyleId = event.currentTarget.id;
	            element.classList.add("active");
	        }

	        $(".stylePoint") ? $(".stylePoint").setAttribute("href", `css/${defaultStyleId}.css`): null;
	        $("link[rel='icon']") ? $("link[rel='icon']").setAttribute("href", `../icons/${defaultStyleId}.svg`): null;

	        await chrome.storage.local.set({ "styleSheet": `${defaultStyleId}`})
	    });
	    element.addEventListener("mouseover", function (event) {
	        $(".caption") ? $(".caption").innerText = event.currentTarget.id : null;
	    });
	    element.addEventListener("mouseout", function (event) {
	        $(".caption") ? $(".caption").innerText = "klak" : null;
	    });
	  });
}

const klak = ()=>{
	setInterval(async()=>{
        const date = new Date(), 
        hours = ((date.getHours() + 11) % 12 + 1), 
        minutes = date.getMinutes();

	    var h = date.getHours(), m = date.getMinutes();

	    h < 10 ? h = '0' + h : null;
	    m < 10 ? m = '0' + m : null;

	    $(".time") ? $(".time").innerText = localStorage.timeType === "true" ? h+":"+m : hours+":"+minutes : null;

	},1000);
}

const starCreate = ()=>{
	if (!$("#stars4")) return;
	var div = document.createElement("div");
	div.setAttribute('class', 'stars');
	$("#stars4").appendChild(div);

	for (var i = 0; i < 24; i++) {
		stars = document.createElement("div");
		div.appendChild(stars);
	}

}


domReady(() => {
	klak()
  info()
  eventListener()
  starCreate()
  translate()
})