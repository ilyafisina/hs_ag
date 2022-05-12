exports.index = function (request, response) {
    response.send("Главная страница");
};
exports.about = function (request, response) {
    response.send("Статьи");
};
exports.news = function (request, response) {
    response.render("НОВОСТИ.hbs");
};