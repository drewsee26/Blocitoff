## Blocitoff

A self destructing to-do list built with AngularJS and Firebase

## Pull Down the Code

Start by cloning the repository:

```
$ git clone https://github.com/drewsee26/blocitoff <your-project-name>
```

## Reset Git

Remove the existing local Git repository:

```
$ rm -r -f .git
```

Initialize a new Git repository, add all of these existing files, and commit them:

```
$ git init
$ git add .
$ git commit -m "initial commit"
```

Go to Github and create a new repository. Add that new repository as the proper remote. Then push your initial commit.

```
$ git remote add origin <URL TO NEW GITHUB REPO>
$ git push origin master
```

## Configuration

The project uses Node to run a JS server in development.

Install the project dependencies by running:

```
$ npm install
```

If you have not done so already, create a Firebase account and set up your Firebase project.

- Go to https://console.firebase.google.com/
- Create a new project
- Name the project and choose your country/region
- From the Overview page, click the button to 'Add Firebase to your web app'.
- That will popup a message with some pre-filled JS code that looks like the below code snippet. Copy/paste that snippet into bottom of the body tag in your index.html file

```
<script>
// Initialize Firebase
    var config = {
        apiKey: <your unique api key>,
        authDomain: <your unique auth url>,
        databaseURL: <your unique db url>,
        storageBucket: <your unique bucket url>,
        messagingSenderId: <your unique messagingSenderId>
    };
    firebase.initializeApp(config);
</script>
```

## Run the Application

Run the application server:

```
$ npm start
```


