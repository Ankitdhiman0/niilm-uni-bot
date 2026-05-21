tailwind.config = {
  darkMode: "class",
};

/* ---------- NIILM University Chatbot Script ---------- */
const niilmData = {
  courses: {
    agriculture: [
      {
        name: "Diploma (Agriculture, Horticulture)",
        eligibility: "10th/12th Science",
        duration: "1-2 Years",
        annualFee: "₹45,000",
      },
      {
        name: "B.Sc. (Hons.) Agriculture/Horticulture",
        eligibility: "12th Science",
        duration: "4 Years",
        annualFee: "₹68,000",
      },
      {
        name: "M.Sc. Agriculture (Agronomy, Soil Science, etc.); Horticulture (Fruit/Vegetable/Floriculture); Forestry/Agri Extension",
        eligibility: "Relevant Graduation",
        duration: "2 Years",
        annualFee: "₹77,000",
      },
    ],

    appliedSciences: [
      {
        name: "B.Sc. Medical/Non-Medical",
        eligibility: "12th Science",
        duration: "3-4 Years",
        annualFee: "₹42,000",
      },
      {
        name: "B.Sc. Physics/Chemistry/Math/Microbiology/etc.",
        eligibility: "12th Science",
        duration: "3-4 Years",
        annualFee: "₹50,000",
      },
      {
        name: "B.Sc. Food Technology/Forensic Science",
        eligibility: "12th Science",
        duration: "3-4 Years",
        annualFee: "₹68,000",
      },
      {
        name: "PG Diploma Forensic Science/Food & Industrial Biotechnology",
        eligibility: "Science Graduation",
        duration: "1 Year",
        annualFee: "₹87,000",
      },
      {
        name: "M.Sc. Physics/Chemistry/Math/Botany/etc.",
        eligibility: "Relevant Graduation",
        duration: "2 Years",
        annualFee: "₹59,000",
      },
      {
        name: "M.Sc. Microbiology/Biochemistry/Biotech/Forensic/Environmental",
        eligibility: "Relevant Graduation",
        duration: "2 Years",
        annualFee: "₹65,000",
      },
    ],

    commerceManagement: [
      {
        name: "BBA (AICTE)",
        eligibility: "12th",
        duration: "3-4 Years",
        annualFee: "₹42,000",
      },
      {
        name: "BBA (Spl: AI/Cyber/Data/Web/Digital/HR/Finance/etc.)",
        eligibility: "12th",
        duration: "3-4 Years",
        annualFee: "₹50,000",
      },
      {
        name: "BMS (Management Studies)",
        eligibility: "12th",
        duration: "3 Years",
        annualFee: "₹42,000",
      },
      {
        name: "B.Com",
        eligibility: "12th",
        duration: "3-4 Years",
        annualFee: "₹40,000",
      },
      {
        name: "MBA (AICTE: Marketing/Finance/HR/etc./AI/Web)",
        eligibility: "Graduation",
        duration: "2 Years",
        annualFee: "₹77,000",
      },
      {
        name: "MBA (Executive: various incl. Safety/Supply Chain/Hospital/Digital)",
        eligibility: "Graduation + 3yr Exp",
        duration: "1 Year",
        annualFee: "₹1,85,000",
      },
      {
        name: "PGDBM",
        eligibility: "Graduation",
        duration: "1 Year",
        annualFee: "₹46,000",
      },
      {
        name: "M.Com",
        eligibility: "Relevant Graduation",
        duration: "2 Years",
        annualFee: "₹35,000",
      },
      {
        name: "Diploma Stock Market/Tally & Accounting",
        eligibility: "12th",
        duration: "1 Year",
        annualFee: "₹21,000/₹37,000",
      },
    ],

    computerScience: [
      {
        name: "Certificate (Fundamentals/Digital/Web/Graphic/Cloud)",
        eligibility: "10th",
        duration: "1 Year",
        annualFee: "₹45,000",
      },
      {
        name: "DCA",
        eligibility: "10th",
        duration: "1 Year",
        annualFee: "₹45,000",
      },
      {
        name: "PGDCA",
        eligibility: "Graduation",
        duration: "1 Year",
        annualFee: "₹47,000",
      },
      {
        name: "BCA (AICTE)",
        eligibility: "12th",
        duration: "3 Years",
        annualFee: "₹42,000",
      },
      {
        name: "BCA (Spl: AI/Cyber/Data/Web/Cloud)",
        eligibility: "12th",
        duration: "3 Years",
        annualFee: "₹54,000",
      },
      {
        name: "B.Sc. CS/IT/Web/Data/AI/Cloud",
        eligibility: "12th",
        duration: "3 Years",
        annualFee: "₹42,000",
      },
      {
        name: "M.Sc. CS/IT/Data Science",
        eligibility: "Graduation",
        duration: "2 Years",
        annualFee: "₹51,000",
      },
      {
        name: "MCA (AICTE)/LEET",
        eligibility: "BCA/PGDCA or M.Sc.IT/CS",
        duration: "1-2 Years",
        annualFee: "₹65,000",
      },
    ],

    engineeringTechnology: [
      {
        name: "Diploma/LEET (Computer/AI/ML/Data/Mech/Civil/Elec/ECE/Cyber)",
        eligibility: "10th/12th/ITI",
        duration: "2-3 Years",
        annualFee: "₹69,000",
      },
      {
        name: "B.Tech./LEET (CSE/AI/ML/Data/Cloud/IoT/Cyber/Blockchain/Civil/Elec/etc.)",
        eligibility: "12th PCM/Diploma",
        duration: "3-4 Years",
        annualFee: "₹96,000",
      },
      {
        name: "M.Tech. (CE/Robotics/ME/Elec/ECE/CSE/AI/Cloud/Cyber/IT/Data/IoT/Food/Agri)",
        eligibility: "B.Tech",
        duration: "2 Years",
        annualFee: "₹81,000",
      },
      {
        name: "Diploma/Bachelor Fire Tech/Safety/Industrial Safety",
        eligibility: "12th",
        duration: "1-3 Years",
        annualFee: "₹45,000",
      },
    ],

    designFashion: [
      {
        name: "Certificate Beauty & Wellness",
        eligibility: "10th",
        duration: "1 Year",
        annualFee: "₹42,000",
      },
      {
        name: "Diploma/Bachelor Beauty & Wellness",
        eligibility: "12th",
        duration: "1-3 Years",
        annualFee: "₹45,000",
      },
      {
        name: "B.Sc. Cosmetology",
        eligibility: "12th",
        duration: "3-4 Years",
        annualFee: "₹60,000",
      },
      {
        name: "Diploma Apparel/Fashion/Textile",
        eligibility: "10th/12th",
        duration: "2-3 Years",
        annualFee: "₹42,000",
      },
      {
        name: "B.Sc./B.Des. Fashion/Interior/UIUX/Game",
        eligibility: "12th",
        duration: "3-4 Years",
        annualFee: "₹60,000",
      },
      {
        name: "PG Diploma/M.Sc./M.Des. Fashion",
        eligibility: "Relevant Grad",
        duration: "1-2 Years",
        annualFee: "₹46,000-₹77,000",
      },
    ],

    hospitalityTourism: [
      {
        name: "Certificate (Tourism/F&B/Bakery/Culinary)",
        eligibility: "10th",
        duration: "1 Year",
        annualFee: "₹33,000",
      },
      {
        name: "Diploma Hotel Mgmt/F&B/Bakery/Culinary",
        eligibility: "10th/12th",
        duration: "1.5-5 Years",
        annualFee: "₹48,000",
      },
      {
        name: "BHMCT/BTTM",
        eligibility: "12th",
        duration: "4 Years",
        annualFee: "₹58,000",
      },
      {
        name: "MTTM/MHM",
        eligibility: "Graduation",
        duration: "2 Years",
        annualFee: "₹77,000",
      },
    ],

    socialSciencesHumanities: [
      {
        name: "Certificate/Diploma French/German/ECCE",
        eligibility: "10th",
        duration: "1-2 Years",
        annualFee: "₹53,000",
      },
      {
        name: "PG Diploma Guidance/Counselling/Translation/ECCE",
        eligibility: "Graduation",
        duration: "1 Year",
        annualFee: "₹39,000-₹53,000",
      },
      {
        name: "B.A./M.A. (English/Hindi/Punjabi/Sociology/History/Economics/etc./Yoga/Music)",
        eligibility: "12th/Grad",
        duration: "2-3 Years",
        annualFee: "₹34,000/₹35,000",
      },
    ],

    journalismMassComm: [
      {
        name: "Certificate (Digital/RJ/Script/Photo/PR)",
        eligibility: "12th",
        duration: "6 Months",
        annualFee: "₹22,500",
      },
      {
        name: "Diploma/PG Diploma JMC",
        eligibility: "12th/Grad",
        duration: "1 Year",
        annualFee: "₹45,000",
      },
      {
        name: "B.Sc./BA JMC/Film/Multimedia/Graphics/Animation",
        eligibility: "12th",
        duration: "3 Years",
        annualFee: "₹42,000",
      },
      {
        name: "M.Sc./MA JMC/Advertising/PR/Printing/Graphics",
        eligibility: "Grad/Relevant",
        duration: "2 Years",
        annualFee: "₹47,000",
      },
    ],

    legalStudies: [
      {
        name: "PG Diploma (Cyber/Criminology/Forensic/Labor/Business/IP)",
        eligibility: "Graduation",
        duration: "1 Year",
        annualFee: "₹87,000",
      },
      {
        name: "LL.B",
        eligibility: "Graduation 45%",
        duration: "3 Years",
        annualFee: "₹63,000",
      },
      {
        name: "BA LLB",
        eligibility: "12th 45%",
        duration: "5 Years",
        annualFee: "₹62,000",
      },
      {
        name: "LL.M",
        eligibility: "LLB",
        duration: "2 Years",
        annualFee: "₹85,000",
      },
    ],

    librarySciences: [
      {
        name: "D.Lib./B.Lib./M.Lib.",
        eligibility: "12th/Grad/B.Lib.",
        duration: "1 Year",
        annualFee: "₹39,000-₹54,000",
      },
    ],

    paramedicalAlliedHealth: [
      {
        name: "Diploma (Radiology/OT/Optometry/MLT/Critical Care/etc./Panchkarma/Hospital Admin)",
        eligibility: "10th/12th",
        duration: "1-3 Years",
        annualFee: "₹42,000-₹45,000",
      },
      {
        name: "B.Sc.(Hons.)/LEET (Emergency/Cardio/Dialysis/Respiratory/CSS/Physician)",
        eligibility: "12th/Diploma",
        duration: "2-4 Years",
        annualFee: "₹68,000",
      },
      {
        name: "M.Sc. (Radiology/OT/MLT/Respiratory/etc.)",
        eligibility: "Relevant Grad",
        duration: "2 Years",
        annualFee: "₹77,000",
      },
      {
        name: "B.Sc./M.Sc. Nutrition & Dietetics",
        eligibility: "12th/Relevant",
        duration: "3+1/2 Years",
        annualFee: "₹68,000/₹77,000",
      },
      {
        name: "MHA/BPH/MPH Public Health/Hospital Admin",
        eligibility: "Grad/12th",
        duration: "2-4 Years",
        annualFee: "₹77,000-₹85,000",
      },
    ],

    pharmaceuticalScience: [
      {
        name: "D.Pharm/B.Pharm/LEET",
        eligibility: "12th/D.Pharm",
        duration: "2-4 Years",
        annualFee: "₹1,10,000/₹84,000",
      },
      {
        name: "M.Sc. Pharmaceutical Sciences",
        eligibility: "B.Pharm",
        duration: "2 Years",
        annualFee: "₹55,000",
      },
    ],

    performingFineArts: [
      {
        name: "Diploma Art/Craft/Fine Arts",
        eligibility: "12th",
        duration: "2 Years",
        annualFee: "₹50,000",
      },
      {
        name: "BA/BFA/MA/MFA Fine/Performing/Applied/Sculpture",
        eligibility: "12th/Relevant",
        duration: "2-4 Years",
        annualFee: "₹45,000-₹50,000",
      },
    ],

    yogaPhysicalEducation: [
      {
        name: "Diploma/PG Diploma Yoga/DPES",
        eligibility: "12th/Grad",
        duration: "1-2 Years",
        annualFee: "₹37,000-₹46,000",
      },
      {
        name: "B.Sc./BPES Sports/Yogic/DPSE",
        eligibility: "12th",
        duration: "3 Years",
        annualFee: "₹42,000",
      },
      {
        name: "MPES/M.Sc. Physical Ed/Sports/Yogic",
        eligibility: "Grad",
        duration: "2 Years",
        annualFee: "₹35,000-₹42,000",
      },
    ],
  },

  admission: `📋 2026 Admission Process

🎯 Steps:
1. Online Application → niilmuniversity.ac.in/apply
2. Merit List → Online
3. Counseling → Seat allotment
4. Fee Payment → Semester-wise

📜 Eligibility:
UG: 10+2 with 45-50%
PG: Graduation with 45-50%

📅 Key Dates:
Applications: March 1 - July 15
Entrance: June
Session Start: August 1`,

  fees: `💰 Additional Fee Details
- Registration: ₹1,000 (one-time)
- Prospectus: ₹2,000 (one-time)
- Development Fee: ₹4,000-₹10,000/year
- Exam Fees: Separate
- Hostel: ₹70,000-₹90,000/year
- PhD: ₹50,000/sem`,

  contact: `📞 Contact Details
Admission: +91-9992800104
Admission Email: admission@nillmuniversity.ac.in
Email: info@niilmuniversity.ac.in

Campus: +91-9991115962
info@niilmuniversity.ac.in

NH- 152, Ambala Road,Kaithal( 136027 ) Haryana - India`,
};

