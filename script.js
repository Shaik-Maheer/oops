function startRecognition() {
  if (!('webkitSpeechRecognition' in window)) {
    alert('Speech recognition not supported!');
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-IN';
  recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
    document.getElementById('output').textContent = 'You said: ' + transcript;
  };
  recognition.start();
}

function toggleVoiceMode() {
  alert("Voice-only mode not yet implemented.");
}

function toggleHighContrast() {
  document.body.classList.toggle("high-contrast");
}

function toggleLargeText() {
  document.body.classList.toggle("large-text");
}

function toggleVoiceMode() {
  alert("Voice mode is toggled (to be implemented).");
}
function toggleHighContrast() {
  document.body.classList.toggle("high-contrast");
}
function toggleLargeText() {
  document.body.classList.toggle("large-text");
}
function toggleVoiceMode() {
  alert("Voice mode toggled (to be implemented).");
}
function toggleHighContrast() {
  document.body.classList.toggle("high-contrast");
}
function toggleLargeText() {
  document.body.classList.toggle("large-text");
}

function changeLanguage() {
  const lang = document.getElementById("language-select").value;

  const translations = {
    en: {
      title: "GramaSwasthya",
      greeting: "🙏 Namaste!",
      sub: "How can I help you today?",
      speak: "Tap to speak",
      symptoms: "Check Symptoms",
      records: "Health Records",
      sos: "SOS",
      emergency: "Emergency Services",
      nav: ["Home", "Symptoms", "Records", "Emergency", "Reminders"]
    },
    hi: {
      title: "ग्रामस्वास्थ्य",
      greeting: "🙏 नमस्ते!",
      sub: "आज मैं आपकी कैसे सहायता कर सकता हूँ?",
      speak: "बोलने के लिए टैप करें",
      symptoms: "लक्षण जानें",
      records: "स्वास्थ्य रिपोर्ट",
      sos: "आपातकालीन मदद",
      emergency: "आपातकाल सेवाएँ",
      nav: ["होम", "लक्षण", "रिपोर्ट", "आपातकाल", "रिमाइंडर"]
    },
    te: {
      title: "గ్రామస్వస్త్య",
      greeting: "🙏 నమస్తే!",
      sub: "ఈ రోజు నేను ఎలా సహాయపడగలను?",
      speak: "మాట్లాడటానికి టాప్ చేయండి",
      symptoms: "లక్షణాలు",
      records: "ఆరోగ్య నివేదికలు",
      sos: "ఎస్.ఓ.ఎస్",
      emergency: "అత్యవసర సేవలు",
      nav: ["హోమ్", "లక్షణాలు", "నివేదికలు", "అత్యవసరం", "గుర్తింపులు"]
    },
    kn: {
      title: "ಗ್ರಾಮಸ್ವಾಸ್ಥ್ಯ",
      greeting: "🙏 ನಮಸ್ಕಾರ!",
      sub: "ಈ ದಿನ ನಾನು ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
      speak: "ಮಾತನಾಡಲು ಟ್ಯಾಪ್ ಮಾಡಿ",
      symptoms: "ಲಕ್ಷಣಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
      records: "ಆರೋಗ್ಯ ದಾಖಲೆಗಳು",
      sos: "ಎಸ್ಒಎಸ್",
      emergency: "ತುರ್ತು ಸೇವೆಗಳು",
      nav: ["ಮುಖಪುಟ", "ಲಕ್ಷಣಗಳು", "ದಾಖಲೆಗಳು", "ತುರ್ತು", "ಜ್ಞಾಪನೆಗಳು"]
    }
  };

  const t = translations[lang];
  document.getElementById("title").textContent = t.title;
  document.getElementById("greeting-title").textContent = t.greeting;
  document.getElementById("greeting-sub").innerHTML = t.sub;
  document.getElementById("speak-text").textContent = t.speak;
  document.getElementById("symptoms").innerHTML = `🩺<br>${t.symptoms}`;
  document.getElementById("records").innerHTML = `📋<br>${t.records}`;
  document.getElementById("sos").innerHTML = `🚨<br>${t.sos}`;
  document.getElementById("emergency").innerHTML = `🆘<br>${t.emergency}`;
  const navs = ["nav-home", "nav-symptoms", "nav-records", "nav-emergency", "nav-reminders"];
  navs.forEach((id, i) => document.getElementById(id).innerHTML = `${document.getElementById(id).innerHTML.split("<br>")[0]}<br>${t.nav[i]}`);
}
