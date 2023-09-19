module.exports=(sequelize,DataTypes)=>{
    const addSkill=sequelize.define("UserSkills",{
       SkillId:{
           type:DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
        Email:{
        type:DataTypes.STRING,
        unique:true,
        allownull:false
        },
        Skill:{
            type:DataTypes.STRING,
            unique:true,
        },
    })
    
    return addSkill;
   }