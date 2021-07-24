const ROLES_DATA = `insert into roles (role_id,role_name,role_description)
            values
            (1,'Admin','Admin have unrestricted acces'),
            (2,'User','User Have restricted'),
            `;

module.exports = ROLES_DATA;