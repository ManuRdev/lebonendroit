module.exports = (app) => {
    const SousCategories = app.models.SousCategories;

    return {
        list,
        create
    };

    function list(req, res) {
        return SousCategories.find()
            .then(souscategories => res.send(souscategories));
    }

    function create(req,res) {
        const nouvelle_souscat = new SousCategories(req.body);
        nouvelle_souscat.save()
        res.json(nouvelle_souscat)
        return
    }
}