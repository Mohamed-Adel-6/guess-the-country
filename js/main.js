let btnMood = document.querySelector(".switch input");
let InfoGame = document.querySelector(".info-game");
let navContinent = document.querySelector(".continent span");
let flag = document.querySelector(".image img");
let hint = document.querySelector(".about-country");
let hintBtn = document.querySelector(".info .hint");
let submit = document.querySelector(".submit");
let inputValue = document.querySelector(".input input");
// country data
let country = [
  {
    flag: "egypt",
    name: "مصر",
    Continent: "افرقيا",
    hints: [
      "العاصمه تكون القاهره",
      "تحتوي علي الاهرامات",
      "تطل علي البحر الابيض والبحر الاحمر",
      "عدد السكان 104 مليون نسمه",
      "يصب نهر النيل فيها",
    ],
  },
  {
    flag: "algeria",
    name: "الجزائر",
    Continent: "افرقيا",
    hints: [
      "تسمي بلد المليون شهيد",
      "تطل علي البحر البيض",
      "عدد السكان 45 مليون نسمه",
      "من دول المغرب العربي",
    ],
  },
  {
    flag: "bahrain",
    name: "البحرين",
    Continent: "اسيا",
    hints: [
      "العاصمه تكون المنامه",
      "ضمن دول الخليج العربي",
      "عدد السكان 1 مليون و 800 الف نسمه",
      "تعبر اصغر دوله عربيه",
    ],
  },
  {
    flag: "comoros",
    name: "جزر القمر",
    Continent: "افرقيا",
    hints: [
      "العاصمه تكون موروني",
      " ثالث اصغر دوله في افرقيا",
      "عدد السكان  798 الف نسمه",
    ],
  },
  {
    flag: "jibouti",
    name: "جيبوتي",
    Continent: "افرقيا",
    hints: [
      "ضمن دول  القرن الافريقي",
      "عدد السكات 990 الف نسمه",
      "لها حدود مع اثيوبيا و المغرب والصومال",
      "تطل علي البحر الاحمر وخليج عدن",
    ],
  },
  {
    flag: "iraq",
    name: "العراق",
    Continent: "اسيا",
    hints: [
      "العاصمه تكون بغداد",
      " تطل علي الخليج العربي",
      "عدد السكات 37 مليون نسمه ",
      "  تسمي بلاد ما بين النهرين ",
    ],
  },
  {
    flag: "Jordan",
    name: "الاردن",
    Continent: "اسيا",
    hints: [
      "العاصمه تكون عمان",
      "ضمن دول الخليج العربي",
      "عدد السكات 10 مليون نسمه",
      " تحتوي علي البتراء",
    ],
  },
  {
    flag: "kuwait",
    name: "الكويت",
    Continent: "اسيا",
    hints: [
      "عملتها اعلي عمله عربيه منحيث القيمه",
      "احدي دول مجلس التعاون الخليجي",
      "ضمن دول الخليج العربي",
      "عدد السكات 4 مليون و 200 الف نسمه",
      " تطل علي الخليج العربي",
    ],
  },
  {
    flag: "lebanon",
    name: "لبنان",
    Continent: "اسيا",
    hints: [
      "العاصمه تكون بيروت",
      "تطل علي البحر المتوسط",
      "عدد السكات 6 مليون و 800 الف نسمه",
      " اكتر دوله عربيه تحتوي علي ديانات",
    ],
  },
  {
    flag: "libya",
    name: "ليبيا",
    Continent: "افرقيا",
    hints: [
      "العاصمه تكون طرابلس",
      "تطل علي البحر الابيض المتوسط",
      "العمله هي الدينار",
      "عدد السكان 6 مليون و 600 الف نسمه",
    ],
  },
  {
    flag: "mauritania",
    name: "مورتنيا",
    Continent: "افرقيا",
    hints: [
      "العاصمه تكون نواكشوط",
      "تطل علي المحيط الاطلسي",
      "عدد السكات 4 مليون و 600 الف نسمه",
      "دوله عربيه مسلمه",
    ],
  },
  {
    flag: "morocco",
    name: "المغرب",
    Continent: "افرقيا",
    hints: [
      "العاصمه تكون الرباط",
      "تطل علي المحيط الاطلسي و البحر الابيض المتوسط",
      "عدد السكات 37 مليون نسمه",
      "العمله هي الدرهم ",
    ],
  },
  {
    flag: "oman",
    name: "عمان",
    Continent: "اسيا",
    hints: [
      "العاصمه تكون مسقط",
      "تطل علي بحر العرب المحيط الهندي",
      "دوله عربيه",
      "عدد السكان 4 مليون نسمه",
    ],
  },
  {
    flag: "palestine",
    name: "فلسطين",
    Continent: "اسيا",
    hints: [
      "العاصمه تكون القدس",
      "لها مكانه مقدسه",
      "عدد السكات 5 مليون ",
      "العمله هي الجنيه",
    ],
  },
  {
    flag: "qatar",
    name: "قطر",
    Continent: "اسيا",
    hints: [
      "العاصمه تكون الدوحه",
      "العمله هي الريال",
      "عدد السكات 3 مليون نسمه",
      "اول دوله عربيه تضم كأس العالم لكره القدم",
    ],
  },
  {
    flag: "saudi",
    name: "السعوديه",
    Continent: "اسيا",
    hints: [
      "العاصمه تكون الرياض",
      "تحتوي علي الكعبه المشرفه",
      "عدد السكات 36 مليون نسمه",
      "العمله هي الريال",
    ],
  },
  {
    flag: "somalia",
    name: "الصومال",
    Continent: "افرقيا",
    hints: [
      "العاصمه تكون مقدشيو",
      "دولع عربيه مسلمه",
      "عدد السكات 17 مليون الف نسمه",
      "تعتبر من افقر الدول العربيه",
    ],
  },
  {
    flag: "sudan",
    name: "السودان",
    Continent: "افرقيا",
    hints: [
      "العاصمه تكون الخرطوم",
      "دوله عربيه مسلمه",
      "عدد السكات 45 مليون و 600 الف نسمه",
      "قام بها حرب اهليه وانقسمت الي دولتين",
    ],
  },
  {
    flag: "syria",
    name: "سوريا",
    Continent: "اسيا",
    hints: [
      "العاصمه تكون دمشق",
      "دوله عربيه مسلمه",
      "عدد السكات 21 مليون نسمه",
      "العمله هي الجنيه",
      "كان هناك اتحاد بينها وبين مصر",
    ],
  },
  {
    flag: "tunisia",
    name: "تونس",
    Continent: "افرقيا",
    hints: [
      "دوله عربيه مسلمه",
      "العمله هي الدينار",
      "عدد السكات 12 مليون    ",
      "تطل علي البحر اابيض المتوسط",
    ],
  },
  {
    flag: "emirates",
    name: "الامارات",
    Continent: "اسيا",
    hints: [
      "العاصمه تكون ابو ظبي",
      "تحتوي علي اطول برج في العالم",
      "تعتبر من اكبر الدول العربيه من حيث السياحه",
      "العمله هي الدرهم",
    ],
  },
  {
    flag: "yemen",
    name: "اليمن",
    Continent: "اسيا",
    hints: [
      "العاصمه تكون صنعاء",
      "دوله عربيه مسلمه",
      "عدد السكات 33 مليون نسمه",
      "العمله هي الريال",
    ],
  },
];
// get random country
random();
function random() {
  let wineCount = 0;
  let randomCountry = country[Math.floor(Math.random() * country.length)];
  let flagCountry = randomCountry.flag;
  let nameCountry = randomCountry.name;
  let continentCountry = randomCountry.Continent;
  let Hint = randomCountry.hints;
  let bullets = document.querySelector(".bullets span");
  // add the continent to nav
  navContinent.innerHTML = continentCountry;
  // add flag to page
  flag.src = `imgs/${flagCountry}.png`;
  // add hints
  funHint();
  function funHint() {
    let count = 0;
    hintBtn.onclick = () => {
      count += 1;
      if (count < Hint.length) {
        document.querySelector(".hintSound").play();
        hint.innerHTML = Hint[count];
      } else {
        hintBtn.classList.add("done");
      }
    };
    hint.innerHTML = Hint[count];
  }

  let life = 5;
  bullets.innerHTML = life;
  submit.onclick = () => {
    if (inputValue.value === nameCountry) {
      random();
      inputValue.value = "";
      document.querySelector(".sucsess").play();
      wineCount = wineCount + 1;
    } else {
      life = life - 1;
      if (life > 0) {
        document.querySelector(".fail").play();
        bullets.innerHTML = life;
      }
      if (life === 0) {
        document.querySelector(".lose").play();
        let overlay = document.createElement("div");
        overlay.className = "overlay";
        document.body.appendChild(overlay);
        let InfoCard = document.createElement("div");
        InfoCard.className = "info-card";

        let title = document.createElement("h3");
        title.className = "title-info";
        title.appendChild(document.createTextNode("لقد خسرت"));
        let pra = document.createElement("p");
        pra.className = "pra";
        pra.appendChild(document.createTextNode(`الدوله هي ${nameCountry}`));
        let bodyInfo = document.createElement("button");
        bodyInfo.className = "replay";
        bodyInfo.appendChild(document.createTextNode("اعاده اللعب"));
        bodyInfo.onclick = () => {
          window.location.reload();
        };
        InfoCard.appendChild(title);
        InfoCard.appendChild(pra);
        InfoCard.appendChild(bodyInfo);
        document.body.appendChild(overlay);
        document.body.appendChild(InfoCard);
      }
    }
  };
}

