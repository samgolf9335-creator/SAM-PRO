// --- 1. SÉCURITÉ ---
// On demande le mot de passe dès l'ouverture pour protéger vos documents
window.onload = function() {
    const password = prompt("Accès réservé - Veuillez entrer votre code secret :");
    
    // Vous pouvez changer "PROF2024" par le code de votre choix
    if (password === "PROF2024") {
        document.body.style.display = "block";
    } else {
        alert("Accès refusé.");
        document.body.innerHTML = "<h1 style='text-align:center; margin-top:50px;'>🔒 Accès non autorisé</h1>";
    }
};

// --- 2. GESTION DES FICHIERS ---
// Fonction pour ajouter dynamiquement un nouveau lien (optionnel)
function addResource(title, url) {
    const list = document.querySelector('.accent-blue .doc-list');
    const newItem = document.createElement('li');
    newItem.innerHTML = `<a href="${url}" target="_blank">📄 ${title}</a>`;
    list.appendChild(newItem);
}
