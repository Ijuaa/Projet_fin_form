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
    "picture": "Img/img-resized/technicien-systeme-reseau-2 (1).jpeg",
    "telework": true
  },
  {
    "id": "1",
    "name": "Développeur web",
    "recruiter": "Jane Smith",
    "description": "c'est toi qu'on appelle quand il faut réparer l'imprimante?",
    "keywords": ["Informatique", "Web Development"],
    "picture": "Img/img-resized/developpeur web.jpg",
    "telework": false
  },
  {
    "id": "2",
    "name": "Architecte",
    "recruiter": "Archientreprise",
    "description": "Créateur de rêves immobiliers.",
    "keywords": ["BTP", "Architecture"],
    "picture": "Img/img-resized/architecte.jpg",
    "telework": false,
    "salaire": "50000€ - 70000€"
  },
  {
    "id": "3",
    "name": "Conducteur de travaux",
    "recruiter": "Construction Company",
    "description": "Chef d'orchestre des chantiers.",
    "keywords": ["BTP", "Construction"],
    "picture": "Img/img-resized/conducteur-de-travz.jpg",
    "telework": false,
    "salaire": "40000€ - 60000€"
  },
  {
    "id": "4",
    "name": "Commercial",
    "recruiter": "Carroufour",
    "description": "Maître de l'art de convaincre.",
    "keywords": ["Ventes", "Marketing"],
    "picture": "Img/img-resized/Commercial.jpg",
    "telework": true,
    "salaire": "30000€ - 50000€"
  },
  {
    "id": "5",
    "name": "Chef de produit",
    "recruiter": "Louclerc",
    "description": "....",
    "keywords": ["Ventes", "Product Management"],
    "picture": "Img/img-resized/chef de produit.jpg",
    "telework": true,
    "salaire": "40000€ - 60000€"
  },
  {
    "id": "6",
    "name": "Infirmier",
    "recruiter": "Polyclinique Curlancy",
    "description": "....",
    "keywords": ["Santé", "Médical"],
    "picture": "Img/img-resized/infirmier.jpeg",
    "telework": false,
    "salaire": "25000€ - 35000€"
  },
  {
    "id": "7",
    "name": "Médecin généraliste",
    "recruiter": "Polyclinique de Bouzannes",
    "description": "Déteste les pommes.",
    "keywords": ["Santé", "Medecine"],
    "picture": "Img/img-resized/medecin gen.jpg",
    "telework": false,
    "salaire": "80000€ - 120000€"
  },
  {
    "id": "8",
    "name": "Enseignant",
    "recruiter": "Lycée Marco Chagoul",
    "description": "Guide des esprits en devenir.",
    "keywords": ["Education"],
    "picture": "Img/img-resized/enseignant.jpg",
    "telework": true,
    "salaire": "30000€ - 40000€"
  },
  {
    "id": "9",
    "name": "Formateur professionnel",
    "recruiter": "Basic Flute",
    "description": "C'est comme un formateur normal mais pro",
    "keywords": ["Education", "Entrainement"],
    "picture": "Img/img-resized/formateur professionel.jpg",
    "telework": true,
    "salaire": "35000€ - 50000€"
  },
  {
    "id": "10",
    "name": "Concepteur graphique",
    "recruiter": "Design Agency",
    "description": "Artiste numérique en action.",
    "keywords": ["Design", "Graphic Design"],
    "picture": "Img/img-resized/concepteur graphique.jpg",
    "telework": true,
    "salaire": "30000€ - 45000€"
  },
  {
    "id": "11",
    "name": "Ingénieur en génie civil",
    "recruiter": "Engineering Company",
    "description": "Constructeur de l'avenir.",
    "keywords": ["Ingénierie", "Ingénieur civil"],
    "picture": "Img/img-resized/ingenieur-genie-civil.jpg",
    "telework": false,
    "salaire": "50000€ - 80000€"
  },
  {
    "id": "12",
    "name": "Technicien de laboratoire",
    "recruiter": "Laboratoire Gournier",
    "description": "Détective des molécules.",
    "keywords": ["Science", "Laboratory Technician"],
    "picture": "Img/img-resized/technicien labo.jpg",
    "telework": false,
    "salaire": "25000€ - 40000€"
  },
  {
    "id": "13",
    "name": "Analyste financier",
    "recruiter": "BNP pariboule",
    "description": "the numbers mason! what do they mean?!",
    "keywords": ["Finance", "Financial Analysis"],
    "picture": "Img/img-resized/analyste financier.jpg",
    "telework": true,
    "salaire": "40000€ - 60000€"
  },
  {
    "id": "14",
    "name": "Juriste",
    "recruiter": "Phoenix Wright Industry",
    "description": "Avocat de la justice, en costume et cravate.",
    "keywords": ["Droit", "Pénal"],
    "picture": "Img/img-resized/Juriste.jpg",
    "telework": true,
    "salaire": "45000€ - 70000€"
  },
  {
    "id": "15",
    "name": "Chef de projet",
    "recruiter": "Management Company",
    "description": "Sois le capitaine du succès de ton équipe.",
    "keywords": ["Management", "Project Management"],
    "picture": "Img/img-resized/chef de projet.jpg",
    "telework": true,
    "salaire": "50000€ - 80000€"
  },
  {
    "id": "16",
    "name": "Chef cuisinier",
    "recruiter": "Les Crayoures",
    "description": "Magicien culinaire aux fourneaux",
    "keywords": "Restauration",
    "picture": "Img/img-resized/chef-cuisinier.jpeg",
    "telework": false,
    "salaire": "30000€ - 50000€"
  },
  {
    "id": "17",
    "name": "Serveur",
    "recruiter": "Les Crayoures",
    "description": "Deviens funambule de l'hospitalité.",
    "keywords": ["Restauration", "Service"],
    "picture": "Img/img-resized/serveur.jpg",
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
  
  const matchingCards = jobOffers.filter(function (offer) {
    const matchIndustry = (selectedIndustry === "all" || offer.keywords.includes(selectedIndustry));
    const matchJob = (selectedJob === "all" || offer.id === selectedJob);
    const matchTelework = (!teleworkOnly || offer.telework);
    
    return matchIndustry && matchJob && matchTelework;
  });
  
  let matchingCardsContainer = document.querySelector("#matchingCards");
  matchingCardsContainer.innerHTML = "";
  
  matchingCards.forEach(function (card) {
    let cardElement = document.createElement("div");
    cardElement.innerHTML = "<h2>" + card.name + "</h2>" +
    "<p>Employeur: " + card.recruiter + "</p>" +
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