# Logging with Morgan

![Morgan Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/320px-Expressjs.png)

## Overview

This project demonstrates how to integrate **Morgan** with **Winston** for structured request logging in a **Node.js + Express** application. It also includes **MongoDB** connectivity using Mongoose and a basic API route.

## Features

- **Structured Request Logging**: Uses Morgan with Winston to log HTTP requests in JSON format.
- **Express Middleware**: Implements `body-parser` for request parsing.
- **MongoDB Integration**: Connects to a MongoDB Atlas database using Mongoose.
- **REST API Routes**: Includes item-related API routes (`/api/items`).

## Installation

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v14 or later)
- **MongoDB Atlas** (or a local MongoDB instance)

### Clone the Repository

```sh
git clone https://github.com/radheshayamkumar/logging-with-morgan.git
cd logging-with-morgan

