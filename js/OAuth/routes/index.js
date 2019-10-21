//const authRoutes_ = require('./auth');

import authRoutes from '~/app/auth';



const routes = (app) => {
    app.get('/', (req, res) => { res.send('home'); });
    
    //app.use('/auth_', authRoutes_);
    //app.use('/auth', authRoutes);
    app.use('/auth',authRoutes );
}

module.exports = routes;