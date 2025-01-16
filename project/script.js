const slides = document.querySelectorAll(".slides img");
let slideindex = 0;
let slideintervalid = null;
const slideDescriptions = {
    "en": [
        "Learn about london today",
        "The Real Reason Why You Have Allergies",
        "OpenAI's new o3 model freaks out computer scientists",
        "Is the Arcane series finally over?",
        "What is a Main sequence star?"
    ],
    "ka": [
        "ისწავლე ლონდონის შესახებ დღეს",
        "ნამდვილი მიზეზი, რის გამოც გაქვთ ალერგია",
        "OpenAI-ის ახალი o3 მოდელი აოცებს კომპიუტერულ მეცნიერებს",
        "სერიალი არკეინი საბოლოოდ დასრულდა?",
        "რა არის Main-sequence ვარსკვლავი?"
    ]
};

const slideDetDescriptions = {
    "en": [
        "London is the capital and largest city of both England and the United Kingdom, with a population of 8,866,180 in 2022. Its wider metropolitan area is the largest in Western Europe, with a population of 14.9 million.",
        "Allergies are more than just overreactions – they might be an evolutionary relic from a time when worms invaded our bodies daily. Watch Kurzgesagt's newest video for more.",
        "The new OpenAI model, though not yet widely available, is likely to power ChatGPT and other services eventually, and its capacity to independently tackle larger-scale projects could disrupt many professions."
        ,"In astronomy, the main sequence is a classification of stars which appear on plots of stellar color versus brightness as a continuous and distinctive band. Stars on this band are known as main-sequence stars",
        "Arcane (titled onscreen as Arcane: League of Legends) is a steampunk action-adventure television series created by Christian Linke and Alex Yee. It was produced by the French animation studio Fortiche under the supervision of Riot Games"
    ],
    "ka": [
        "ლონდონი არის ინგლისისა და გაერთიანებული სამეფოს დედაქალაქი და უდიდესი ქალაქი, 2022 წელს 8,866,180 მოსახლეობით. მისი ფართო მეტროპოლიტენი ყველაზე დიდია დასავლეთ ევროპაში, 14,9 მილიონი მოსახლეობით",
        "ალერგიები უფრო მეტია, ვიდრე უბრალოდ გადაჭარბებული რეაქცია - ისინი შეიძლება იყოს ევოლუციური რელიქვია იმ დროიდან, როდესაც ჭიები ყოველდღიურად შემოიჭრნენ ჩვენს სხეულში. უყურეთ Kurzgesagt-ის უახლეს ვიდეოს მეტისთვის.",
        "ახალი OpenAI მოდელი, თუმცა ჯერ კიდევ არ არის ფართოდ ხელმისაწვდომი, სავარაუდოდ, საბოლოოდ გააძლიერებს ChatGPT-ს და სხვა სერვისებს და მისმა შესაძლებლობამ დამოუკიდებლად მოახდინოს უფრო მასშტაბური პროექტები, შეიძლება ხელი შეუშალოს ბევრ პროფესიას."
        ,"ასტრონომიაში მთავარი თანმიმდევრობა არის ვარსკვლავების კლასიფიკაცია, რომლებიც ჩნდებიან ვარსკვლავური ფერის ნაკვეთებზე, სიკაშკაშის წინააღმდეგ, როგორც უწყვეტი და გამორჩეული ზოლი. ამ ზოლის ვარსკვლავები ცნობილია, როგორც მთავარი მიმდევრობის ვარსკვლავები",
        "Arcane (ეკრანზე სახელწოდებით Arcane: League of Legends) არის სტიმპანკ სამოქმედო-სათავგადასავლო სატელევიზიო სერიალი, შექმნილი კრისტიან ლინკესა და ალექს იის მიერ. იგი წარმოებულია ფრანგული ანიმაციური სტუდიის Fortice-ის მიერ Riot Games-ის მეთვალყურეობის ქვეშ"
    ]
};

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    const currentLang = localStorage.getItem("language") || "en"; // Default to "en" if no language is stored

    if (slides.length > 0) {
        slides[slideindex].classList.add("displaySlide");
        updateDescription(currentLang);
        slideintervalid = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideindex = 0;
    } else if (index < 0) {
        slideindex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    slides[slideindex].classList.add("displaySlide");
    const currentLang = localStorage.getItem("language") || "en"; // Get current language
    updateDescription(currentLang);
}

function nextSlide() {
    slideindex++;
    showSlide(slideindex);
}

function prvSlide() {
    slideindex--;
    showSlide(slideindex);
}

function updateDescription(currentLang) {
    const descriptionElement = document.getElementById("slider-description");
    const descriptionDetElement = document.getElementById("slider-details");

    descriptionElement.textContent = slideDescriptions[currentLang][slideindex];
    descriptionDetElement.textContent = slideDetDescriptions[currentLang][slideindex];
}

const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const image4 = document.getElementById('img4');
const image5 = document.getElementById('img5');
if (image1) {
    image1.addEventListener('click', () => {
        window.location.href = 'https://en.wikipedia.org/wiki/London'; 
    });
}

if (image2) {
    image2.addEventListener('click', () => {
        window.location.href = 'https://www.youtube.com/watch?v=9zCH37330f8'; 
    });
}

if (image3) {
    image3.addEventListener('click', () => {
        window.location.href = 'https://www.axios.com/2025/01/07/openai-o3-college-students-computer-science'; 
    });
}
if (image4) {
    image4.addEventListener('click', () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Arcane_(TV_series)'; 
    });
}
if (image5) {
    image5.addEventListener('click', () => {
        window.location.href = 'https://en.wikipedia.org/wiki/Main_sequence'; 
    });
}

function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthText = document.getElementById('password-strength');

    let strength = 'Weak';
    if (password.length >= 8) {
        if (/[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[@$!%*?&#]/.test(password)) {
            strength = 'Very Strong';
        } else if ((/[A-Z]/.test(password) || /[a-z]/.test(password)) && /\d/.test(password)) {
            strength = 'Strong';
        } else if (/[A-Z]/.test(password) || /[a-z]/.test(password) || /\d/.test(password)) {
            strength = 'Moderate';
        }
    }

    strengthText.textContent = `Password strength: ${strength}`;
    strengthText.style.color = {
        'Weak': 'red',
        'Moderate': 'orange',
        'Strong': 'green',
        'Very Strong': 'darkgreen'
    }[strength] || 'gray';
}

function finalVerification(){
    const email = document.getElementById('email').value;
    if (email.includes('@') && email.includes('.') && email.indexOf('@') < email.lastIndexOf('.')){
        console.log("test: valid");
    }else{
        alert("Invalid Email");
    }
    let pass1 = document.getElementById('password').value;
    let pass2 = document.getElementById('confirmPassword').value;
    if(pass1!=pass2 && pass1.length<6){
        alert("Passwords error");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
        updateContent(storedLanguage);
    } else {
        updateContent('ka');
    }

    const langEnButton = document.getElementById('lang-en');
    const langKaButton = document.getElementById('lang-ka');

    langEnButton.addEventListener('click', function() {
        updateContent('en');
        localStorage.setItem("language", 'en'); 
    });

    langKaButton.addEventListener('click', function() {
        updateContent('ka');
        localStorage.setItem("language", 'ka'); 
    });
});

function updateContent(language) {
    fetch("translations.json")
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll("[data-key]").forEach(element => {
                const key = element.getAttribute("data-key");
                if (translations[language][key]) {
                    element.textContent = translations[language][key];
                }
            });
        })
        .catch(error => console.error("Error loading translations:", error));
}
