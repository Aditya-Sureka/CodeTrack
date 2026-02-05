# CodeTrack – Personal Version Control System
# Overview

CodeTrack is a lightweight, custom-built version control system that empowers developers to manage, track, and synchronize their codebases with ease. It brings together essential versioning operations—such as repository initialization, staging, committing, reverting, and remote synchronization—while providing a modern MERN-based web interface for intuitive visualization and repository management.

Unlike traditional systems, CodeTrack is designed for simplicity and adaptability, making it an excellent learning project as well as a practical solution for small-scale version control.

# Technology Stack
# Backend

**Node.js** – JavaScript runtime

**Express.js** – RESTful API server

**Yargs** – Command-line argument parsing

**UUID** – Unique commit identifiers

**AWS SDK** – AWS S3 integration for remote storage

# Frontend

**React.js** – User interface library

**Redux** – Centralized state management

**Axios** – API communication

**Material-UI** – Modern UI components

# Database

**MongoDB** – Repository metadata, commit history, and user authentication

# Core Features

**Repository Initialization** – Create a new version-controlled workspace

**Staging Area** – Stage files before committing

**Commit Management** – Save changes with unique IDs and commit messages

**Revert Functionality** – Roll back to previous commit states

**Remote Synchronization** – Push and pull changes from AWS S3

**Web Dashboard** – Graphical interface for repositories, commits, and file changes

**User Authentication** – Secure access control

**Commit History Visualization** – Timeline of project evolution

# Project Structure
```
backend/
  index.js
  package.json
  .codeTrack/
    config.json
    commits/
      <commitID>/
        commit.json
        <files>
    staging/
      <files>
  config/
    aws-config.js
  controllers/
    add.js
    commit.js
    init.js
    pull.js
    push.js
    revert.js

frontend/
  src/
    components/
    pages/
    redux/
    App.js
    index.js
  package.json
```

# Getting Started
### 1. Clone the Repository

```sh
git clone <your-repo-url>
cd ApnaGit
```

### 2. Install Backend Dependencies
```sh
cd backend
npm install
```

### 3. Install Frontend Dependencies
```sh
cd ../frontend
npm install
```

### 4. Configure AWS

Edit `backend/config/aws-config.js` to add your AWS credentials and S3 configuration.

### 5. Start Backend Server
```sh
cd backend
npm start
```

### 6. Start Frontend Server
```sh
cd ../frontend
npm start
```

### 7. Using the CLI

- **Initialize Repository**
  ```sh
  npm start init
  ```
- **Add File**
  ```sh
  npm start add hello.txt
  ```
- **Commit Changes**
  ```sh
  npm start commit "Your commit message"
  ```
- **Push to S3**
  ```sh
  npm start push
  ```
- **Pull from S3**
  ```sh
  npm start pull
  ```
- **Revert to Commit**
  ```sh
  npm start revert <commitID>
  ```

### Contribution Guidelines

Contributions are welcome! Feel free to fork the repository, submit pull requests, and help enhance CodeTrack’s functionality.

## License

This project is licensed under the ISC License.

Licensed under the ISC License.

## Author: Aditya Sureka
