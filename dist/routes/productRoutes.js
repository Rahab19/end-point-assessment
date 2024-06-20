"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productControllers_1 = require("../controllers/productControllers");
const ProductRouter = (0, express_1.Router)();
ProductRouter.post("", productControllers_1.addProduct);
ProductRouter.get("/allProducts", productControllers_1.searchProducts);
ProductRouter.get("/:id", productControllers_1.searchProduct);
exports.default = ProductRouter;
