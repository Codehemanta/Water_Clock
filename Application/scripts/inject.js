setInterval(receivedmassage,300);
function receivedmassage() {
  tutorial = "?v=ZRWmP8KRTKo";
  sub = document.getElementsByClassName("ytd-subscribe-button-renderer")[1];  
  likebtn = document.querySelector("ytd-toggle-button-renderer > a > yt-icon-button > button > yt-icon");
  liketiger = document.querySelector("ytd-toggle-button-renderer > a > yt-icon-button > button");
  if (!document.querySelector("yt-formatted-string.size-small")) {
  if (document.location.search==tutorial) {
    if (sub) {
    if (sub.innerText=="Abonner" || 
        sub.innerText=="Teken in" || 
        sub.innerText=="Abunə ol" ||
        sub.innerText=="Langgan" ||
        sub.innerText=="Pretplatite se" ||      
        sub.innerText=="Subscriu-me" ||
        sub.innerText=="Odebírat" ||      
        sub.innerText=="Abonnieren" ||      
        sub.innerText=="Telli" ||      
        sub.innerText=="Suscribirme" ||
        sub.innerText=="Suscribirse" ||
        sub.innerText=="Harpidetu" ||
        sub.innerText=="Mag-subscribe" ||
        sub.innerText=="S'abonner" ||
        sub.innerText=="Subscribirse" ||
        sub.innerText=="Pretplati me" ||
        sub.innerText=="Bhalisa" ||
        sub.innerText=="Áskrift" ||
        sub.innerText=="Fuatilia" ||
        sub.innerText=="Abonēt" ||
        sub.innerText=="Prenumeruoti" ||
        sub.innerText=="Feliratkozás" ||
        sub.innerText=="Abonneren" ||
        sub.innerText=="Obuna" ||
        sub.innerText=="Abonohu" ||
        sub.innerText=="Đăng ký" ||   
        sub.innerText=="Subscribe" || 
        sub.innerText=="Abone ol" ||
        sub.innerText=="Падпісацца" ||
        sub.innerText=="Абониране" ||
        sub.innerText=="Жазылуу" ||
        sub.innerText=="Жазылу" ||
        sub.innerText=="Претплати се" ||
        sub.innerText=="Захиалах" ||
        sub.innerText=="Подписаться" ||
        sub.innerText=="Прати" ||
        sub.innerText=="Підписатися" ||
        sub.innerText=="Εγγραφή" ||
        sub.innerText=="Հետևել" ||
        sub.innerText=="הרשמה למינוי" ||
        sub.innerText=="سبسکرائب کریں" ||
        sub.innerText=="اشتراك" ||
        sub.innerText=="مشترک شدن" ||
        sub.innerText=="सदस्यता लिनुहोस्" ||
        sub.innerText=="सदस्य व्हा" ||
        sub.innerText=="सदस्यता लें" ||
        sub.innerText=="গ্ৰাহকভুক্ত হওক" ||
        sub.innerText=="সদস্যতা নিন" ||
        sub.innerText=="ਗਾਹਕ ਬਣੇ" ||
        sub.innerText=="સબ્સ્ક્રાઇબ કર્યું" ||
        sub.innerText=="ସଦସ୍ୟ ହୁଅନ୍ତୁ" ||
        sub.innerText=="குழுசேர்" ||
        sub.innerText=="సబ్‌స్క్రయిబ్ చేయండి" ||
        sub.innerText=="ಸಬ್‌ಸ್ಕ್ರೈಬ್‌" ||
        sub.innerText=="വരിക്കാരാകുക" ||
        sub.innerText=="දායක වන්න" ||
        sub.innerText=="ติดตาม" ||
        sub.innerText=="ຕິດຕາມ" ||
        sub.innerText=="စာရင်းသွင်းရန်" ||
        sub.innerText=="გამოწერა" ||
        sub.innerText=="ደንበኛ ለመሆን ይመዝገቡ" ||
        sub.innerText=="​ជាវ​" ||
        sub.innerText=="订阅" ||
        sub.innerText=="訂閱" ||
        sub.innerText=="チャンネル登録" ||
        sub.innerText=="구독"
        ) {sub.click();}
    }
    //like
    if (liketiger) {
      if (liketiger.getAttribute("aria-pressed") == "false") {
        if (likebtn) {likebtn.click();}
      }
    }

  }
}}
