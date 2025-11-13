# MAST Chefs App

## Overview
MAST Chefs App is a React Native application designed to showcase a menu of items, allowing users to view details and remove items from their selection. The app is built using Expo and TypeScript, providing a smooth and efficient development experience.

## Features
- Display a list of menu items with details such as name, description, and price.
- Remove items from the menu.
- Navigate between different screens for a better user experience.

## Project Structure
```
MAST-chefs-app
├── src
│   ├── components
│   │   └── MenuItemCard.tsx
│   ├── screens
│   │   ├── HomeScreen.tsx
│   │   └── MenuScreen.tsx
│   ├── navigation
│   │   └── index.tsx
│   ├── hooks
│   │   └── index.ts
│   └── types
│       └── index.ts
├── App.tsx
├── app.json
├── package.json
├── tsconfig.json
├── babel.config.js
└── README.md
```

## Installation
To get started with the MAST Chefs App, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd MAST-chefs-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   expo start
   ```

## Usage
- Navigate to the Home Screen to view the list of menu items.
- Click on the "Remove" button next to any item to remove it from the list.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.