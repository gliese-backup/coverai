module.exports = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000", // localhost
        "*.github.dev", // Codespaces
      ],
    },
  },
};
