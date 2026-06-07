const getHealth = (_req, res) => {
  res.json({
    status: 'ok',
    app: 'bff',
    timestamp: new Date().toISOString(),
  });
};

module.exports = {
  getHealth,
};
