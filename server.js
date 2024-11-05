// 1. Import server and modules
import app from './index.js'
import createMongooseConnection from "./config/config.js";




// Server Listen on port 
app.listen(3000, () => {
  createMongooseConnection();
  console.log(`Server is running at port 3000`);
});
