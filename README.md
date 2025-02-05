# Logging with Morgan

![Morgan Logo](https://raw.githubusercontent.com/expressjs/morgan/master/media/morgan-logo.png)

## Overview

This project demonstrates how to integrate **Morgan** with **Winston** for structured request logging in a **Node.js + Express** application. It also includes **MongoDB** connectivity using Mongoose and a basic API route.

## Features

- **Structured Request Logging**: Uses Morgan with Winston to log HTTP requests in JSON format.
- **Express Middleware**: Implements `body-parser` for request parsing.
- **MongoDB Integration**: Connects to a MongoDB Atlas database using Mongoose.
- **REST API Routes**: Includes item-related API routes (`/api/items`).

## Installation

Clone the repository:

```sh
git clone https://github.com/radheshayamkumar/logging-with-morgan.git
cd logging-with-morgan
