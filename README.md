# Currency Converter Pro

![Currency Converter](https://wallpapersmug.com/download/1920x1080/4c063c/bitcoin-crypto-currency.jpg)

## Overview

This is a simple Currency Converter web application built with React. It allows you to convert currency values between different currencies using real-time exchange rates.

## Features

- Convert currency values from one currency to another.
- Select source and target currencies.
- Real-time exchange rate data fetched from a public API.
- Responsive design for various screen sizes.

## Components

### App.jsx

- The main application component.
- Manages the state of input amounts and selected currencies.
- Fetches and displays exchange rate data using the `UseConverter` custom hook.
- Renders two `InputBox` components for input and output.

### InputBox.jsx

- A reusable input box component.
- Handles input amount, currency selection, and conversion.
- Utilizes the `UseConverter` custom hook to fetch currency conversion data.
- Conditionally disables the input based on the "disable" prop.
- Utilizes `memo` to optimize rendering.

### UseConverter.js

- A custom hook to fetch currency conversion data.
- Uses the `useState` and `useEffect` hooks to manage state and perform data fetching.
- Fetches exchange rate data from a public API based on the provided currency code.

## Getting Started

1. Clone this repository to your local machine.

2. Install dependencies using `npm install`.

3. Run the development server with `npm start`.

4. Open the app in your browser at `http://localhost:3000`.

## How it Works

- The app fetches real-time currency conversion data from a public API based on the selected source currency.

- Users can enter an amount, select source and target currencies, and then click the "Convert" button to see the converted amount.

- The `UseConverter` custom hook handles the API request and data management, making it reusable across the application.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Hooks: Used for managing state and side effects.
- CSS: Styling and layout design.
- [Currency Conversion API](https://github.com/fawazahmed0/currency-api): Provides real-time currency exchange rate data.

## Credits

- Background image: [WallpaperSmug](https://wallpapersmug.com/download/1920x1080/4c063c/bitcoin-crypto-currency.jpg)

## Author

- Your Name

## License

This project is open source and available under the [MIT License](LICENSE).

---

Feel free to customize this README file further to include your name, additional details, and any other information relevant to your project.
