# Phone Catalogue Challenge

Project Structure:
- **Server** : REST API Built with NodeJS & Express
- **Client** : APP Built in React / Redux / Sagas / Styled Components

## Installation

### Server:
```bash
npm i
```

Create **.env** file inside **server** folder with this settings:
```bash
PORT=4000
```

Run the server:
```bash
npm run dev
```

### Client:
```bash
npm i
```

Create **.env** file inside **client** folder with this settings:
```bash
REACT_APP_API_URL=http://localhost:4000
```

Run the App:
```bash
npm start
```

## Usage

Go to [http://localhost:3000](http://localhost:3000) to see the phone catalogue and click the links to see phone details.

You can also navigate to a Phone detail Page by going to the direct link following this structure:
```bash
http://localhost/3000/{PhoneName}/detail
```
Example: [http://localhost:3000/Iphone-7/detail](http://localhost:3000/Iphone-7/detail)

If the user tries to go to a link that doesn't exist he will be redirected to a 404 page.

If the server send a bad request, the user will be notified by an error message.


Francisco Naranjo