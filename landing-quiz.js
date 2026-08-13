/* DJ Shop — full-screen branching product quiz */
(() => {
  "use strict";

  const copy = {
    th: {
      "home.tag":"Custom made in Pattaya",
      "home.h1":"รูปของคุณ จะกลายเป็นอะไรดี?",
      "home.lead":"ตอบไม่เกิน 3 คำถาม แล้วเราจะเลือกสินค้าที่เหมาะให้คุณ",
      "home.time":"ใช้เวลาประมาณ 30 วินาที",
      "home.map":"แผนที่ร้าน", "home.phone":"โทรหาร้าน", "home.hours":"เปิดทุกวัน 11:00–00:00",
      "q.step":"ขั้นตอน", "q.back":"ย้อนกลับ",
      "q.1":"อยากทำอะไรดีคะ?", "q.1h":"เลือกสิ่งที่อยากทำจากรูปของคุณ",
      "q.clock":"นาฬิกาติดผนัง", "q.clockh":"เริ่มต้น ฿199",
      "q.mug":"แก้วสกรีนรูป", "q.mugh":"เริ่มต้น ฿250",
      "q.shirt":"เสื้อสกรีน", "q.shirth":"ออกแบบตามสั่ง",
      "q.frame":"กรอบรูป", "q.frameh":"ไม่มีนาฬิกา · ฿599",
      "q.unsure":"ยังไม่แน่ใจ", "q.unsureh":"ช่วยเลือกให้หน่อย",
      "clock.2":"อยากใส่กี่รูปคะ?", "clock.2h":"จำนวนรูปช่วยให้เราเลือกทรงที่พอดี",
      "clock.one":"รูปเดียว", "clock.oneh":"โชว์รูปเด่นเต็ม ๆ",
      "clock.many":"หลายรูป", "clock.manyh":"ทำเป็นคอลลาจได้ถึง 9 รูป",
      "common.unsure":"ยังไม่แน่ใจ", "common.unsureh":"ให้ร้านช่วยแนะนำ",
      "clock.3":"งบประมาณประมาณเท่าไหร่คะ?", "clock.3h":"เลือกช่วงราคาเพื่อดูแบบที่เหมาะที่สุด",
      "budget.low":"ไม่เกิน ฿299", "budget.lowh":"ขนาดกะทัดรัด คุ้มค่า",
      "budget.mid":"฿300–599", "budget.midh":"ขนาดยอดนิยม",
      "budget.high":"฿600 ขึ้นไป", "budget.highh":"ชิ้นใหญ่พิเศษ",
      "budget.any":"ดูได้ทุกช่วงราคา", "budget.anyh":"เน้นแบบที่เหมาะที่สุด",
      "mug.2":"อยากได้แก้วแบบไหนคะ?", "mug.2h":"เลือกจากวิธีที่คุณจะใช้งาน",
      "mug.ceramic":"แก้วเซรามิก", "mug.ceramich":"สำหรับกาแฟและของขวัญ",
      "mug.tumbler":"แก้วเก็บอุณหภูมิ", "mug.tumblerh":"ร้อน–เย็นได้นานถึง 8 ชม.",
      "mug.3":"อยากใช้รูปแบบไหน?", "mug.3h":"ส่งรูปจริงให้ร้านทาง LINE หลังเลือกเสร็จ",
      "design.one":"รูปเดียว", "design.oneh":"เรียบง่าย เห็นรูปชัด",
      "design.collage":"หลายรูป", "design.collageh":"จัดวางเป็นคอลลาจ",
      "design.text":"รูปพร้อมข้อความ", "design.texth":"ชื่อ วันที่ หรือคำอวยพร",
      "shirt.2":"ต้องการกี่ตัวคะ?", "shirt.2h":"จำนวนช่วยให้ร้านประเมินงานได้เร็วขึ้น",
      "shirt.one":"1 ตัว", "shirt.oneh":"สั่งทำชิ้นเดียว",
      "shirt.few":"2–5 ตัว", "shirt.fewh":"ครอบครัวหรือกลุ่มเล็ก",
      "shirt.bulk":"6 ตัวขึ้นไป", "shirt.bulkh":"ทีม งาน หรือธุรกิจ",
      "shirt.3":"อยากสกรีนตรงไหน?", "shirt.3h":"ร้านจะยืนยันรายละเอียดก่อนผลิตทุกครั้ง",
      "shirt.front":"ด้านหน้า", "shirt.fronth":"หนึ่งตำแหน่ง",
      "shirt.both":"หน้าและหลัง", "shirt.bothh":"สองตำแหน่ง",
      "shirt.help":"ให้ร้านช่วยแนะนำ", "shirt.helph":"ส่งแบบมาคุยกัน",
      "gift.2":"ทำให้โอกาสไหนคะ?", "gift.2h":"เราจะเลือกของที่เข้ากับโอกาสให้",
      "gift.birthday":"วันเกิด", "gift.birthdayh":"ของขวัญส่วนตัว",
      "gift.family":"ครอบครัว", "gift.familyh":"เก็บรูปความทรงจำ",
      "gift.business":"ทีม / ธุรกิจ", "gift.businessh":"เสื้อหรือของที่ระลึก",
      "gift.other":"โอกาสอื่น", "gift.otherh":"ให้ร้านช่วยคิดแบบ",
      "result.kicker":"แบบที่เหมาะกับคุณ",
      "result.order":"สั่งทาง LINE", "result.catalog":"ดูสินค้าอื่น", "result.restart":"เริ่มใหม่",
      "result.note":"ร้านจะยืนยันแบบ ราคา และวันรับของก่อนผลิต",
      "result.quote":"สอบถามราคา", "result.quoteSub":"ส่งแบบและจำนวนให้ร้านประเมินทาง LINE",
      "result.from":"เริ่มต้น",
      "order.intro":"สวัสดีค่ะ ทำแบบทดสอบจากเว็บไซต์แล้ว สนใจสั่งทำสินค้าค่ะ",
      "order.answers":"คำตอบ", "order.source":"ที่มา: ควิซบน pattayacustomprint.com"
    },
    en: {
      "home.tag":"Custom made in Pattaya",
      "home.h1":"What should your photo become?",
      "home.lead":"Answer up to 3 quick questions and we'll match you with the right product",
      "home.time":"Takes about 30 seconds",
      "home.map":"Find the shop", "home.phone":"Call the shop", "home.hours":"Open daily 11:00–00:00",
      "q.step":"Step", "q.back":"Back",
      "q.1":"What would you like to make?", "q.1h":"Choose what to create from your photo",
      "q.clock":"Wall clock", "q.clockh":"from ฿199",
      "q.mug":"Photo mug", "q.mugh":"from ฿250",
      "q.shirt":"Printed t-shirt", "q.shirth":"made to order",
      "q.frame":"Photo frame", "q.frameh":"no clock · ฿599",
      "q.unsure":"Not sure yet", "q.unsureh":"help me choose",
      "clock.2":"How many photos would you like?", "clock.2h":"The photo count helps us pick the right shape",
      "clock.one":"One photo", "clock.oneh":"one image, full size",
      "clock.many":"Several photos", "clock.manyh":"a collage of up to 9 photos",
      "common.unsure":"Not sure", "common.unsureh":"let the shop recommend",
      "clock.3":"What's your budget?", "clock.3h":"Choose a range to see the best match",
      "budget.low":"Up to ฿299", "budget.lowh":"compact and great value",
      "budget.mid":"฿300–599", "budget.midh":"our most popular sizes",
      "budget.high":"฿600+", "budget.highh":"extra-large statement piece",
      "budget.any":"Any price range", "budget.anyh":"show the best overall match",
      "mug.2":"Which mug suits you?", "mug.2h":"Choose how you plan to use it",
      "mug.ceramic":"Ceramic mug", "mug.ceramich":"for coffee and gifts",
      "mug.tumbler":"Insulated tumbler", "mug.tumblerh":"hot or cold for up to 8 h",
      "mug.3":"What kind of design?", "mug.3h":"Send the actual photos via LINE after your result",
      "design.one":"One photo", "design.oneh":"clean and focused",
      "design.collage":"Several photos", "design.collageh":"arranged as a collage",
      "design.text":"Photo + message", "design.texth":"a name, date or greeting",
      "shirt.2":"How many shirts?", "shirt.2h":"Quantity helps us quote faster",
      "shirt.one":"1 shirt", "shirt.oneh":"a single custom piece",
      "shirt.few":"2–5 shirts", "shirt.fewh":"family or small group",
      "shirt.bulk":"6+ shirts", "shirt.bulkh":"team, event or business",
      "shirt.3":"Where should we print?", "shirt.3h":"We confirm every detail before production",
      "shirt.front":"Front", "shirt.fronth":"one print position",
      "shirt.both":"Front and back", "shirt.bothh":"two print positions",
      "shirt.help":"Help me choose", "shirt.helph":"send us your artwork",
      "gift.2":"What's the occasion?", "gift.2h":"We'll match the gift to the moment",
      "gift.birthday":"Birthday", "gift.birthdayh":"a personal gift",
      "gift.family":"Family", "gift.familyh":"keep a favorite memory",
      "gift.business":"Team / business", "gift.businessh":"shirts or keepsakes",
      "gift.other":"Something else", "gift.otherh":"let the shop suggest an idea",
      "result.kicker":"Your best match",
      "result.order":"Order via LINE", "result.catalog":"Other products", "result.restart":"Start over",
      "result.note":"We confirm the design, final price and pickup date before production",
      "result.quote":"Ask for a quote", "result.quoteSub":"Send your design and quantity on LINE",
      "result.from":"from",
      "order.intro":"Hello! I completed the website quiz and would like to order.",
      "order.answers":"Answers", "order.source":"Source: quiz on pattayacustomprint.com"
    }
  };

  const products = {
    clround:{name:"clround",sub:"clrounds",price:199,img:"img/round-1.jpg"},
    cl2040:{name:"cl2040",sub:"cl2040s",price:199,img:"",icon:"🕐"},
    clA4:{name:"clA4",sub:"clA4s",price:199,img:"",icon:"🖼"},
    cl20:{name:"cl20",sub:"cl20s",price:299,img:"img/c2060-1.jpg"},
    cl40:{name:"cl40",sub:"cl40s",price:299,img:"img/c4040-1.jpg"},
    cl30:{name:"cl30",sub:"cl30s",price:299,img:"img/bear30-1.jpg"},
    clbear40:{name:"clbear40",sub:"clbear40s",price:399,img:"",icon:"🧸"},
    clsq3040:{name:"clsq3040",sub:"clsq3040s",price:399,img:"",icon:"▣"},
    cl50:{name:"cl50",sub:"cl50s",price:499,img:"img/c5050-1.jpg"},
    cldigi:{name:"cldigi",sub:"cldigis",price:499,img:"",icon:"🔢"},
    clcal4060:{name:"clcal4060",sub:"clcal4060s",price:599,img:"",icon:"🗓"},
    cl60:{name:"cl60",sub:"cl60s",price:799,img:"img/c6060-1.jpg"},
    cl6080:{name:"cl6080",sub:"cl6080s",price:999,img:"",icon:"⏱"},
    frame6080:{name:"frame6080",sub:"frame6080s",price:599,img:"",icon:"🖼"},
    mug250:{name:"mug250",sub:"mug250s",price:250,img:"img/mug250-1.jpg"},
    mug799:{name:"mug799",sub:"mug799s",price:799,img:"img/mug799-1.jpg"},
    shirt:{name:"q.shirt",sub:"result.quoteSub",price:null,img:"",icon:"👕"}
  };

  const state = {category:"",photos:"",budget:"",mugType:"",design:"",quantity:"",print:"",occasion:"",answers:[]};
  const body = document.getElementById("qbody");
  const bar = document.getElementById("qbar");
  const stepLabel = document.getElementById("qstep");
  if (!body || !bar || !stepLabel) return;

  const lang = () => window.DJLANG === "en" ? "en" : "th";
  const tr = key => {
    const shared = typeof I18N !== "undefined" ? I18N[lang()] : null;
    return copy[lang()][key] ?? shared?.[key] ?? key;
  };
  const esc = value => String(value).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

  function localizeStatic(){
    document.querySelectorAll("[data-home-i18n]").forEach(el => {
      const value = tr(el.dataset.homeI18n);
      if (value !== undefined) el.textContent = value;
    });
  }

  function emit(name,detail={}){
    document.dispatchEvent(new CustomEvent("djquiz",{detail:{event:name,...detail}}));
  }

  function option({key,hint,img,icon,value,action}){
    const button = document.createElement("button");
    button.type = "button";
    button.className = `home-option${img ? "" : " is-plain"}`;
    button.dataset.value = value;
    button.setAttribute("aria-label",`${tr(key)}${hint ? ": "+tr(hint) : ""}`);
    button.innerHTML = `${img ? `<img src="${esc(img)}" alt="" loading="eager">` : ""}<span class="home-option-copy">${icon ? `<span class="home-option-icon" aria-hidden="true">${icon}</span>` : ""}<b>${esc(tr(key))}</b>${hint ? `<small>${esc(tr(hint))}</small>` : ""}</span>`;
    button.addEventListener("click",() => { emit("answer",{step:Number(stepLabel.dataset.step||1),value}); action(); });
    return button;
  }

  function renderQuestion(step,title,hint,options,back){
    stepLabel.dataset.step = String(step);
    stepLabel.textContent = `${tr("q.step")} ${step} / 3`;
    bar.style.width = `${step/3*100}%`;
    body.innerHTML = `<div class="home-qtitle">${esc(tr(title))}</div><div class="home-qhint">${esc(tr(hint))}</div><div class="home-options"></div>`;
    const grid = body.querySelector(".home-options");
    options.forEach(item => grid.appendChild(option(item)));
    if(back){
      const button = document.createElement("button");
      button.type="button"; button.className="home-back"; button.textContent=`← ${tr("q.back")}`;
      button.addEventListener("click",back); body.appendChild(button);
    }
  }

  function answer(field,value,labelKey){
    state[field]=value;
    state.answers=state.answers.filter(item=>item.field!==field);
    state.answers.push({field,label:tr(labelKey)});
  }

  function start(){
    Object.keys(state).forEach(key => { state[key]=key==="answers" ? [] : ""; });
    emit("start");
    renderQuestion(1,"q.1","q.1h",[
      {key:"q.clock",hint:"q.clockh",img:"img/round-1.jpg",value:"clock",action:()=>{answer("category","clock","q.clock");clockPhotos();}},
      {key:"q.mug",hint:"q.mugh",img:"img/mug250-1.jpg",value:"mug",action:()=>{answer("category","mug","q.mug");mugType();}},
      {key:"q.shirt",hint:"q.shirth",icon:"👕",value:"shirt",action:()=>{answer("category","shirt","q.shirt");shirtQuantity();}},
      {key:"q.frame",hint:"q.frameh",icon:"🖼",value:"frame",action:()=>{answer("category","frame","q.frame");showResult("frame6080");}},
      {key:"q.unsure",hint:"q.unsureh",img:"img/c5050-1.jpg",value:"unsure",action:()=>{answer("category","unsure","q.unsure");occasion();}}
    ],null);
  }

  function clockPhotos(){
    renderQuestion(2,"clock.2","clock.2h",[
      {key:"clock.one",hint:"clock.oneh",img:"img/round-1.jpg",value:"one",action:()=>{answer("photos","one","clock.one");clockBudget();}},
      {key:"clock.many",hint:"clock.manyh",img:"img/c5050-1.jpg",value:"many",action:()=>{answer("photos","many","clock.many");clockBudget();}},
      {key:"common.unsure",hint:"common.unsureh",icon:"✨",value:"any",action:()=>{answer("photos","any","common.unsure");clockBudget();}}
    ],start);
  }

  function clockBudget(){
    renderQuestion(3,"clock.3","clock.3h",[
      {key:"budget.low",hint:"budget.lowh",img:"img/round-1.jpg",value:"low",action:()=>{answer("budget","low","budget.low");showResult(pickClock());}},
      {key:"budget.mid",hint:"budget.midh",img:"img/c5050-1.jpg",value:"mid",action:()=>{answer("budget","mid","budget.mid");showResult(pickClock());}},
      {key:"budget.high",hint:"budget.highh",img:"img/c6060-1.jpg",value:"high",action:()=>{answer("budget","high","budget.high");showResult(pickClock());}},
      {key:"budget.any",hint:"budget.anyh",icon:"♡",value:"any",action:()=>{answer("budget","any","budget.any");showResult(pickClock());}}
    ],clockPhotos);
  }

  function pickClock(){
    if(state.budget==="high") return state.photos==="one" ? "cl6080" : "cl60";
    if(state.budget==="mid") return state.photos==="many" ? "clcal4060" : "cldigi";
    if(state.budget==="low") return state.photos==="many" ? "cl20" : "clA4";
    return state.photos==="many" ? "cl50" : "clround";
  }

  function mugType(){
    renderQuestion(2,"mug.2","mug.2h",[
      {key:"mug.ceramic",hint:"mug.ceramich",img:"img/mug250-1.jpg",value:"ceramic",action:()=>{answer("mugType","ceramic","mug.ceramic");mugDesign();}},
      {key:"mug.tumbler",hint:"mug.tumblerh",img:"img/mug799-1.jpg",value:"tumbler",action:()=>{answer("mugType","tumbler","mug.tumbler");mugDesign();}},
      {key:"common.unsure",hint:"common.unsureh",icon:"☕",value:"any",action:()=>{answer("mugType","any","common.unsure");mugDesign();}}
    ],start);
  }

  function mugDesign(){
    renderQuestion(3,"mug.3","mug.3h",[
      {key:"design.one",hint:"design.oneh",img:"img/mug250-1.jpg",value:"one",action:()=>{answer("design","one","design.one");showResult(state.mugType==="tumbler"?"mug799":"mug250");}},
      {key:"design.collage",hint:"design.collageh",img:"img/mug799-1.jpg",value:"collage",action:()=>{answer("design","collage","design.collage");showResult(state.mugType==="tumbler"?"mug799":"mug250");}},
      {key:"design.text",hint:"design.texth",icon:"Aa",value:"text",action:()=>{answer("design","text","design.text");showResult(state.mugType==="tumbler"?"mug799":"mug250");}},
      {key:"common.unsure",hint:"common.unsureh",icon:"✨",value:"any",action:()=>{answer("design","any","common.unsure");showResult(state.mugType==="tumbler"?"mug799":"mug250");}}
    ],mugType);
  }

  function shirtQuantity(){
    renderQuestion(2,"shirt.2","shirt.2h",[
      {key:"shirt.one",hint:"shirt.oneh",icon:"1",value:"1",action:()=>{answer("quantity","1","shirt.one");shirtPrint();}},
      {key:"shirt.few",hint:"shirt.fewh",icon:"2–5",value:"2-5",action:()=>{answer("quantity","2-5","shirt.few");shirtPrint();}},
      {key:"shirt.bulk",hint:"shirt.bulkh",icon:"6+",value:"6+",action:()=>{answer("quantity","6+","shirt.bulk");shirtPrint();}},
      {key:"common.unsure",hint:"common.unsureh",icon:"👕",value:"any",action:()=>{answer("quantity","any","common.unsure");shirtPrint();}}
    ],start);
  }

  function shirtPrint(){
    renderQuestion(3,"shirt.3","shirt.3h",[
      {key:"shirt.front",hint:"shirt.fronth",icon:"▣",value:"front",action:()=>{answer("print","front","shirt.front");showResult("shirt");}},
      {key:"shirt.both",hint:"shirt.bothh",icon:"▣ ▣",value:"both",action:()=>{answer("print","both","shirt.both");showResult("shirt");}},
      {key:"shirt.help",hint:"shirt.helph",icon:"✦",value:"help",action:()=>{answer("print","help","shirt.help");showResult("shirt");}}
    ],shirtQuantity);
  }

  function occasion(){
    renderQuestion(2,"gift.2","gift.2h",[
      {key:"gift.birthday",hint:"gift.birthdayh",img:"img/mug250-1.jpg",value:"birthday",action:()=>{answer("occasion","birthday","gift.birthday");giftBudget();}},
      {key:"gift.family",hint:"gift.familyh",img:"img/c5050-1.jpg",value:"family",action:()=>{answer("occasion","family","gift.family");giftBudget();}},
      {key:"gift.business",hint:"gift.businessh",icon:"👕",value:"business",action:()=>{answer("occasion","business","gift.business");giftBudget();}},
      {key:"gift.other",hint:"gift.otherh",icon:"♡",value:"other",action:()=>{answer("occasion","other","gift.other");giftBudget();}}
    ],start);
  }

  function giftBudget(){
    renderQuestion(3,"clock.3","clock.3h",[
      {key:"budget.low",hint:"budget.lowh",img:"img/mug250-1.jpg",value:"low",action:()=>{answer("budget","low","budget.low");showResult(state.occasion==="business"?"shirt":"mug250");}},
      {key:"budget.mid",hint:"budget.midh",img:"img/c5050-1.jpg",value:"mid",action:()=>{answer("budget","mid","budget.mid");showResult(state.occasion==="business"?"shirt":state.occasion==="family"?"frame6080":"cl50");}},
      {key:"budget.high",hint:"budget.highh",img:"img/mug799-1.jpg",value:"high",action:()=>{answer("budget","high","budget.high");showResult(state.occasion==="family"?"cl60":"mug799");}},
      {key:"budget.any",hint:"budget.anyh",icon:"♡",value:"any",action:()=>{answer("budget","any","budget.any");showResult(state.occasion==="business"?"shirt":"cl50");}}
    ],occasion);
  }

  function orderMessage(product){
    const lines=[tr("order.intro"),"",`${tr("result.kicker")}: ${tr(product.name)}`,`${tr("order.answers")}: ${state.answers.map(item=>item.label).join(" · ")}`,tr("order.source")];
    return lines.join("\n");
  }

  function showResult(productKey){
    const product=products[productKey];
    stepLabel.textContent=`${tr("q.step")} 3 / 3`;
    bar.style.width="100%";
    const media=product.img?`<img src="${esc(product.img)}" alt="${esc(tr(product.name))}">`:`<span aria-hidden="true">${esc(product.icon || "✦")}</span>`;
    const price=product.price?`${esc(tr("result.from"))} ฿${product.price}`:esc(tr("result.quote"));
    body.innerHTML=`<div class="home-result"><div class="home-result-media">${media}</div><div><div class="home-result-kicker">${esc(tr("result.kicker"))}</div><h2>${esc(tr(product.name))}</h2><div class="home-result-sub">${esc(tr(product.sub))}</div><strong class="home-result-price">${price}</strong><div class="home-result-actions"><button class="btn btn-line" type="button" data-result-line>${esc(tr("result.order"))}</button><a class="btn btn-ghost" href="shop.html">${esc(tr("result.catalog"))}</a><button class="btn btn-ghost" type="button" data-result-restart>${esc(tr("result.restart"))}</button></div><div class="home-result-note">${esc(tr("result.note"))}</div></div></div>`;
    body.querySelector("[data-result-line]").addEventListener("click",()=>{
      emit("line_click",{product:productKey});
      if(typeof goToChat==="function") goToChat(orderMessage(product));
      else window.open("https://line.me/R/ti/p/@724hqotw","_blank","noopener");
    });
    body.querySelector("[data-result-restart]").addEventListener("click",start);
    emit("result",{product:productKey});
  }

  document.addEventListener("DOMContentLoaded",()=>{
    localizeStatic();
    start();
    document.querySelectorAll(".langsw button").forEach(button=>button.addEventListener("click",()=>{
      localizeStatic();
      start();
    }));
  });
})();
