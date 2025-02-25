# Darkweb Scanner API

This project implements a Darkweb Scanner API using the IntelX service. It includes both a frontend HTML interface and a backend Node.js server to query dark web data relevant to a specified domain or company.

## Setup

### Prerequisites

- Node.js and npm installed on your system
- An API key from IntelX (You can sign up at https://intelx.io/)

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies:

   ```
   npm install express axios
   ```

4. Open `app.js` and replace the `API_KEY` constant with your IntelX API key:

   ```javascript
   const API_KEY = 'your-api-key-here';
   ```

## Usage

### Starting the Server

1. In the project directory, run:

   ```
   node app.js
   ```

2. The server will start running on `http://localhost:3000` (or the port specified in your environment variables).

### Using the API

The API exposes a single endpoint:

- `GET /search/:data`

Replace `:data` with the search term you want to query.

Example using cURL:

```
curl http://localhost:3000/search/example.com
```

This will return JSON data containing search results from the dark web related to your query.

### Frontend Interface

1. Open `index.html` in a web browser.
2. Enter your search term in the provided field and click "Search".
3. Results will be displayed on the page.

Note: Make sure to update the `API_KEY` in `index.html` as well if you plan to use the frontend interface directly.

## Testing

You can test the API using Postman or any similar API testing tool:

1. Set up a GET request to `http://localhost:3000/search/:data`
2. Replace `:data` with your search term
3. Send the request and examine the response

## Limitations and Considerations

- The current implementation is limited to 10 results per search.
- Ensure you comply with IntelX's terms of service and usage limits.
- Be cautious when handling potentially sensitive information returned from dark web searches.

## Future Improvements

- Implement error handling and input validation
- Add rate limiting to prevent API abuse
- Enhance the frontend interface with better styling and more features
- Implement caching to improve performance and reduce API calls

