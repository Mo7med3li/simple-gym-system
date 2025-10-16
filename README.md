# Simple Gym System

A backend API built with Express.js to manage gym **members**, **trainers**,and their relationships and revenues.

---

## 📦 Features

- CRUD for **members**  
- CRUD for **trainers**  
- Endpoints to get members along with their trainers  
- Endpoints to get trainers along with their members  
- Soft delete (i.e. “freeze” membership or mark inactive)  
- Membership status validation (active / frozen)  
- Handles undefined routes with a catch-all response
- Endpoints to get revenues of trainers along with their members
- Endpoints to get revenues of the gym  
-  
- 

---

## 🛠️ Tech Stack & Dependencies

- Node.js  
- Express  
- JSON files used for data persistence (`members.json`, `trainers.json`)  
- JavaScript (ESModules)  

(Check `package.json` for exact dependency versions) :contentReference[oaicite:1]{index=1}

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed (v14+, or whatever your project requires)  
- Git (optional, to clone the repo)

### Installation

1. Clone the repo  
   ```bash
   git clone https://github.com/Mo7med3li/simple-gym-system.git
   cd simple-gym-system
Install dependencies

bash
Copy code
npm install
(Optional) If using ES Modules and JSON imports, ensure your package.json has "type": "module" (or adjust accordingly).

Running the Server
bash
Copy code
npm start
Or, if you have a dev script (e.g. with nodemon):

bash
Copy code
npm run dev
Once the server starts, it will listen on your configured port (e.g. http://localhost:3000).

