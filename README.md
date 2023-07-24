# React MD Editor

The dependencies I've had to add to the project:

* react-split 
* react-mde 
* showdown 
* nanoid 
* react-icons

The react-med is not updated to work on React 18 yet, so I had to work around by doing this:

```npm install react-mde --legacy-peer-deps```

Also, for the project to be properly formated, I've had to import this:

```import "react-mde/lib/styles/css/react-mde-all.css"```

More updates to come as I work on the project.

Love, Helio S.
