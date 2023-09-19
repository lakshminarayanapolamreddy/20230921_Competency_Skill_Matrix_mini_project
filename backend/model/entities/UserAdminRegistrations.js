module.exports=(sequelize,DataTypes)=>{
    const UAReg=sequelize.define("UserAdminRegistrations",{
       Id:{
           type:DataTypes.INTEGER,
           primaryKey: true,
           autoIncrement: true
       },
       FullName:{
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
           type:DataTypes.ARRAY(DataTypes.STRING),
           defaultValue: ['User']
       },
       JWT:{
        type:DataTypes.STRING

       }
       
    },
    {timestamp:false,
       createdAt: false,
       updatedAt:false}
   
    )
    return UAReg;
   }
   