# Image upload (POST) and retreival (GET) API 

This task this project completes is a GET and POST request to store an image file to mongoDB atlas.

The primary goal of this project is to streamline the management of image uploads and retrievals via a RESTful API. Using technologies such as Node.js, Express, MongoDB, and Multer, the project offers a user-friendly solution for securely storing and retrieving images.



Link to documnetation  (https://docs.google.com/document/d/1X1R1udIrvv0J3INI9aDzvfMghtzXpk9IJsVfYdH2Exw/edit?usp=sharing)

1. **POST api/upload:** To upload (POST) an image and send it to the database.
2. **GET api/get_image/:id:** To return GET the image back successfully from the mongoDb Atlas database using the ID.

## Introduction


## Features

- Image upload to database
- Return imgaes through secure base64 file methods.
- MongoDB Atlas Storage.
- selection of specific file size only


### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Run the Project
### Installation

1. Clone the repository:

   ```bash
   https://github.com/vector-10/image-upload.git

2. Install dependencies with the command:

   ```bash
   npm install

3. Setup environment variables
   MONGO_URI,  and PORT = 4000

4. Usage

   ```bash
   npm run dev

API ENDPOINTS (for local test purposes)
1. POST http://localhost:4000api/upload
   - Upload an image using the "file" field in a form-data request in postman .
   -The server processes the image, saves it to mongoDB and returns a JSON response with details about the uploaded image.

2. GET http://localhost:4000api/get_image/:id
   -Retrieve a saved image from the database using its secure base 64 url format
   -Replace ":id" with the actual ID of the image in the url Eg (http://localhost:4000/api/get_image/65aa691be3cfaf3cd25cfca7)


