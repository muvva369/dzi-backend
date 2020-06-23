const { verifyToken } = require("../../utils/authUtils");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      id: {
        type : Sequelize.INTEGER,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [1,50]
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        len: [1,1000]
      },
      mobile: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: 'mobile',
        isNumeric: true,
        validate: {
            isLongEnough: function (val) {
                if (val.length != 10) {
                    throw new Error("Please enter 10 digit Valid Phone Number")
                }
            }
        }

    },
    totpToken: {
      type: Sequelize.STRING,
      field: 'verify_token'
    },
    createdAt: true,
    updatedAt: true
     },{
       tableName:'users',
       timestamps: true
    });
  
    return User;
  };