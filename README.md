# Good Burger
A full stack single page application built with MySQL, Node, Express, Handlebars and a homemade ORM. Allows users to add new burgers, adding them to the Order Up List, and "devour" burgers with a click, adding them to the Eaten list.

Burger is deployed at Heroku: [Good Burger](https://blooming-thicket-67396.herokuapp.com/)

## Design Details

* The front end is displayed using the templating engine Handlebars with routes handled by express

* When the site loads, the contents of the MySQL table are displayed on the screen, either on the Order Up list or the Eaten list based on the conditions of the devoured field for each row.

* If a user orders a new burger by typing the name and clicks Submit, the burger will be added to the mySQL database, and will automatically be added to the order up list.

## Application Video
Coming Soon!

### Authors

* **Lisa Vinson** - [LiVinson](https://github.com/LiVinson)
