# RoomID

## Overview
RoomID is a web application that allows users to upload images of empty rooms and receive AI-generated decoration suggestions. The application uses Replicate's API to generate room designs based on user-uploaded images.

## Features
- User-friendly interface with animations and vibrant color schemes.
- AI-generated decoration suggestions based on uploaded images.
- Easy navigation and visually appealing outputs.

## Getting Started

### Prerequisites
- Node.js
- npm
- Replicate API Key

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/RoomID.git
   cd RoomID
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory and add your Replicate API key:
     ```sh
     REPLICATE_API_KEY=your-replicate-api-key
     ```

### Running the Application
1. Start the server:
   ```sh
   node server.js
   ```

2. Open the application in your browser:
   - Navigate to `http://localhost:3000`.

### Usage
1. Upload an image of an empty room using the file input.
2. Click the "Generate Design" button to see the AI-generated decoration suggestions.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
