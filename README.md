# Reux-Todo App

Simple Todo application implemented with CRUD operations, authentication, and theme change functionality. JSON Server is used as the backend to provide a RESTful API for managing todos.

## Features Implemented:

- **CRUD Operations:** Users can perform Create, Read, Update, and Delete operations on their todo list.
- **Authentication:** Users are required to authenticate before they can add todos.
- **Theme Change:** Users can change the theme of the application.

## Technology Stack:

- Frontend:
  - React
  - React Redux
  - Axios
  - Redux
  - Chakra UI
- Backend:
  - JSON Server

## How to Run:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install frontend dependencies using the following command:
    ```
    npm install
    ```
4. Start the frontend development server:
    ```
    npm start
    ```
5. Open another terminal window, navigate to the project directory, and start the JSON Server:
    ```
    json-server --watch db.json --port 8080
    ```
6. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Contributors:

This project currently has no contributors.

- App in light mode

![App](https://github.com/B2Kumar03/REDUX_APP_IMAGE2/blob/main/start.png?raw=true)
- App in Dark mode

![App](https://github.com/B2Kumar03/REDUX_APP_IMAGE2/blob/main/dartthem.png?raw=true)
- Add todo page

![App](https://github.com/B2Kumar03/REDUX_APP_IMAGE2/blob/main/addTodo.png?raw=true)
- Login Page

![App](https://github.com/B2Kumar03/REDUX_APP_IMAGE2/blob/main/loginapp.png?raw=true)
- Update title and status page

![App](https://github.com/B2Kumar03/REDUX_APP_IMAGE2/blob/main/updateTodo.png?raw=true)
