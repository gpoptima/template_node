var config = {
    mode: 'development',
    development: {
        database: {
            host: 'localhost',
            user: 'root',
            password: 'rootroot',
            database: 'template_node',
            dialect: 'mysql',
            debug: true
        },
        port:3000
    },
    production: {
        database: {
            host: '',
            user: '',
            password: '',
            database: '',
            dialect: 'mariadb',
            debug: false
        },
        port:3000
    }
};

module.exports = config;