# Flags Currency App

## Project Description
Flags Currency App is a simple web application that displays country flags, cohttps://ankam-ui.github.io/flags-currency-app/untry names, dial codes, and currencies. It also provides a **search functionality** to quickly find a country by typing part of its name.

This project is built using **HTML, CSS, and JavaScript**, making it a lightweight and responsive app that works in modern browsers.


## Live Demo
Check the live app here: https://ankam-ui.github.io/flags-currency-app/

---

## Features
- Display a list of countries with:
  - Flag image
  - Country name
  - Dial code
  - Currency
- **Search bar** to filter countries dynamically:
  - Type part of a country name (e.g., "ger" → Germany)
  - Search is case-insensitive
- Responsive design for desktop and mobile screens

---

## How It Works
1. The app fetches data (like country name, dial code, currency) from a local JSON file or API.
2. Each country is displayed in a card format with an image and details.
3. The **search bar** listens for input events:
   - When a user types, the app checks all country names
   - Cards that match the search term are displayed
   - Non-matching cards are hidden

---

## Technologies Used
- **HTML** – Structure of the webpage
- **CSS** – Styling and responsive layout
- **JavaScript** – Dynamic search functionality and DOM manipulation

---

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/ankam-ui/flags-currency-app.git
