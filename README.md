# Micro Frontend with Angular and Module Federation

This repository contains a micro-frontend architecture using Angular, React, and Module Federation.

## Project Structure

- **master**: The Shell application (Angular) that orchestrates the micro-frontends.
- **angularmfe**: A micro-frontend built with Angular.
- **reactmfe**: A micro-frontend built with React.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (Recommended: Latest LTS)
- npm (comes with Node.js)

### Installation

You need to install dependencies for each application individually.

1.  **Install Shell (Master) Dependencies:**
    ```bash
    cd master
    npm install
    cd ..
    ```

2.  **Install Angular MFE Dependencies:**
    ```bash
    cd angularmfe
    npm install
    cd ..
    ```

3.  **Install React MFE Dependencies:**
    ```bash
    cd reactmfe
    npm install
    cd ..
    ```

### Running the Applications

To run all applications simultaneously, use the simplified script provided in the `master` project.

1.  Navigate to the `master` directory:
    ```bash
    cd master
    ```

2.  Run the start script:
    ```bash
    npm run start:all
    ```

This command will start:
- **Shell (Master)** on `http://localhost:4200`
- **Angular MFE** on `http://localhost:4201` (default)
- **React MFE** on `http://localhost:4202` (or configured port)

The Shell application usually opens automatically in your default browser.
