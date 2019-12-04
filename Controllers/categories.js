module.exports = (app) => {
    const Categories = app.models.Categories;

    return {
        list,
        create
    };

    function list(req, res) {
        return Categories.find()
            .then(categories => res.send(categories));
    }

    function create(req,res) {
        const nouvelle_cat = new Categories(req.body);
        nouvelle_cat.save()
        res.json(nouvelle_cat)
        return
    }
}