const myanmarFont = document.getElementById("myanmarLanguage");

const nameTag = document.getElementById("name1");
const fatherTag = document.getElementById("father1");
const dateTag = document.getElementById("date");
const nationalityTag = document.getElementById("nationality1");
const genderTag = document.getElementById("gender1");
const NRCTag = document.getElementById("nrc1");
const maritalTag = document.getElementById("marital1");
const eduTag = document.getElementById("education1");
const workPositionTag = document.getElementById("workPosition1")
const contactTag = document.getElementById("contact1");
const addressTag = document.getElementById("address1");
const experiencesTag = document.getElementById("experiences1");

let changeFont = () => {
    document.getElementById("cv").innerText = "ကိုရေးရာဇဝင်"
    document.getElementById("name").innerText = "အမည်"
    document.getElementById("name1").placeholder = "သင်၏အမည်ကိုရေးပါ"
    document.getElementById("father").innerText = "အဖ အမည်"
    document.getElementById("father1").placeholder = "သင်၏ အဖအမည်ကိုရေးပါ"
    document.getElementById("dateOfBirth").innerText = "မွေးသက္ကရာဇ်"
    document.getElementById("nationality").innerText = "နိုင်ငံသား"
    document.getElementById("nationality1").placeholder = "လူမျိုးအမည် (ဥပမာ-ချင်း)"
    document.getElementById("gender").innerText = "ကျား/မ (လိင်)"
    document.getElementById("gender1").placeholder = "ကျား / မ / အခြား"
    document.getElementById("nrc").innerText = "မှတ်ပုံတင် အမှတ်"
    document.getElementById("nrc1").placeholder = "၉/ညဥန(နိုင်)၁၂၃၄၅၆"
    document.getElementById("marital").innerText = "အိမ်ထောင် ရှိ/မရှိ"
    document.getElementById("marital1").placeholder = "အိမ်ထောင်သည် / လူပျို"
    document.getElementById("education").innerText = "ပညာရေး"
    document.getElementById("education1").placeholder = "ဥပမာ ဆယ်တန်းအောင် (သို့) BE.Mechanical"
    document.getElementById("address").innerText = "နေရပ်လိပ်စာ အပြည့်အစုံ"
    document.getElementById("address1").placeholder = "မိမိလက်ရှိနေထိုင်သောဒေသ / မွေးရပ်မြေ / ..."
    document.getElementById("experiences").innerText = "အလုပ်အကိုင် အတွေ့အကြုံ"
    document.getElementById("workPosition").innerText = "လျောက်ထားလိုသည့် အလုပ်"
    document.getElementById("workPosition1").placeholder = "ဥပမာ မန်နေဂျာ"
    document.getElementById("contact").innerText = "ဆက်သွယ်ရန်လိပ်စာ"
    document.getElementById("contact1").placeholder = "ဖုန်းနံပါတ် / အီးမေးလ်"
    myanmarFont.innerText = " Change to English"
}

let fontChange = () => {
    document.getElementById("cv").innerText = "Curriculum Vitae"
    document.getElementById("name").innerText = "Name"
    document.getElementById("name1").placeholder = "Enter your full name"
    document.getElementById("father").innerText = "Father's Name"
    document.getElementById("father1").placeholder = "Enter your father's name"
    document.getElementById("dateOfBirth").innerText = "Date Of Birth"
    document.getElementById("nationality").innerText = "Nationality"
    document.getElementById("nationality1").placeholder = "Eg: Burmese"
    document.getElementById("gender").innerText = "Gender"
    document.getElementById("gender1").placeholder = "Male / Female / Other"
    document.getElementById("nrc").innerText = "N.R.C Number"
    document.getElementById("nrc1").placeholder = "Eg: 9/NyaOuNa(N)123456"
    document.getElementById("marital").innerText = "Marital Status"
    document.getElementById("marital1").placeholder = "Married / Single"
    document.getElementById("education").innerText = "Education"
    document.getElementById("education1").placeholder = "Eg: CDM Student (auto hired)"
    document.getElementById("address").innerText = "Address"
    document.getElementById("address1").placeholder = "Current Address / Hometown / etc..."
    document.getElementById("experiences").innerText = "Work Experiences"
    document.getElementById("workPosition").innerText = "Work Position"
    document.getElementById("workPosition1").placeholder = "Eg: Site Engineer"
    document.getElementById("contact").innerText = "Contact info"
    document.getElementById("contact1").placeholder = "Eg: 09-123456 / abcdef@gmail.com"
    myanmarFont.innerText = " Change to Myanmar"

}

let i = 0;
myanmarFont.addEventListener("click", () => {
    i++;
    if (i === 1) {
        changeFont();
    } else if (i === 2) {
        fontChange();
    } else {
        if (i === 3) {
            changeFont();
            return i = 1;
        }

    }
});

const generateTag = document.querySelector("#finalGenerate");

generateTag.addEventListener("click", ()=>{
    document.getElementsByTagName("body")[0].innerHTML = `<div class="container" style = "padding: 20px; margin-top: 60px; background-color: #BC8CF2;" > <h1> Just testing. I'm not done yet! </h1> </div>`
});



