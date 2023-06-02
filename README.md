# Vehicle Simulation Application

This project is a vehicle simulation application built using React.js. It allows users to create, display, update, and delete scenarios and vehicles. Each scenario can have multiple vehicles that can be moved based on user interaction.

## Features

- Create, display, update, and delete scenarios
- Create, display, update, and delete vehicles
- Move vehicles based on scenario and vehicle parameters
- Sidebar navigation for easy access to scenarios
- Start simulation to move vehicles within the container
- Hide vehicles if they go outside the container
- Proper validation for adding vehicles within the container
- Data storage using json-server

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [json-server](https://www.npmjs.com/package/json-server)

```
npm install -g json-server
```

- [Visual Studio Code](https://code.visualstudio.com/) (optional)

1. Clone the repository to your local machine.

```
git clone https://github.com/mohammedazam55/Vehicle-Simulation-App-React.js.git
```

2. Navigate to the project directory.

```bash
npm install # install the dependencies
```

3. Start the json-server (If this is not started, the application will not work)

```bash
json-server --watch db.json --port 3004
```

4. Start the application

```bash
npm start
```
