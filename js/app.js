console.log('Our team')

const teamMembers = [
    {
      name: "Wayne Barnett",
      role: "Founder & CEO",
      photo: "img/wayne-barnett-founder-ceo.jpg"
    },
    {
      name: "Angela Caroll",
      role: "Chief Editor",
      photo: "img/angela-caroll-chief-editor.jpg"
    },
    {
      name: "Walter Gordon",
      role: "Office Manager",
      photo: "img/walter-gordon-office-manager.jpg"
    },
    {
      name: "Angela Lopez",
      role: "Social Media Manager",
      photo: "img/angela-lopez-social-media-manager.jpg"
    },
    {
      name: "Scott Estrada",
      role: "Developer",
      photo: "img/scott-estrada-developer.jpg"
    },
    {
      name: "Barbara Ramos",
      role: "Graphic Designer",
      photo: "img/barbara-ramos-graphic-designer.jpg"
    }
  ];
  

  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    console.log(`${member.name} - ${member.role} - ${member.photo}`);
  }

  // Otteniamo il riferimento alla sezione vuota dove inserire le schede dei membri del team
const teamMembersSection = document.getElementById('team-members');

// Iteriamo sull'array di membri del team
for (const member of teamMembers) {
  // Creiamo una nuova scheda del membro del team
  const card = document.createElement('div');
  card.classList.add('col-auto');
  card.innerHTML = `
    <div class="card">
      <img src="${member.photo}" class="card-img-top" alt="${member.name}">
      <div class="card-body">
        <h5 class="card-title">${member.name}</h5>
        <p class="card-text">${member.role}</p>
      </div>
    </div>
  `;
  // Aggiungiamo la nuova scheda alla sezione dei membri del team
  teamMembersSection.appendChild(card);
}


    