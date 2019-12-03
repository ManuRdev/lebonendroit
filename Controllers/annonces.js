module.exports = (app) =>{
    const Annonces = app.models.Annonces;

    return {
        list,
        create
    };

    function list(req, res) {
        return Annonces.find()
            .then(annonces => res.send(annonces));
    }

    function create(req,res) {
        const Nom = req.body.Nom; // récupération des variables du body
        const Description = req.body.Description
        const Produits = req.body.Produits 
    
        if (!Nom  || !Produits) { // on vérifie que les trois variables sont présentes
            res.send('Il manque un argument')
            return
        }
     
        const nouveau_annonces = new Annonces({ // création d'un objet représentant notre nouveau livre
            Nom : Nom,
            Description : Description,
            Produits : Produits
        })
         
        nouveau_annonces.save() // sauvegarde asynchrone du nouveau livre
        res.json(nouveau_annonces)
        return
    }

}