document.addEventListener("DOMContentLoaded", function () {
  const popupClosed = false;

  alert("Merci de faire un don pour continuer à naviguer.");

  const montant = "";
  while (!popupClosed && (montant === null || montant === "")) {
    montant = prompt("À quelle hauteur souhaitez-vous financer le projet ?");
  }

  if (!popupClosed) {
    alert("Merci d'avoir financé le projet à hauteur de 150€! Vous recevrez un sms de confirmation d'ici quelques minutes avec un lien pour annuler le virement. N'hésitez pas à rafraîchir la page si le SMS ne s'envoie pas.");
  }
});


function openPopup() {
  let popup = document.querySelector('.popup');
  popup.style.display = 'flex';
}

function closePopup() {
  let popup = document.querySelector('.popup');
  popup.style.display = 'none';

  popupClosed = true;
}


document.querySelector('.popup .close-button').addEventListener('click', closePopup);

window.onload = openPopup;




document.getElementById('donationForm').addEventListener('submit', function (event) {
  event.preventDefault();
  let amount = document.getElementById('amountInput').value;
  let name = document.getElementById('nameInput').value;
  let email = document.getElementById('emailInput').value;
  let paymentMethod = document.getElementById('paymentMethodSelect').value;


  console.log('Montant du don :', amount);
  console.log('Nom :', name);
  console.log('Email :', email);
  console.log('Méthode de paiement :', paymentMethod);


  document.getElementById('donationForm').reset();
});

