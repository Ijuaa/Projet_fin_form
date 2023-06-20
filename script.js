document.addEventListener("DOMContentLoaded", function() {
  const industrySelect = document.querySelector("#industrySelect");
  const jobSelect = document.querySelector("#jobSelect");
  const teleworkCheckbox = document.querySelector("#teleworkCheckbox");
  
  const jobOffers = [
  {
   "id": "0",
    "name": "Technicien réseau",
    "recruiter": "John Doe",
    "description": "....",
    "keywords": ["Informatique", "Network"],
    "picture": "",
    "telework": true
  },
  {
    "id": "1",
    "name": "développeur web",
    "recruiter": "Jane Smith",
    "description": "....",
    "keywords": ["Informatique", "Web Development"],
    "picture": "",
    "telework": false
  },
  {
    "id": "2",
    "name": "architecte",
    "recruiter": "Archientrprise",
    "description": "....",
    "keywords": ["BTP", "Architecture"],
    "picture": "Img/retouchées/architectetest.jpg",
    "telework": false,
    "salaire": "50000€ - 70000€"
  },
  {
    "id": "3",
    "name": "conducteur de travaux",
    "recruiter": "Construction Company",
    "description": "....",
    "keywords": ["BTP", "Construction"],
    "picture": "",
    "telework": false,
    "salaire": "40000€ - 60000€"
  },
  {
    "id": "4",
    "name": "Commercial",
    "recruiter": "Carroufour",
    "description": "....",
    "keywords": ["Ventes", "Marketing"],
    "picture": "",
    "telework": true,
    "salaire": "30000€ - 50000€"
  },
  {
    "id": "5",
    "name": "chef de produit",
    "recruiter": "Louclerc",
    "description": "....",
    "keywords": ["Ventes", "Product Management"],
    "picture": "",
    "telework": true,
    "salaire": "40000€ - 60000€"
  },
  {
    "id": "6",
    "name": "infirmier",
    "recruiter": "Polyclinique Curlancy",
    "description": "....",
    "keywords": ["Santé", "Médical"],
    "picture": "",
    "telework": false,
    "salaire": "25000€ - 35000€"
  },
  {
    "id": "7",
    "name": "médecin généraliste",
    "recruiter": "Polyclinique de Bouzannes",
    "description": "....",
    "keywords": ["Santé", "Medecine"],
    "picture": "",
    "telework": false,
    "salaire": "80000€ - 120000€"
  },
  {
    "id": "8",
    "name": "enseignant",
    "recruiter": "Lycée Marco Chagoul",
    "description": "....",
    "keywords": ["Education"],
    "picture": "",
    "telework": true,
    "salaire": "30000€ - 40000€"
  },
  {
    "id": "9",
    "name": "formateur professionnel",
    "recruiter": "Basic Flute",
    "description": "....",
    "keywords": ["Education", "Entrainement"],
    "picture": "",
    "telework": true,
    "salaire": "35000€ - 50000€"
  },
  {
    "id": "10",
    "name": "concepteur graphique",
    "recruiter": "Design Agency",
    "description": "....",
    "keywords": ["Design", "Graphic Design"],
    "picture": "",
    "telework": true,
    "salaire": "30000€ - 45000€"
  },
  {
    "id": "11",
    "name": "ingénieur en génie civil",
    "recruiter": "Engineering Company",
    "description": "....",
    "keywords": ["Ingénierie", "Ingénieur civil"],
    "picture": "",
    "telework": false,
    "salaire": "50000€ - 80000€"
  },
  {
    "id": "12",
    "name": "technicien de laboratoire",
    "recruiter": "Laboratoire Gournier",
    "description": "....",
    "keywords": ["Science", "Laboratory Technician"],
    "picture": "",
    "telework": false,
    "salaire": "25000€ - 40000€"
  },
  {
    "id": "13",
    "name": "analyste financier",
    "recruiter": "BNP pariboule",
    "description": "....",
    "keywords": ["Finance", "Financial Analysis"],
    "picture": "",
    "telework": true,
    "salaire": "40000€ - 60000€"
  },
  {
    "id": "14",
    "name": "juriste",
    "recruiter": "Phoenix Wright Industry",
    "description": "....",
    "keywords": ["Droit", "Pénal"],
    "picture": "",
    "telework": true,
    "salaire": "45000€ - 70000€"
  },
  {
    "id": "15",
    "name": "chef de projet",
    "recruiter": "Management Company",
    "description": "....",
    "keywords": ["Management", "Project Management"],
    "picture": "",
    "telework": true,
    "salaire": "50000€ - 80000€"
  },
  {
    "id": "16",
    "name": "chef cuisinier",
    "recruiter": "Les Crayoures",
    "description": "....",
    "keywords": "Restauration",
    "picture": "",
    "telework": false,
    "salaire": "30000€ - 50000€"
  },
  {
    "id": "17",
    "name": "serveur",
    "recruiter": "Les Crayoures",
    "description": "....",
    "keywords": ["Restauration", "Service"],
    "picture": "",
    "telework": false,
    "salaire": "20000€ - 30000€"
  }
];

// Il faut reussir à redimmensionner les images pour en faire des "cartes" de tailles égales


function populateJobSelect() {
  let selectedIndustry = industrySelect.value;
  let filteredJobs = [];
  
  if (selectedIndustry === "all") {
    filteredJobs = jobOffers;
  } else {
    filteredJobs = jobOffers.filter(function (offer) {
      return offer.keywords.includes(selectedIndustry);
    });
  }
  
  jobSelect.innerHTML = "<option value='all'>Tous les métiers</option>";
  
  filteredJobs.forEach(function (job) {
    let option = document.createElement("option");
    option.value = job.id;
    option.textContent = job.name;
    jobSelect.appendChild(option);
  });
}

function displayMatchingCards() {
  let selectedIndustry = industrySelect.value;
  let selectedJob = jobSelect.value;
  let teleworkOnly = teleworkCheckbox.checked;
  
  let matchingCards = jobOffers.filter(function (offer) {
    let matchIndustry = (selectedIndustry === "all" || offer.keywords.includes(selectedIndustry));
    let matchJob = (selectedJob === "all" || offer.id === selectedJob);
    let matchTelework = (!teleworkOnly || offer.telework);
    
    return matchIndustry && matchJob && matchTelework;
  });
  
  let matchingCardsContainer = document.querySelector("#matchingCards");
  matchingCardsContainer.innerHTML = "";
  
  matchingCards.forEach(function (card) {
    let cardElement = document.createElement("div");
    cardElement.innerHTML = "<h2>" + card.name + "</h2>" +
    "<p>Recruiter: " + card.recruiter + "</p>" +
    "<p>Description: " + card.description + "</p>" +
    "<img src='" + card.picture + "' alt='Job Picture'>";
    matchingCardsContainer.appendChild(cardElement);
  });
}

industrySelect.addEventListener("change", populateJobSelect);
industrySelect.addEventListener("change", displayMatchingCards);

jobSelect.addEventListener("change", displayMatchingCards);
teleworkCheckbox.addEventListener("change", displayMatchingCards);
});