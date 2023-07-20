const express = require("express");
const userController = require("../controllers/userController");
const inventoryController = require("../controllers/inventoryController");
const cartController = require("../controllers/cartController");
const vendorController = require("../controllers/vendorController");
const searchController = require("../controllers/searchController");

const router = express.Router();

//  inventory
router.get("/inventory", inventoryController.getInventory);
router.post("/inventory", inventoryController.postInventory);

// login Signup
router.post("/login", userController.login);
router.post("/signup", userController.signup);

// Cart

router.get("/cart", cartController.getCart);
router.put("/cart", cartController.updateCart);

// Cart

router.get("/vendorProduct", vendorController.getVendorList);
router.put("/vendorProduct", vendorController.addToVendorList);

// Searched
router.get("/search", searchController.getSearchList);

// Update Profile
router.get("/updateProfile", userController.getProfile);
router.post("/updateProfile", userController.updateProfile);

module.exports = router;
