module.exports = {
    baseUrl: process.env.NODE_ENV === 'development'
        ? '/'
        : '/hash-collisions'
};
