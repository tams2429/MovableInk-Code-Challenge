# Movable Ink Front-End Challenge

## Table of Contents 📖

- [Overview](#overview-)
- [Technologies](#technologies-)
- [Process](#process-)
- [Getting Started](#getting-started-)
- [Wins](#wins-)
- [Challenges](#challenges-)
- [Future Work](#future-work-)

## Overview 👓

A **front-end application** built for **Movable Ink's Front-End coding challenge**. The aim of this challenge is to build a Front-End only interface which displays the **3-day forecast** for a **specific location**. For this, I have been given **2 APIs** (i.e. **Geolocation API** which **provides** the **lat. and long.** based on a zip code, **Forecast API** which **provides** the **5-day forecast** based on the **lat. and long.**) and a rough timeline of **2 hours** to do this.

## Technologies 💻

- General:
    - **Vanilla JS**
    - **HTML5**
    - **CSS3**

## Process

- Keep layout and structure of components in `index.html` file,
- Any logic (i.e. calling API endpoints, methods to manipulate the response data into components)
    - Store API endpoint methods in a separate file and call them in main logic file,

### MVP

- Able to retrieve and **display** the **3-day forecast** for a **location**, given a **zip-code**, that is **provided by the user**
- Forecast includes the following:
    - **Temperature** in **Degrees** + **Fahrenheit**,
    - **Description** of forecast (i.e. **Clear**, **Partly Cloudy**),
    - **Symbol** representing forecast,
    - **Day of the week** for forecast,
    - **City** + **Region** (i.e. **CA**)
-

## Getting Started 🏃‍♂️🏃‍♀️

If you wish to **run it locally**, you will need to **follow the steps below**:

- **Fork** or **Clone** the **GitHub repository** ([https://github.com/tams2429/MovableInk-Code-Challenge](https://github.com/tams2429/MovableInk-Code-Challenge))
- In the **Root folder**, run `npm install` to **install** all the **dependencies**
- `npm start` to **start** the **development server** for the whole site

## Wins 🏆

- Able to implement the required functionality,

## Challenges 🏋️

One of the main challenges of this was getting used to manipulating DOM objects with Vanilla JavaScript again after mainly using React for this.

## Future Work ☕

### Planned features/extensions

- Didn't have time to implement the weather forecast symbols corresponding the right weather forecast ⇒ would use 'If' conditional statements to add an <img> tag whose image is matching with the forecast (i.e. 'cloudy' would have the 'cloudy.png'),
- Add more CSS to match more with the provided design,
- Refactor code,
