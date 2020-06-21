const express = require("express");
const router = express.Router();

// @route    POST api/contacts
// @desc     Get all users contacts
// @access   Public
router.get("/", (req, res) => {
  res.send("Get all contacts");
});

// @route    PUT api/contacts/:id
// @desc     Add new contact
// @access   Private
router.post("/:id", (req, res) => {
  res.send("Add contacts");
});

// @route    PUT api/contacts/:id
// @desc     Update contact
// @access   Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
});

// @route    Delete api/contacts/:id
// @desc     Delete contact
// @access   Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
