# Condition Builder

## Overview
Condition Builder is an Angular 17.3 application that allows users to create complex rules and conditions using AND/OR logic. Users can define conditions based on specific properties and operators, with numeric input values. The configured conditions are then output in JSON format and stored in IndexedDB.

## Project Structure

### Components
- **complex-conditions**: Contains three key elements:
  - Properties dropdown
  - Conditions dropdown (with five operators)
  - Numeric input field
- **complex-rules**: Manages AND/OR logic and includes a `+` button to add either a new group or a condition within a rule.
- **json-builder**: Displays the generated JSON output of the conditions.

### Pages
- **conditions-builder**: The main page where all components are assembled.

### Helpers
- **common-conditions.ts**: Defines the interface for conditions and is utilized in the relevant components.
- **common-properties.ts**: Defines the interface for properties and is used in related components.

## Storage Usage
The generated JSON data is stored in IndexedDB using the `idb` library.
- To install the library, run:
  ```sh
  npm install idb
  ```

## Running the Project
1. Open a terminal and navigate to the project directory:
   ```sh
   cd [project-name]
   ```
2. Open the project in VS Code:
   ```sh
   code .
   ```
3. Start the development server:
   ```sh
   ng serve
   ```

### Additional Notes
- If `node_modules` is not installed, run:
  ```sh
  npm install
  ```
- To serve the project directly from the command line:
  ```sh
  ng serve
  ```

## Generating Components and Pages
To generate a new component or page, use the Angular CLI:
```sh
ng g component [folder-name]/[component-name]
```
Alternatively, use:
```sh
ng generate component [folder-name]/[component-name]
```

## Building the Project
To build the project, run:
```sh
ng build
```
