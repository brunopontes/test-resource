module.exports = () => {
  class IndexController {
    static wellcome(req, res) {
      return res.json({
        description: 'Service has been started successfully',
      });
    }
  }

  return IndexController;
};
