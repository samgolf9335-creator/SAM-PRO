// --- 1. SÉCURITÉ ---
function checkPassword() {
    const mdp = document.getElementById('class-password').value;
    if (mdp === "PROF2024") {
        isAuthenticated = true;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('welcome-message').style.display = 'block';
        document.getElementById('section-accueil').style.display = 'block';
    } else {
        alert("Mot de passe incorrect.");
    }
}


// --- 2. GESTION DES FICHIERS ---
// Fonction pour ajouter dynamiquement un nouveau lien (optionnel)
function addResource(title, url) {
    const list = document.querySelector('.accent-blue .doc-list');
    const newItem = document.createElement('li');
    newItem.innerHTML = `<a href="${url}" target="_blank">📄 ${title}</a>`;
    list.appendChild(newItem);
}
function toggleFolder(id) {
    const folder = document.getElementById(id);
    
    // Cette ligne vérifie si le dossier est caché, et l'affiche si c'est le cas
    if (folder.style.display === 'none' || folder.style.display === '') {
        folder.style.display = 'block';
    } else {
        folder.style.display = 'none';
    }
}
