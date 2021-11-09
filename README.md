# FindMyCar_Back
Unit 3 Project: Jimmy Nguyen &amp; Zach Monea

Technologies Used:
------------------
* HTML
* CSS
* Javascript
* Express
* MongoDB
* Mongoose
* React
* Heroku
* GitHub
* Trello

Approach Taken:
---------------
We set up a trello and began discussing user stories and what we wanted the app to be able to do. We narrowed down the functionality to **MVP** and **Stretch Goal** categories. Then we divided up the work to get the ball rolling. Zach tackled the front end set up while Jimmy tackled the back end set up. The back end was a lot quicker to set up so Jimmy got to work on setting up the database and heroku. Once Zach finished the basic front end set up, we both set up and linked our Github repos. Once all of the set up was done, we continued to divide tasks on the trello board and work on those tasks.

Issues Along The Way:
---------------------
1. **GitHub** was giving us issues with pushing and pulling. Jimmy used https while Zach used SSH to clone the other person's repo. When we figured that out it was a simple fix of creating a new route that was SSH to match Zach's route and https to match Jimmy's route.
2. **Heroku** gave us a problem when trying to deploy our front end app. Jimmy noticed that after creating the front end app in the terminal and doing a `git remote -v`, there wasn't a Heroku path like there was after creating the back end app on Heroku. We tried to create a path using `git remote add` + heroku link and although we had the path now, it still was throwing errors when we would try to push to heroku. Jimmy also noticed that on the main Heroku page, there wasn't a language declared like there was for the backend app (Node.js). After troubleshooting with another classmate, Jessica Im, she was able to explain to  us that our `.git` file was not on the same level as our `package.json` and that was our issue. After moving our files around and trying to redeploy, it worked! React sometimes creates directories within our directories for the react app and that was what was messing us up. Instead of just creating the app in the `FindMyCar_Front` directory, it created a `FindMyCar` directory inside the `FindMyCar_Front` and created the files there.
3. Zach created the edit form to edit the cars data and a buy button to display "out of stock" once clicked. Our problem was when you would click the edit button, the edit form would show for every single car, not just the car that we clicked it and the same thing happened with the buy button. Every time you would click the buy button, "out of stock" would show for every single car. Zach realized that the way our map function was set up, it was running for every single car in our car array. Zach fixed this buy separating the map function from the car data by creating a separate component to display the car's individual data and then passing the edit and buy function as props. This allowed for the edit form to display only for the individual car and not all of them. Likewise for the buy button.
4. Connecting heroku front end to heroku backend versus running on localhost:3000.

Unsolved Problems:
------------------
1. When logged in, if user creates new car, it auto logs the user out when you submit new car info.
2. When attempting to create the Search Bar,  ran into an issue of being able to pass in the props but could not find a direct way to return a filter list based on what was in a different sibling component.

Future Improvements:
-------------------
1. Search Bar Functionality
2. Change Login / Create new user to modal or separate page
3. Display user on car cards.
4. Show page with users information for buyers to reach out.
5. Google maps to find local dealerships.

Link to my live site:
---------------------
https://findmycar-frontend.herokuapp.com/