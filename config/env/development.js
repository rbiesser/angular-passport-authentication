// Set the 'development' environment configuration object
module.exports = {
    db: 'mongodb://mongo/mean-development',
    sessionSecret: 'developmentSessionSecret',
    facebook: {
        clientID: 'Facebook Application ID',
        clientSecret: 'Facebook Application Secret',
        callbackURL: 'http://localhost:3000/oauth/facebook/callback'
    },
    twitter: {
        clientID: 'Twitter Application ID',
        clientSecret: 'Twitter Application Secret',
        callbackURL: 'http://localhost:3000/oauth/twitter/callback'
    },
    google: {
        clientID: 'Google Application ID',
        clientSecret: 'Google Application Secret',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
};