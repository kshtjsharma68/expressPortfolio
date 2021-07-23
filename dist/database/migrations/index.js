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
const bcrypt_1 = __importDefault(require("bcrypt"));
class Migrations {
    /**
     * Set password for admin user
     */
    adminPassword() {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = yield bcrypt_1.default.genSalt(10);
            return yield bcrypt_1.default.ash('admin123', salt);
        });
    }
    /**
     * Run migration on call
     */
    up(connection) {
        const ROLE_SQL = `CREATE TABLE if not exists roles (
            id TINYINT unsigned NOT NULL AUTO_INCREMENT,
            role_name varchar(15) ,
            role_description varchar(120) ,
            PRIMARY KEY (id))`;
        const USER_SQL = `CREATE TABLE if not exists users (
            id int unsigned NOT NULL AUTO_INCREMENT,
            role_id TINYINT unsigned NOT NULL,
            first_name varchar(20) ,
            last_name varchar(20) ,
            email varchar(40) ,
            profile_image varchar(255),
            password varchar(30) NOT NULL,
            PRIMARY KEY (id),
            FOREIGN KEY (role_id) REFERENCES roles(id)
            INDEX (email))`;
        const ROLES_DATA = `insert into roles (role_id,role_name,role_description)
            values
            (1,'Admin','Admin have unrestricted acces'),
            (2,'User','User Have restricted'),
            `;
        const ADMIN_DATA = `insert into users (id,role_id,first_name, last_name, email, profile_image, password)
            values
            (1,1,'Ad', 'min', 'admin@admin.com', '', '${this.adminPassword()}'))
            `;
        return new Promise((resolve, reject) => {
            try {
                const queries = [ROLE_SQL, USER_SQL, ROLES_DATA, ADMIN_DATA];
                queries.forEach((sql, index) => {
                    connection.query(sql, (error, result, fields) => {
                        if (error) {
                            console.log(`error in query queryIndex ${index} error =${JSON.stringify(error, null, 2)}`);
                        }
                        if (index + 1 === queries.length) {
                            resolve();
                        }
                    });
                });
            }
            catch (e) {
                reject(JSON.stringify(e, null, 2));
            }
        });
    }
}
module.exports = new Migrations();
//# sourceMappingURL=index.js.map