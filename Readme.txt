Firstly install the package,the cmd is
 ====> npm install

Now Change the DataBase Link in the database.js, which is in config folder
config/database.js/database


The end point Available are:

1. Regsiter
2. Authenticate
3. Profile

1.Regsiter =====>

The Schema for the Registration is: {
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}

2.Authenticate =====>

The Schema for the Authenticate is : {
    email: {
    type: String,
    required: true
  },
    password: {
    type: String,
    required: true
  }
}

3.Profile =====> 

To view the profile we have to have JWT token

