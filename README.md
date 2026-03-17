:📚 Bookstore RESTful API (Internship Project)A robust backend system built with Node.js and Express.js to manage a bookstore's database. This project includes full CRUD operations and input validation for data integrity.✨ FeaturesFull CRUD: Create, Read, Update, and Delete books.Database Integration: Powered by MongoDB Atlas for cloud storage.Bonus - Input Validation: Implemented express-validator to ensure data (price, date, etc.) is correct before saving.Environment Safety: Used .env to keep credentials secure.🛠️ Tech StackNode.js & Express.jsMongoDB & MongooseExpress-Validator (Bonus)Postman (Testing)🚀 How to Run LocallyClone the project:Bashgit clone <your-repository-link>
cd bookstore-api
Install dependencies:Bashnpm install
Setup Environment Variables:Create a .env file in the root folder and add your MongoDB connection string:PlaintextMONGO_URI=mongodb+srv://admin:admin123@bookstore-project...
PORT=3000
Start the server:Bashnode app.js
🔌 API EndpointsMethodEndpointDescriptionPOST/booksAdd a new book (with validation)GET/booksGet all books in the databaseGET/books/:idGet details of a specific bookPUT/books/:idUpdate book info (price, title, etc.)DELETE/books/:idRemove a book from the database
