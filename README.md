# shipping-api
user          
{
name:{
     type:String,
     unique:true
  },
  phone:{
      type:Number,
      unique:true
  },
  email:{
      type:String,
      unique:true
  },
  pw:{
      type:String
  },
  lan:{
      type:String,
      default:'ar'
  }
}

get one user---------------------------------------
method = get
/users
get all users--------------------------------------
method = get
/users/all
post one user---------------------------------------
method = post
/users
update one user--------------------------------------
method = update
/users/:id
delete one user--------------------------------------
/users/:id

ship
 userName:{
        type:String
    },
    userPhone1:{
        type:Number
    },
    userPhone2:{
        type:Number
    },
    userAddress:{
        type:String
    },
    uerFamousPlace:{
        type:String
    },
    packageType:{
        type:String
    },
    packageSize:{
        type:Number
    },
    notes:{
        type:String
    },
    recieverName:{
        type:String
    },
    recieverPhone1:{
        type:Number
    },
    recieverPhone2:{
        type:Number
    },
    recieverFamousPlace:{
        type:String
    },
    status:{
        type:String
    },
    driver:{
        type:String
    }

get all ships---------------------------
method = get 
/ships

get ship by username--------------------
method = get
/ships/byUser
get ship by driver--------------------
method = get
/ships/byDriver
post ship--------------------------
method=post
/ships
put ships -----------------------------
method = put
/ships/:id
delete ships--------------------------
method=delete
/ships/:id

driver
  name:{
        type:String,
        unique:true,
        required:true
    },
    phone:{
        type:Number,
        unique:true,
        required:true
    },
    email:{
        unique:true,
        type:String,
        required:true
    },
    pw:{
        type:String,
        required:true
    },
    carNumb:{
        unique:true,
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"free"
    },
    lan:{
        type:String,
        default:'ar'
    },
    location:{
     type:{
     type:String,
     default:'Point'
 },
 coordinates:{
     type:[Number],
     index:"2dsphere",
     required:true
 }}
 
  find near drivers--------------------------------------------
  method = get
  /drivers/near/?lng=?&lat=?
  get one driver-----------------------------------------------
  method = get 
  /drivers/?name=?&phone=?
  get all drivers----------------------------------------------
  /drivers/all
  post one driver----------------------------------------------
  /drivers
  update driver------------------------------------------------
  method = put
  /drivers/:id 
  delete driver -----------------------------------------------
  method = delete
  /drivers/:id

