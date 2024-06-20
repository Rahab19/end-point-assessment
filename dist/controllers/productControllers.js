"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchProduct = exports.searchProducts = exports.addProduct = void 0;
const uuid_1 = require("uuid");
const mssql_1 = __importDefault(require("mssql"));
const config_1 = require("../config");
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = (0, uuid_1.v4)();
        const { name, description, price } = req.body;
        //connecting to DB
        let pool = yield mssql_1.default.connect(config_1.sqlConfig);
        //make a request to the db
        yield pool.request()
            .input("id", id)
            .input("name", name)
            .input("description", description)
            .input("price", price)
            .execute('addProduct');
        return res.status(201).json({ message: "Product added successfuly!!" });
    }
    catch (error) {
        res.status(500).json(error.message);
    }
});
exports.addProduct = addProduct;
const searchProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssql_1.default.connect(config_1.sqlConfig);
        const product = (yield pool.request()
            .execute('searchProducts')).recordset;
        return res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.searchProducts = searchProducts;
const searchProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let pool = yield mssql_1.default.connect(config_1.sqlConfig);
        const product = (yield pool.request()
            .input('id', req.params.id)
            .execute('searchProduct')).recordset[0];
        if (product && product.id) {
            return res.status(200).json(product);
        }
        return res.status(404).json({ message: 'Product not found!' });
        return res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json(error);
    }
});
exports.searchProduct = searchProduct;
