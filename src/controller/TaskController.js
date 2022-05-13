function index(req, res) {
    res.render('tasks/index');
}

function create(req, res) {
    res.render('tasks/create');
}
modeule.exports = {
    index: index,
    create: create,
}