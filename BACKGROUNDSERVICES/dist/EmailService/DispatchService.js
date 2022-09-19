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
const ejs_1 = __importDefault(require("ejs"));
const mssql_1 = __importDefault(require("mssql"));
const dotenv_1 = __importDefault(require("dotenv"));
const Config_1 = require("../Config/Config");
dotenv_1.default.config();
const Email_1 = __importDefault(require("../Helpers/Email"));
const SendDelivery = () => __awaiter(void 0, void 0, void 0, function* () {
    const pool = yield mssql_1.default.connect(Config_1.sqlConfig);
    const parcels = yield (yield pool.request().query(`
SELECT * FROM PARCELS WHERE is_sent='no'`)).recordset;
    console.log(parcels);
    for (let parcel of parcels) {
        console.log(parcel);
        ejs_1.default.renderFile('template/delivery.ejs', { senderemail: parcel.senderemail, fromLoc: parcel.fromLoc, delivery_date: parcel.delivery_date, toLoc: parcel.toLoc }, (error, data) => __awaiter(void 0, void 0, void 0, function* () {
            let messageoption = {
                from: process.env.EMAIL,
                to: parcel.receiveremail,
                subject: "Parcel dispatched successfully...",
                html: data,
                attachments: [
                    {
                        filename: 'sendIT.txt',
                        content: `parcel details : ${parcel.parcel_id}`
                    }
                ]
            };
            try {
                yield (0, Email_1.default)(messageoption);
                yield pool.request().query(`UPDATE PARCELS SET is_delivered='yes' WHERE parcel_id=@parcel_id `);
                console.log('Delivery email is sent...');
            }
            catch (error) {
                console.log(error);
            }
        }));
    }
});
exports.default = SendDelivery;