/* ---------- ELEMENTS ---------- */
const elements = {
  chat: document.getElementById("chatMessages"),
  input: document.getElementById("messageInput"),
  sendBtn: document.getElementById("sendBtn"),
};

let isTyping = false;
let scrollHeighttopTyping = false;

/* ---------- INPUT ---------- */
elements.input.addEventListener("input", () => {
  elements.sendBtn.disabled = !elements.input.value.trim();
});

/* ---------- SEND ---------- */
function sendMessage(text) {
  if (!text.trim() || isTyping) return;

  stopTyping = false;

  addMessage(text, "user");
  elements.input.value = "";
  elements.sendBtn.disabled = true;

  document.getElementById("stopBtn").classList.remove("hidden");

  showTyping();

  setTimeout(() => {
    hideTyping();
    const response = getResponse(text.toLowerCase());
    typeMessage(response);
  }, 500);
}

/* ---------- LOCAL STORAGE ---------- */

const STORAGE_KEY = "niilm_chat_history";
const MAX_MESSAGES = 10;

/* Save messages */
function saveMessage(text, sender) {
  let history = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  history.push({
    text,
    sender,
  });

  // Keep only latest 10
  if (history.length > MAX_MESSAGES) {
    history = history.slice(history.length - MAX_MESSAGES);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

/* Load messages */
function loadMessages() {
  const history = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

  if (history.length === 0) return;

  // Remove welcome card if old chats exist
  const welcome = document.querySelector(".welcome-card");

  if (welcome) {
    welcome.remove();
  }

  history.forEach((msg) => {
    renderMessage(msg.text, msg.sender);
  });

  scrollToBottom();
}

/* Render message without saving again */
function renderMessage(text, sender) {
  const msg = document.createElement("div");

  msg.className = sender === "user" ? "user-msg" : "bot-msg";

  msg.innerHTML = text.replace(/\n/g, "<br>");

  elements.chat.appendChild(msg);
}

/* Clear history */
function clearHistory() {
  localStorage.removeItem(STORAGE_KEY);

  elements.chat.innerHTML = `
    <div class="welcome-card">
      👋 Welcome Back
    </div>
  `;
}

/* ---------- MESSAGE ---------- */
/* ---------- MESSAGE ---------- */
function addMessage(text, sender) {
  // Remove welcome card on first message
  const welcome = document.querySelector(".welcome-card");

  if (welcome) {
    welcome.remove();
  }

  const msg = document.createElement("div");

  msg.className = sender === "user" ? "user-msg" : "bot-msg";

  msg.innerHTML = text.replace(/\n/g, "<br>");

  elements.chat.appendChild(msg);

  // Save to localStorage
  saveMessage(text, sender);

  scrollToBottom();
}

/* ---------- TYPE EFFECT ---------- */
function typeMessage(text) {
  isTyping = true;

  const msg = document.createElement("div");
  msg.className = "bot-msg";
  elements.chat.appendChild(msg);

  let i = 0;

  function typing() {
    // 🛑 STOP LOGIC
    if (stopTyping) {
      saveMessage(text, "bot");

      isTyping = false;

      document.getElementById("stopBtn").classList.add("hidden");
      return;
    }

    if (i < text.length) {
      msg.innerHTML = text.substring(0, i + 1).replace(/\n/g, "<br>");

      i++;

      scrollToBottom();

      setTimeout(typing, 10);
    } else {
      isTyping = false;
      document.getElementById("stopBtn").classList.add("hidden");
    }
  }

  typing();
}

/* ---------- TYPING ---------- */
function showTyping() {
  const div = document.createElement("div");
  div.id = "typing";
  div.className = "bot-msg";
  div.textContent = "Typing...";
  elements.chat.appendChild(div);
  scrollToBottom();
}

function hideTyping() {
  const el = document.getElementById("typing");
  if (el) el.remove();
}

/* ---------- COURSE FORMATTER ---------- */
function formatCourses() {
  let output = "📚 Available Courses:\n\n";

  for (let category in niilmData.courses) {
    output += `🔹 ${category.toUpperCase()}\n`;

    niilmData.courses[category].forEach((course) => {
      output += `• ${course.name}\n`;
    });

    output += "\n";
  }

  return output;
}

/* ---------- SEARCH COURSE ---------- */
function searchCourse(msg) {
  msg = msg.toLowerCase();

  for (let category in niilmData.courses) {
    const categoryCourses = niilmData.courses[category];

    for (let course of categoryCourses) {
      if (course.name.toLowerCase().includes(msg)) {
        // Related courses
        let related = "";

        categoryCourses.forEach((c) => {
          if (c.name !== course.name) {
            related += `• ${c.name}\n`;
          }
        });

        return `🎓 ${course.name}

        
        ━━━━━━━━━━━━━━
        📌 Eligibility
        ${course.eligibility}
        
        ⏳ Duration
        ${course.duration}
        
        💰 Annual Fee
        ${course.annualFee}
        
        ━━━━━━━━━━━━━━
        🏫 Department
        ${category.replace(/([A-Z])/g, " $1").toUpperCase()}
        
        ━━━━━━━━━━━━━━
        📚 Related Courses
        ${related}
`;
      }
    }
  }

  return null;
}

/* ---------- RESPONSE ---------- */
function getResponse(msg) {
  const keywords = {
    courses: ["course", "courses", "program", "degree"],
    admission: ["admission", "apply", "form", "eligibility"],
    fees: ["fee", "fees", "cost", "price"],
    contact: ["contact", "phone", "email"],
  };

  // Specific course search (bca, mba, etc.)
  const specific = searchCourse(msg);
  if (specific) return specific;

  // Courses list
  if (keywords.courses.some((word) => msg.includes(word))) {
    return formatCourses();
  }

  // Other sections
  if (keywords.admission.some((word) => msg.includes(word))) {
    return niilmData.admission;
  }

  if (keywords.fees.some((word) => msg.includes(word))) {
    return niilmData.fees;
  }

  if (keywords.contact.some((word) => msg.includes(word))) {
    return niilmData.contact;
  }

  return `👋 NIILM Assistant

Ask about:
• Courses
• Admission
• Fees
• Contact

Or type course name like "BCA", "MBA", etc.`;
}

/* ---------- EVENTS ---------- */
elements.sendBtn.onclick = () => sendMessage(elements.input.value);

elements.input.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && !elements.sendBtn.disabled) {
    sendMessage(elements.input.value);
  }
});

