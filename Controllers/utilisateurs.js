module.exports = (app) =>{
    const Utilisateurs = app.models.Utilisateurs;

    return {
        list,
        create,
        remove,
        update
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

    function remove(req, res) {
        Utilisateurs.findByIdAndRemove(req.params.id)
            .then(()=> {
                res.status(204).send();
            })
    }

    function update(req, res) {
        Utilisateurs.findByIdAndUpdate(req.params.id, req.body)
            .then(() => {
                res.status(204).send();
            })
            .catch(err => res.status(500).send(err))
    }

}