module.exports = (app) =>{
    const Utilisateurs = app.models.Utilisateurs;

    return {
        list,
        create
    };

    function list(req, res) {
        return Utilisateurs.find()
            .then(utilisateurs => res.send(utilisateurs));
    }

    function create(req,res) {
        const nouveau_utilisateur = new Utilisateurs(req.body);
        nouveau_utilisateur.save()
        res.json(nouveau_utilisateur)
        return
    }

}