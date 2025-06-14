module.exports = app => {
  const leads = require("../controllers/index");

  const router = require("express").Router();

  // Create a new Lead
  router.post("/", leads.create);

  // Retrieve all Leads
  router.get("/", leads.findAll);

  // Retrieve a single Lead by ID
  router.get("/:id", leads.findOne);

  app.use("/api/leads", router);
};
