const mongoose = require('mongoose');
const app = require('./server');

beforeAll(async () => {
  await mongoose.connect('mongodb+srv://hawkinspingies:RB4TfmFRUvgHZPRO@eventcluster.1ziduhg.mongodb.net/EventDatabase?retryWrites=true&w=majority');
  // Add any necessary setup here
});

afterAll(async () => {
  await mongoose.disconnect();

});
//Checking if the connection is open
test('Database connection test', async () => {
  await expect(mongoose.connection.readyState).toBe(2); 
});