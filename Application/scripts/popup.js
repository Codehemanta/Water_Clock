var number = ["1","2","3","4","5","6","7"];
var bg_a,bg_b,bg_c,bg_d;
var theme = number[Math.floor(Math.random()*number.length)];
setInterval(clock,500);
function clock() {
    bg_a = document.querySelector("#overlay");
    bg_b = document.querySelector(".bg");
    bg_c = document.querySelector(".bg2");
    bg_d = document.querySelector(".outermost");
    bg_e = 	document.querySelector(".txt");
	if (theme == "1") {
		bg_a.style.background="#191919";
		bg_b.style.background="#03a9f4";
		bg_c.style.background="#03a9f4";
		bg_d.style.background="#00bcd4";
		bg_e.style.color="#f0f6f9";
	}if (theme == "2") {
		bg_a.style.background="#191919";
		bg_b.style.background="#03f485";
		bg_c.style.background="#03f485";
		bg_d.style.background="#02c787";
		bg_e.style.color="#f0f6f9";
	}if (theme == "3") {
		bg_a.style.background="#191919";
		bg_b.style.background="#ff6bfb";
		bg_c.style.background="#ff6bfb";
		bg_d.style.background="#f500ee";
		bg_e.style.color="#f0f6f9";
	}if (theme == "4") {
		bg_a.style.background="#191919";
		bg_b.style.background="#ff6b6b";
		bg_c.style.background="#ff6b6b";
		bg_d.style.background="#ff4f4f";
		bg_e.style.color="#f0f6f9";
	}if (theme == "5") {
		bg_a.style.background="#191919";
		bg_b.style.background="#ffc46b";
		bg_c.style.background="#ffc46b";
		bg_d.style.background="#f9b042";
		bg_e.style.color="#f0f6f9";
	}if (theme == "6") {
		bg_a.style.background="#191919";
		bg_b.style.background="#e4ff4a";
		bg_c.style.background="#e4ff4a";
		bg_d.style.background="#b0c72c";
		bg_e.style.color="#f0f6f9";
	}if (theme == "7") {
		bg_a.style.background="#191919";
		bg_b.style.background="#9560ff";
		bg_c.style.background="#9560ff";
		bg_d.style.background="#602cc7";
		bg_e.style.color="#f0f6f9";
	}
	const today = new Date();
	const hours = today.getHours();
	const minutes = today.getMinutes();
	const seconds = today.getSeconds();
	const clockadd = hours+":"+minutes;
	bg_e.innerText=clockadd;
	
}
domReady(() => {
  translateHTML()
})
function domReady (callback) {
  if (document.readyState === 'complete') {
    callback()
  } else {
    window.addEventListener('load', callback, false);
  }
}
function translateHTML (dataKey = 'message') {
  for (const $element of document.getElementsByTagName('*')) {
    if ($element.dataset && $element.dataset[dataKey]) {
      $element.innerHTML = chrome.i18n.getMessage($element.dataset[dataKey])
    }
  }
}
