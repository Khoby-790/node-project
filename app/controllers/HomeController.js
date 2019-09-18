class HomeController {
    static index(req, res) {
        res.render('index', {
            title: 'Welcome'
        });
    };

    static login(req, res) {
        res.render('Auth/login', {
            title: 'Login'
        });
    };

    static register(req, res) {
        res.render('Auth/register', {
            title: 'Register'
        });
    };
}

export default HomeController;