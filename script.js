document.addEventListener("DOMContentLoaded", function() {
  const industrySelect = document.querySelector("#industrySelect");
  const jobSelect = document.querySelector("#jobSelect");
  const teleworkCheckbox = document.querySelector("#teleworkCheckbox");
  
  const jobOffers = [
  {
   "id": "0",
    "name": "Technicien réseau",
    "recruiter": "John Doe",
    "description": "Si tu aimes les spaghettis de câble, ce job est fait pour toi",
    "keywords": ["Informatique", "Network"],
    "picture": "",
    "telework": true
  },
  {
    "id": "1",
    "name": "développeur web",
    "recruiter": "Jane Smith",
    "description": "c'est toi qu'on appelle quand il faut réparer l'imprimante?",
    "keywords": ["Informatique", "Web Development"],
    "picture": "",
    "telework": false
  },
  {
    "id": "2",
    "name": "architecte",
    "recruiter": "Archientreprise",
    "description": "Créateur de rêves immobiliers.",
    "keywords": ["BTP", "Architecture"],
    "picture": "Img/retouchées/architectetest.jpg",
    "telework": false,
    "salaire": "50000€ - 70000€"
  },
  {
    "id": "3",
    "name": "conducteur de travaux",
    "recruiter": "Construction Company",
    "description": "Chef d'orchestre des chantiers.",
    "keywords": ["BTP", "Construction"],
    "picture": "",
    "telework": false,
    "salaire": "40000€ - 60000€"
  },
  {
    "id": "4",
    "name": "Commercial",
    "recruiter": "Carroufour",
    "description": "Maître de l'art de convaincre.",
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
    "description": "Déteste les pommes.",
    "keywords": ["Santé", "Medecine"],
    "picture": "",
    "telework": false,
    "salaire": "80000€ - 120000€"
  },
  {
    "id": "8",
    "name": "enseignant",
    "recruiter": "Lycée Marco Chagoul",
    "description": "Guide des esprits en devenir.",
    "keywords": ["Education"],
    "picture": "",
    "telework": true,
    "salaire": "30000€ - 40000€"
  },
  {
    "id": "9",
    "name": "formateur professionnel",
    "recruiter": "Basic Flute",
    "description": "C'est comme un formateur normal mais pro",
    "keywords": ["Education", "Entrainement"],
    "picture": "",
    "telework": true,
    "salaire": "35000€ - 50000€"
  },
  {
    "id": "10",
    "name": "concepteur graphique",
    "recruiter": "Design Agency",
    "description": "Artiste numérique en action.",
    "keywords": ["Design", "Graphic Design"],
    "picture": "",
    "telework": true,
    "salaire": "30000€ - 45000€"
  },
  {
    "id": "11",
    "name": "ingénieur en génie civil",
    "recruiter": "Engineering Company",
    "description": "Constructeur de l'avenir.",
    "keywords": ["Ingénierie", "Ingénieur civil"],
    "picture": "",
    "telework": false,
    "salaire": "50000€ - 80000€"
  },
  {
    "id": "12",
    "name": "technicien de laboratoire",
    "recruiter": "Laboratoire Gournier",
    "description": "Détective des molécules.",
    "keywords": ["Science", "Laboratory Technician"],
    "picture": "",
    "telework": false,
    "salaire": "25000€ - 40000€"
  },
  {
    "id": "13",
    "name": "analyste financier",
    "recruiter": "BNP pariboule",
    "description": "Décrypteur des chiffres mystérieux.",
    "keywords": ["Finance", "Financial Analysis"],
    "picture": "",
    "telework": true,
    "salaire": "40000€ - 60000€"
  },
  {
    "id": "14",
    "name": "juriste",
    "recruiter": "Phoenix Wright Industry",
    "description": "Avocat de la justice, en costume et cravate.",
    "keywords": ["Droit", "Pénal"],
    "picture": "",
    "telework": true,
    "salaire": "45000€ - 70000€"
  },
  {
    "id": "15",
    "name": "chef de projet",
    "recruiter": "Management Company",
    "description": "Sois le capitaine du succès de ton équipe.",
    "keywords": ["Management", "Project Management"],
    "picture": "",
    "telework": true,
    "salaire": "50000€ - 80000€"
  },
  {
    "id": "16",
    "name": "chef cuisinier",
    "recruiter": "Les Crayoures",
    "description": "Magicien culinaire aux fourneaux",
    "keywords": "Restauration",
    "picture": "",
    "telework": false,
    "salaire": "30000€ - 50000€"
  },
  {
    "id": "17",
    "name": "serveur",
    "recruiter": "Les Crayoures",
    "description": "Deviens funambule de l'hospitalité.",
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