function testController(req, res) {
  res.json({
    status: "running",
  });
}

module.exports = { testController };
