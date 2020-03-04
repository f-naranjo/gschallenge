# Phone Catalogue Challenge

Project Structure:
- **Server** : REST API Built with NodeJS & Express
- **Client** : APP Built in React / Redux / Sagas / Styled Components

---
## Installation

First we need to clone the project

```bash
$ git clone https://github.com/f-naranjo/gschallenge.git
```

Then we will go to the **server** folder inside the repo and set up:

```bash
$ cd server
$ npm i
$ touch .env
```

Open the  **.env** file we have just created inside **server** folder and create a new variable **PORT** with a value of **4000**:

```bash
PORT=4000
```
Now we can run the server:

```bash
$ npm run dev
```

If for any reason the server does not start, you may have to install nodemon:
```
$ npm i nodemon
```

Now we need to set up the **client** folder:

### Client:
```bash
$ cd..
$ cd client
$ npm install
$ touch .env
```

Open the  **.env** file we have just created inside **server** folder and create a new variable:

```bash
REACT_APP_API_URL=http://localhost:4000
```

Run the App:
```bash
npm start
```
---

## Usage

Go to [http://localhost:3000](http://localhost:3000) to see the phone catalogue and click the links to see phone details.

You can also navigate to a Phone detail Page by going to the direct link following this structure:
```bash
http://localhost/3000/{PhoneName}/detail
```
Example: [http://localhost:3000/Iphone-7/detail](http://localhost:3000/Iphone-7/detail)

If the user tries to go to a link that doesn't exist he will be redirected to a 404 page.

If the server send a bad request, the user will be notified by an error message.

---


Francisco Naranjo
