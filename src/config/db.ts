const config = {
    PORT: process.env.PORT || 3000,
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'root',
    DB_PSWD: process.env.DB_PSWD || '3518',
    DB_NAME: process.env.DB_NAME || 'portfolio',
    DB_PORT: process.env.DB_PORT || 1234,
    LOG_CONSOLE: process.env.PRODUCTION_MODE ? false : true,
}

module.exports = config;
