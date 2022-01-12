
var bcrypt = require("bcrypt")

/**
 * Set password for admin user
 */
const AdminPassword = async() => {
    return await bcrypt.genSalt(10, (err, salt) => {
        console.log('first insinde', salt);
        bcrypt.hash('admin123', salt, (err, hash) => {
            console.log('hasg', hash)
            return hash
        })
    });
}
const ADMIN_DATA = _ => {
    return `insert into users (id,role_id,first_name, last_name, email, profile_image, password) values (1,1,'Ad', 'min', 'admin@admin.com', '', 'admin123') `;
};

module.exports = ADMIN_DATA();