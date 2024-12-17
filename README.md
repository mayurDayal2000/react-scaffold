# 🚀 React Scaffold

A starter kit to quickly bootstrap React projects with modern tools and configurations. This setup includes React.js with TypeScript, Vite for blazing fast builds, React Router for routing, Redux Toolkit for state management, TailwindCSS for styling, GitHub Actions for automated version bumping, and support for path aliases and SVGs via vite-plugin-svgr.

## 📦 Features

- **React.js with TypeScript** - Strongly typed React development for better code maintainability.
- **Vite** - Modern development server and build tool for fast project performance.
- **React Router v7** - Integrated routing solution for multi-page applications.
- **Redux Toolkit** - Modern state management for scalable React apps.
- **TailwindCSS** - Utility-first CSS framework for rapid and consistent UI development.
- **Path Alias Support** - Use @ as an alias for clean and manageable imports.
- **SVG Support** - Import SVGs as React components using vite-plugin-svgr.
- **Yarn Package Manager** - Optimized package management with Yarn.
- **GitHub Actions** - Automatic version bumping for package.json on commits to the main branch.

<br>

## 🛠️ Installation

👉 Clone this repository:

```bash
$ git clone https://github.com/mayurDayal2000/react-scaffold.git
$ cd react-scaffold
```

👉 Install dependencies using Yarn:

```bash
$ yarn install
```

👉 Start the development server:

```bash
$ yarn dev
```

The app will be running on http://localhost:3000.

👉 Build for production:

```bash
$ yarn build
```

👉 Preview the production build:

```bash
$ yarn preview
```

<br>

## 🚀 GitHub Actions: Intelligent Version Bump

### Workflow Overview

The project includes a custom GitHub Actions workflow to automatically bump the version in package.json based on a patch, minor, or major increment.

### How It Works:

1. Automatic Version Bump:
   1. Reads the current version in package.json.
   2. Increments the patch version (e.g., 1.0.0 → 1.0.1).
   3. If the patch exceeds 9, it resets and increments the minor version (e.g., 1.0.9 → 1.1.0).
   4. If the minor exceeds 9, it resets and increments the major version (e.g., 1.9.9 → 2.0.0).
2. Commit and Push:
   1. Commits the updated package.json file with a message like Bump version to 1.0.1.
   2. Pushes the changes back to the main branch using GitHub Actions authentication.
3. Automation:
   1. Triggered whenever a commit is pushed to the main branch.

<br>

## 🌟 Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

<br>

## 📝 License

This project is open-source.

<br>

## 📄 Author

Developed by [@mayurDayal2000](https://github.com/mayurDayal2000). Reach out on GitHub.
