const db = require("../config/db.config");
exports.index = function (request, response) {
    response.render("ГЛАВНАЯ.hbs");
};
exports.about = function (request, response) {
    response.render("СТАТЬИ.hbs");
};
exports.news = function (request, response) {
    response.render("НОВОСТИ.hbs");
};
exports.kal = function(request, response){
    response.render("АК-12.hbs");
}
exports.drob = function (request, response){
    response.render('СТАТЬЯ-ДРОБОВИК.hbs'); // Поменялось тут
};
exports.ts = function(request, response){
    db.technical_support.findAll({raw:true}).then(data => {
        response.render('ТЕХ-ПОДДЕРЖКА.hbs', {
            technical_support: data //Обратите внимание, что users параметр должен называться так же как во views/users.hbs в 12 строке
        });
    }).catch(err=>console.log(err));
};

exports.testing= function(request, response){
    console.log("Пришли в метод");
    console.log(request.body.name)
    const problems = request.body.problems;
    const name = request.body.name;
    const phone = request.body.phone;
    db.technical_support.create({
        problems:problems,
        name: name,
        phone: phone,
     }).then(res=>{
         const technical_support = {id: res.id, problems: res.problems, name: res.name, phone: res.phone }
         console.log(technical_support);
        response.redirect('/ts');
     }).catch(err=>console.log(err));

};
