module.exports = (app) => {
    const Produits = app.models.Produits;

    return{
        list,
        create,
    };

    function list (req,res) {
        Produits.find() // On récupère tout les livres
            .then(produits => res.send(produits))
    }

    function create(req,res) {
        const Nom = req.body.Nom; // récupération des variables du body
        const description = req.body.description
        const prix = req.body.prix 
    
        if (!Nom || !description  || !prix) { // on vérifie que les trois variables sont présentes
            res.send('Il manque un argument')
            return
        }
     
        const nouveau_produit = new Produits({ // création d'un objet représentant notre nouveau livre
            Nom : Nom,
            description : description,
            prix : prix
        })
         
        nouveau_produit.save() // sauvegarde asynchrone du nouveau livre
        res.json(nouveau_produit)
        return
    }
}