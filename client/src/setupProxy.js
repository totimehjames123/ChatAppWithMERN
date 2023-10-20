const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/', 
    createProxyMiddleware({
      target: 'https://mernstack-chat-app-backend.onrender.com', // Replace with your actual backend URL
      changeOrigin: true,
    })
  );
};
