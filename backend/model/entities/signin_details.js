module.exports=(sequelize,DataTypes)=>{
    const UserRegistration=sequelize.define("UserDetails",{
       Id:{
           type:DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       Username:{
           type:DataTypes.STRING,
           allownull:false
       },
       Email:{
          type:DataTypes.STRING,
          unique:true,
          allownull:false
       },
       Password:{
           type:DataTypes.STRING,
           allownull:false
       },
       Role:{
           type:DataTypes.STRING,
           allownull:false
       },
    //    JWT:{
    //     type:DataTypes.STRING
    //    }   
    })
    return UserRegistration;
}