const db = require("../models");
const Lead = db.leads;

// Create and Save a new Lead
exports.create = async (req, res) => {
  try {
    const { name, email, status } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and Email are required." });
    }

    const lead = new Lead({
      name,
      email,
      status: status || "New",
    });

    const savedLead = await lead.save();
    res.status(201).json(savedLead);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: "Email already exists." });
    }
    res.status(500).json({ message: err.message || "Error creating lead." });
  }
};

// Retrieve all Leads
exports.findAll = async (req, res) => {
  try {
    const leads = await Lead.find();
    res.status(200).json(leads);
  } catch (err) {
    res.status(500).json({ message: err.message || "Error retrieving leads." });
  }
};
exports.findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const lead = await Lead.findById(id);
    if (!lead) {
      return res.status(404).send({ message: "Lead not found with id " + id });
    }
    res.send(lead);
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving Lead with id=" + id
    });
  }
};

