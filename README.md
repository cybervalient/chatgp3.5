# OpenAI API  - Node.js example ChatGPT

This is an example chat app used in the OpenAI API [quickstart tutorial](https://platform.openai.com/docs/quickstart). It uses the [node js](https://nodejs.org/en/) framework with [express js](https://expressjs.com/). Check out the tutorial or follow the instructions below to get set up.

## Setup

1. If you don’t have Node.js installed, [install it from here](https://nodejs.org/en/) (Node.js version >= 14.6.0 required)

2. Clone this repository

3. Navigate into the project directory

   ```bash
   $ cd gpt-3.5
   ```

4. Install the requirements

   ```bash
   $ npm install
   ```


   ```
5. Add your [API key](https://platform.openai.com/account/api-keys) to the newly created index.js file into apiKey:

 const configuration = new Configuration({
  organization: "",
 apiKey: "",
 });

6. Run the app

   ```bash
   $ npx nodemon index.js
   ```

You should now be able to access the app at [http://localhost:5000](http://localhost:5000) 