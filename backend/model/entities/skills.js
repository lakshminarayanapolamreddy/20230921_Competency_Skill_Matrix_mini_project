module.exports = (sequelize, DataTypes) => {
    const Skill = sequelize.define("Skill", {
      skillName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Skill.associate = (models) => {
      // Associate the Skill with UserAdminRegistrations
      Skill.belongsTo(models.UserAdminRegistrations, {
        foreignKey: 'userAdminRegistrationId',
        onDelete: 'CASCADE', // Cascade delete skills when a user is deleted
      });
    };
  
    return Skill;
  };
  