# Secrets 

This is a simple web application built using Node.js and Express that fetches and displays a random secret from an external API. Each time the user refreshes the page, a new secret and its associated username are displayed.

## Features

- Fetches a random secret from an external API.
- Displays the secret and the username associated with it.
- Simple and user-friendly interface.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mhmdfk/secret-project.git
   cd secret-project
   
2.Install the dependencies:
   ```bash
   npm i
   ```

3.Set up the PostgreSQL database:
  Create a database called your_database_name.
  Create a users table with columns email, password, and secret

4.Run the application:
```bash
  npm nodemon index.js
```
5.Open your browser and navigate to http://localhost:3001.



## Technologies Used

-**Node.js:** JavaScript runtime.
-**Express:** Web framework for Node.js.
-**Axios:** Promise-based HTTP client for the browser and Node.js for making API requests.
-**EJS:** Templating engine for rendering HTML pages.



## Contributing

Feel free to submit issues or pull requests to improve the project or fix bugs.

