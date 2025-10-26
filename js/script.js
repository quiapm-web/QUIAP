// Add dynamic content to the profile website
document.addEventListener("DOMContentLoaded", () => {
  // Set dynamic year in the footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Example data
  const experienceData = [
    {
      title: "Jr. IT Specialist",
      company: "Hi-Precision Diagnostic",
      duration: "2025",
      description: "IT Department",
    },
    {
      title: "Project Technical Support II",
      company:
        "Aurora State College of Technology / Department of Science and Technology",
      duration: "2023 - 2024",
      description:
        "Intellectual Property and Technology Business Management Project",
    },
    {
      title: "Technical Science Research Assistant I",
      company: "Aurora State College of Technology",
      duration: "2019 - 2023",
      description: "Research and Development.",
    },
    {
      title: "IT Support Intern",
      company: "MERALCO",
      duration: "2016 - 2016",
      description: "On the Job Training.",
    },
  ];

  const educationData = [
    {
      degree: "Bachelor of Science in Information and Technology - College",
      institution: "Aurora State College of Technology",
      year: "2013-2017",
    },
    {
      degree: "High School",
      institution: "Baler National High School",
      year: "2009-2013",
    },
    {
      degree: "Elementary",
      institution: "Carmen T. Valezuela Elementary School",
      year: "2003-2009",
    },
  ];

  const trainingData = [
    {
      title:
        "Advanced Web DevelopmentMERN Training + OpenJS Application Developer (JSNAD) Certification Prep",
      conductedBy:
        "Department of Information and Communications Technology (DICT)",
      date: {
        from: "11/01/2024",
        to: "12/27/2024",
      },
    },
    {
      title:
        "Microsoft Azure Fundamentals (AZ-900) by Microsoft Press (4h 11m)",
      conductedBy: "Online Course",
      date: {
        from: "10/21/2024",
        to: "10/21/2024",
      },
    },
    {
      title:
        "Build Your Generative AI Productivity Skills with Microsoft and LinkedIn (4h 51m)",
      conductedBy: "Online Course",
      date: {
        from: "10/10/2024",
        to: "10/10/2024",
      },
    },
    {
      title:
        "Prepare for the Cisco Certified Network Associate (CCNA) (200-301) Certification Exam (5h 20m)",
      conductedBy: "Online Course",
      date: {
        from: "10/07/2024",
        to: "10/07/2024",
      },
    },
    {
      title: "CompTIA A+ Core 2 (220-1102) – (17h)",
      conductedBy: "Online Course",
      date: {
        from: "09/08/2024",
        to: "10/08/2024",
      },
    },
    {
      title: "Learning ITIL® - (1h 38m)",
      conductedBy: "Online Course",
      date: {
        from: "09/04/2024",
        to: "10/04/2024",
      },
    },
    {
      title: "CompTIA A+ Core 1 (220-1101) – (15h)",
      conductedBy: "Online Course",
      date: {
        from: "08/29/2024",
        to: "08/31/2024",
      },
    },
    {
      title:
        "2024 Agri-Aqua Innovation Pitch Fest (AIPF 2024) “Technology Pitcher”",
      conductedBy:
        "Department of Science and Technology Philippine Council for Agriculture, Aquatic, and Natural Resources Research and Development (DOST-PCAARRD), Association of PAQE Professional (APP), and Pampanga State Agricultural University (PSAU)",
      date: {
        from: "08/16/2024",
        to: "08/16/2024",
      },
    },
    {
      title: "2nd DOST-PCAARRD Technology Promotion Mentorship Series (TPMS)",
      conductedBy: "Department of Science and Technology (DOST)",
      date: {
        from: "06/11/2024",
        to: "08/15/2024",
      },
    },
    {
      title: "DOST-PCAARRD Agribusiness Mentorship Series (ABMS)",
      conductedBy: "Department of Science and Technology (DOST)",
      date: {
        from: "04/24/2024",
        to: "05/24/2024",
      },
    },
    {
      title:
        "6th DOST-PCAARRD Intellectual Property Master Class (Non-Chemical Patenting)",
      conductedBy: "Department of Science and Technology (DOST)",
      date: {
        from: "11/07/2023",
        to: "01/26/2024",
      },
    },
    {
      title: "Training-Workshop on Poster Development and Basic Photography",
      conductedBy: "Central Luzon State University (CLSU)",
      date: {
        from: "06/21/2022",
        to: "06/22/2022",
      },
    },
    {
      title:
        "5-Days Training-Workshop on Gender-Based Approach: Web Design Using Photoshop",
      conductedBy:
        "Department of Information and Communications Technology (DICT)",
      date: {
        from: "09/17/2020",
        to: "09/17/2020",
      },
    },
    {
      title:
        "Seminar-Workshop on the Use of Statistical Softwares for Social and Experimental Researches",
      conductedBy:
        "Research and Development Services Office-Aurora State College of Technology",
      date: {
        from: "07/27/2020",
        to: "07/30/2020",
      },
    },
    {
      title:
        "Risk Management Principles and Guidelines Based on ISO 31000:2018",
      conductedBy: "Aurora State College of Technology",
      date: {
        from: "02/03/2020",
        to: "02/03/2020",
      },
    },
    {
      title:
        "ISO 9001:2015 Quality Management System #Awareness Training #Documentation Training",
      conductedBy: "Aurora State College of Technology",
      date: {
        from: "02/02/2020",
        to: "02/02/2020",
      },
    },
    {
      title: "National Certificate II (NCII)",
      conductedBy: "TESDA",
      date: {
        from: "05/05/2015",
        to: "05/05/2015",
      },
    },
  ];

  const skillsData = [
    "React",
    "Node.js",
    "MongoDB",
    "Expres.js",
    "POSTMAN",
    "JavaScript",
    "Python",
    "HTML/CSS",
    "GitHub",
    "Network Security",
    "Cloud Computing",
    "Canva",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "InDesign",
    "Adobe Acrobat",
    "Microsoft Office",
  ];

  const hobbyData = [
    "Playing Acoustic Guitar",
    "Singing",
    "Song Writing",
    "Surf Instructor",
    "Photography",
  ];

  const awardsData = [
    {
      name: "ASCOT 28th Foundation Anniversary Araw ng Parangal 2021 - For designing the official logo of the Research and Development Office",
      year: "2022",
    },
  ];

  const membershipData = [
    {
      name: "Philippine Institute of Cyber Security Professionals",
      year: "2024 - Present",
    },
  ];

  // Populate Experience
  const experienceList = document.getElementById("experience-list");
  experienceData.forEach((exp) => {
    const li = document.createElement("li");
    li.innerHTML = `<h3>${exp.title} - ${exp.company}</h3>
                        <p><strong>Duration:</strong> ${exp.duration}</p>
                        <p>${exp.description}</p>`;
    experienceList.appendChild(li);
  });

  // Populate Education
  const educationList = document.getElementById("education-list");
  educationData.forEach((edu) => {
    const li = document.createElement("li");
    li.innerHTML = `<h3>${edu.degree}</h3>
                        <p><strong>Institution:</strong> ${edu.institution}</p>
                        <p><strong>Year:</strong> ${edu.year}</p>`;
    educationList.appendChild(li);
  });

  const trainingList = document.getElementById("training-list");
  trainingData.forEach((training) => {
    const li = document.createElement("li");
    li.innerHTML = `<h3>${training.title}</h3>
                    <p><strong>Conducted by:</strong> ${training.conductedBy}</p>
                    <p><strong>Duration:</strong> ${training.date.from} - ${training.date.to}</p>`;
    trainingList.appendChild(li);
  });

  // Populate Skills
  const skillsList = document.getElementById("skills-list");
  skillsData.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  // Populate Hobby
  const hobbyList = document.getElementById("hobby-list");
  hobbyData.forEach((hobby) => {
    const li = document.createElement("li");
    li.textContent = hobby;
    hobbyList.appendChild(li);
  });

  // Populate Awards & Seminars
  const awardsList = document.getElementById("awards-list");
  awardsData.forEach((award) => {
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = "https://www.facebook.com/share/p/1DzTv6b2hZ/"; // Hardcoded URL
    link.textContent = `${award.name} - ${award.year}`; // Set the text
    link.target = "_blank"; // Open link in a new tab
    li.appendChild(link); // Add the link to the list item
    awardsList.appendChild(li);
  });

  // Populate Membership
  const membershipList = document.getElementById("membership-list");
  membershipData.forEach((membership) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${membership.name}</strong> - ${membership.year}`;
    membershipList.appendChild(li);
  });

  // Scroll effect for profile picture
  document.addEventListener("scroll", function () {
    const profileContainer = document.querySelector(".profile-container");
    const profilePhoto = document.querySelector(".profile-photo");
    const scrollY = window.scrollY;

    // Calculate scaling and positioning based on scroll
    const maxScroll = 300; // Adjust this value to control when the transition completes
    const scale = Math.max(0.5, 1 - scrollY / maxScroll); // Scale down to 50% of original size
    const newSize = 150 * scale; // Adjust size based on scale

    // Move to the top-left and resize
    if (scrollY > 0) {
      profileContainer.style.top = "20px"; // Move to the top
      profileContainer.style.left = "20px"; // Move to the left
      profilePhoto.style.width = `${newSize}px`; // Resize width
      profilePhoto.style.height = `${newSize}px`; // Resize height
    } else {
      // Reset to original position and size
      profileContainer.style.top = "10%";
      profileContainer.style.left = "5%";
      profilePhoto.style.width = "150px";
      profilePhoto.style.height = "150px";
    }
  });
});
