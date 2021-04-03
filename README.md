# Plantiful
![Plantiful logo](https://github.com/cjb0s/plantiful/blob/main/client/assets/images/banner.png)

## What is it?
Plantiful is a plant care mobile app designed to help plant owners take better care of their house plants by:
- scheduling watering reminders through push notifications
- providing key information on keeping happy and healthy house plants


## How was it built?
### Frontend
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)

### Backend
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

### Design
- [Original illustrations](https://www.amylucymccord.com/)


## Getting Started
1. Fork and clone this repo onto your machine
2. Populate a mongoDB database with server/models/mock_data.json
3. Install dependencies and start both client and server  
`npm install`  
`cd server && npm install && nodemon`  
`cd client && npm install && expo start`  
4. Create a .env file with the information provided in the .env.example file in the client
5. Scan the QR code


## Currently developing
- Redux for state management


## What's next?
- Authentication
- Search form to find a suitable plant for your home
- Upload photos of user plants to record their growth history