// create dark mood
btnMood.onclick = () => {
  if (btnMood.checked === true) {
    document.documentElement.style.setProperty("--main-color", "white");
    document.documentElement.style.setProperty(
      "--second-background",
      "#474747"
    );
    document.documentElement.style.setProperty("--background-color", "#202124");
  } else {
    document.documentElement.style.setProperty("--main-color", "black");
    document.documentElement.style.setProperty(
      "--second-background",
      "#f6f6f6"
    );
    document.documentElement.style.setProperty("--background-color", "white");
  }
};

// create info game
InfoGame.onclick = function MainInfo() {
  let overlay = document.createElement("div");
  overlay.className = "overlay";

  let InfoCard = document.createElement("div");
  InfoCard.className = "info-card";

  let title = document.createElement("h3");
  title.className = "title-info";
  title.appendChild(document.createTextNode("معلومات اللعبه"));

  let bodyInfo = document.createElement("p");
  bodyInfo.className = "body-info";
  let bodyInfoText = document.createTextNode(" خمن الدوله لعبة من صنع محمد عادل. تحتوي هذه اللعبة على أعلام الدول ولديك 5 تلميحات لهذه الدولة. عليك تخمين اسم البلد ولديك 5 أخطاء فقط ويجب عدم ترك مسافات بعد الكلمة او قبلها و عند النتهاء من التخمين يجب الضغط علي زر تأكيد .");
  bodyInfo.appendChild(bodyInfoText);
  InfoCard.appendChild(title);
  InfoCard.appendChild(bodyInfo);
  document.body.appendChild(overlay);
  document.body.appendChild(InfoCard);
  overlay.onclick = () => {
    overlay.remove();
    InfoCard.remove();
  };
};
