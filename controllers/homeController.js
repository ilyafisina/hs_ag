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
exports.ts = function (request, response) {
    response.render('ТЕХ-ПОДДЕРЖКА.hbs');
};
exports.request= function(request, response){
    console.log("Ghbikb d vtnjl");
    console.log(request.body.problem)
    // const name = request.body.name;
    // const birthday = request.body.birthday;
    // const email = request.body.email;
    // const roleId = 2;
    // db.user.create({
    //     name: name,
    //     birthday: birthday,
    //     email: email,
    //     roleId: roleId
    // }).then(res=>{
    //     const user = {id: res.id, name: res.name, age: res.birthday, email: res.email}
    //     console.log(user);
    // }).catch(err=>console.log(err));
    // response.redirect("/user");
};
