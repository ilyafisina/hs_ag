exports.index = function (request, response) {
    response.render("ГЛАВНАЯ.hbs");
};
exports.about = function (request, response) {
    response.render("СТАТЬИ.hbs");
};
exports.news = function (request, response) {
    response.render("НОВОСТИ.hbs");
};