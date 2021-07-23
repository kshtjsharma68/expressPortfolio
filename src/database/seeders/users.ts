
const bcrypt = require("bcrypt")

/**
 * Set password for admin user
 */
const AdminPassword = async() => {
    const salt = await bcrypt.genSalt(10);

    return await bcrypt.ash('admin123', salt)
}
const ADMIN_DATA = `insert into users (id,role_id,first_name, last_name, email, profile_image, password)
            values
            (1,1,'Ad', 'min', 'admin@admin.com', '', '${AdminPassword()}'))
            `;

module.exports = ADMIN_DATA;