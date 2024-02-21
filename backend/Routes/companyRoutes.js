const express = require("express");
const router = express.Router();
const Company = require("../Models/company");

// GET companies with optional query parameters for filtering
router.get("/companies", async (req, res) => {
  try {
    let query = {};

    if (req.query.companyName) {
      const regex = new RegExp(req.query.companyName, "i");
      query.name = regex;
    }

    if (req.query.companyType) {
      query.type = req.query.companyType;
    }

    if (req.query.isReserved) {
      query.reservedName = req.query.isReserved === "true";
    }

    if (req.query.minPaidCapital && req.query.maxPaidCapital) {
      query.paidCapital = {
        $gte: parseInt(req.query.minPaidCapital),
        $lte: parseInt(req.query.maxPaidCapital),
      };
    }

    if (req.query.minAuthCapital && req.query.maxAuthCapital) {
      query.authCapital = {
        $gte: parseInt(req.query.minAuthCapital),
        $lte: parseInt(req.query.maxAuthCapital),
      };
    }

    const companies = await Company.find(query);
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create a new company
router.post("/companies", async (req, res) => {
  const company = new Company(req.body);
  try {
    const newCompany = await company.save();
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT update a company
router.put("/companies/:id", async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(company);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a company
router.delete("/companies/:id", async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
    res.json({ message: "Company deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET companies by name (case-insensitive and partial match)
router.get("/companies/name/:companyName", async (req, res) => {
  try {
    const regex = new RegExp(req.params.companyName, "i");
    const companies = await Company.find({ name: regex });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET companies by type
router.get("/companies/type/:companyType", async (req, res) => {
  try {
    const companies = await Company.find({ type: req.params.companyType });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET companies by reserved name status
router.get("/companies/reserved/:isReserved", async (req, res) => {
  try {
    const companies = await Company.find({
      reservedName: req.params.isReserved === "true",
    });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET companies by paid capital range
router.get("/companies/paid-capital/:min/:max", async (req, res) => {
  try {
    const companies = await Company.find({
      paidCapital: {
        $gte: parseInt(req.params.min),
        $lte: parseInt(req.params.max),
      },
    });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET companies by authorized capital range
router.get("/companies/auth-capital/:min/:max", async (req, res) => {
  try {
    const companies = await Company.find({
      authCapital: {
        $gte: parseInt(req.params.min),
        $lte: parseInt(req.params.max),
      },
    });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