/* ---------- THEME ---------- */

// Load saved theme on startup
(function () {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else if (savedTheme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    // First time → use system theme
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    document.documentElement.classList.toggle("dark", prefersDark);
  }
})();

// Toggle theme + save
function toggleDark() {
  const html = document.documentElement;

  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

document.getElementById("stopBtn").addEventListener("click", () => {
  stopTyping = true;
});

/* ---------- QUICK BUTTONS ---------- */
document.querySelectorAll(".quick-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    sendMessage(btn.textContent.toLowerCase());
  });
});

/* ---------- SCROLL ---------- */
function scrollToBottom() {
  elements.chat.scrollTop = elements.chat.scrollHeight;
}

/* ---------- CLEAR HISTORY ---------- */

function clearHistory() {
  localStorage.removeItem(STORAGE_KEY);

  elements.chat.innerHTML = `
    <!-- HERO CARD -->
    <div
      class="relative overflow-hidden rounded-[24px] px-8 p-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white flex items-center justify-center"
    >
      <div
        class="absolute top-0 right-0 w-48 h-48 bg-white/10 blur-3xl rounded-full"
      ></div>

      <div class="relative z-10">
        <h2 class="text-2xl font-bold text-center mb-2">
          Welcome to NIILM Assistant
        </h2>

        <p class="text-indigo-100 max-w-xl">
          Ask anything related to admissions, courses, fees, eligibility,
          placements, or university details.
        </p>

        <p
          class="text-indigo-100 max-w-xl mt-[1rem] text-center font-semibold p-1 border rounded-2xl"
        >
          Please enter exact names of courses to get details like M.Sc not msc.
        </p>

        <div class="flex flex-wrap gap-3 mt-6 text-black dark:text-white">
          <button class="quick-btn">Courses</button>

          <button class="quick-btn">Admission</button>

          <button class="quick-btn">Fees</button>

          <button class="quick-btn">Contact</button>

          <button class="quick-btn">MBA</button>

          <button class="quick-btn">BCA</button>
        </div>
      </div>
    </div>
  `;

  // Rebind quick buttons
  document.querySelectorAll(".quick-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      sendMessage(btn.textContent.toLowerCase());
    });
  });
}

/* ---------- LOAD OLD CHATS ---------- */

window.addEventListener("load", () => {
  loadMessages();
});
