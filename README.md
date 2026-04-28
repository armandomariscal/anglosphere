# Anglosphere

A modular web application focused on professional growth and technical mastery. This project follows a **Clean Architecture** approach, starting with a robust backend and evolving into a full-stack integrated platform.

## Project Goals
* **Solid Backend Foundation:** Build a reliable REST API using the **MEN stack** (MongoDB, Express, Node.js).
* **CMS Integration:** Develop a Content Management System using **Angular** in the MEAN branch.
* **Stack Comparison:** Switch between MEN and MEAN branches to evaluate the architectural benefits and the complexity that Angular introduces.
* **Clean Code:** Apply **Domain-Driven Design (DDD)** principles and decoupled logic.

---

## Architecture & Stack

### Core Technology (MEN)
* **Node.js & Express:** Scalable server-side logic.
* **TypeScript:** Strong typing for professional-grade development.
* **MongoDB:** Flexible NoSQL database.
* **Docker:** Containerized environment for consistent database management.

### Directory Structure (DDD Approach)
* `domain/`: Business logic, entities (e.g., `Location.ts`), and core rules.
* `application/`: Use cases and orchestration logic.
* `infrastructure/`: Database clients (`MongoDBClient.ts`) and server configurations.
* `shared/`: Shared types and interfaces for backend and frontend.

---

## Development Plan: "Monday Dev"
This project is built incrementally every Monday.

1.  **Branch `MEN-001` (Current):** Focused on the API core, Docker integration, and Infrastructure layer.
2.  **Branch `MEAN-001` (Planned):** Implementation of the Angular frontend and CMS logic.
3.  **Comparison Phase:** Continuous switching between branches to analyze development speed and performance.

---

## Getting Started

### Prerequisites
* **OS:** Fedora Linux (Tested on XFCE)
* **Environment:** Node.js (LTS), Docker, and Docker-Compose.

### Database Setup
The database runs in a Docker container. You can manage it using the scripts defined in `backend/package.json`:
* `npm run db:up`: Start the MongoDB container.
* `npm run db:reset`: Wipe data and restart the container.

### Running the Server
1. Navigate to `/backend`.
2. Install dependencies: `npm install`.
3. Start development mode: `npm run dev`.

---

## License
ISC License.
