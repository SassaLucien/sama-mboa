// 1. Prévisualisation de la photo de profil
const avatarInput = document.getElementById('avatar');
const preview = document.getElementById('preview');
const avatarIcon = document.querySelector('#avatarLabel i');

avatarInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
            avatarIcon.style.display = 'none';
        }
        reader.readAsDataURL(file);
    }
});
// Fonction pour ajouter dynamiquement un post (Action en réalisation)
function publishPost(titre, texte, image, categorie) {
    const wrapper = document.getElementById('postsWrapper');
    const postHTML = `
        <article class="post-card" data-aos="fade-up">
            <div class="post-img" style="background-image: url('${image}');"></div>
            <div class="post-info">
                <span class="category">${categorie}</span>
                <h3>${titre}</h3>
                <p>${texte}</p>
                <a href="#" class="read-more">Détails</a>
            </div>
        </article>
    `;
    wrapper.innerHTML = postHTML + wrapper.innerHTML;
}

// Exemple d'utilisation (peut être lié à un formulaire admin plus tard)
// publishPost("Réunion au GICAM", "Discussion sur l'avenir des PME...", "image.jpg", "Événement");

// 2. Envoi de l'inscription vers WhatsApp Admin
const memberForm = document.getElementById('memberForm');

memberForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const nom = document.getElementById('nom').value;
    const secteur = document.getElementById('secteur').value;
    const motivation = document.getElementById('motivation').value;
    
    // Numéro de l'administrateur
    const adminNumber = "237695919164";

    // Construction du message WhatsApp
    const message = `Bonjour Admin SAMA_MBOA,%0A%0A` +
                    `*NOUVELLE DEMANDE DE MEMBRE*%0A` +
                    `----------------------------%0A` +
                    `*Nom:* ${nom}%0A` +
                    `*Secteur:* ${secteur}%0A` +
                    `*Motivation:* ${motivation}%0A` +
                    `----------------------------%0A` +
                    `L'utilisateur a joint sa photo de profil. Merci de valider son accès.`;

    // Redirection vers WhatsApp
    const whatsappUrl = `https://wa.me/${adminNumber}?text=${message}`;
    
    alert("Votre demande est prête. Vous allez être redirigé vers WhatsApp pour envoyer votre dossier et votre photo à l'administrateur.");
    window.open(whatsappUrl, '_blank');
});