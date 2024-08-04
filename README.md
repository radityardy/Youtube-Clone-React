

# PlayVideo Component

This project is a React component that plays a video and displays related information such as views, likes, dislikes, shares, and comments. It is designed to mimic a YouTube video player interface.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```sh
    git clone git@github.com:radityardy/Youtube-Clone-React.git
    ```

2. Navigate to the project directory:
    ```sh
    cd Youtube-Clone-React
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```

## Usage

To use the `PlayVideo` component, simply import it into your React application and include it in your JSX.

```javascript
import React from "react";
import PlayVideo from "./path/to/PlayVideo";

function App() {
  return (
    <div className="App">
      <PlayVideo />
    </div>
  );
}

export default App;
```

## Project Structure

```
your-repo-name/
├── public/
│   └── ...
├── src/
│   ├── assets/
│   │   ├── dislike.png
│   │   ├── jack.png
│   │   ├── like.png
│   │   ├── save.png
│   │   ├── share.png
│   │   ├── user_profile.jpg
│   │   └── video.mp4
│   ├── components/
│   │   └── PlayVideo.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

## Dependencies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- Other dependencies as listed in `package.json`

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
