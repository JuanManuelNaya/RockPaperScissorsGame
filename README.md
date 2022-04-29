# Play Rock Paper Scissors against our Robot!

1. ## Purpose of the Project

* The Play Rock Paper Scissors against our Robot!, is a website that users can use to play a game of rock paper scissors, the purpose can be just for fun.

![Responsive](/docs/Responsive.JPG)


* ## Ready Website

![ReadyWebsite](/docs/readyWebsite.JPG)

2. ## User Stories

* As a user, I want to play a game.
* As a user, I want to send some feedback to the creators of the game.
* As a user, I want a confirmation that I won.
* As a user, I want a confirmation that I lost.
* As a user, I want confirmation that the game was a draw.


3. ## Features

* **Header**

![Header](/docs/heder.JPG)

* On the left side of the header, we have the title that says "Play Rock Paper Scissors!", which explains very clearly the purpose of the website.
* The title will be displayed with a text machine effect.
* On the right side of the header we have a contact us section, in case the user wants to send a message to the creators of the website.
* The title background contrast well against the font color making it very easy to read.
* The header area fulfills its purpose.

* **Score Board**

![ScoreBoard](/docs/scoreBoard.JPG)

* This section will show the score of the user vs the robot, it will update in every single round.
* The background color contrast with the font color make it very easy to read.
* The Score Boar area fulfills its purpose.

* **Result**

![Result](/docs/message.JPG)

* This result section, initially will say "Make your move".
*  will update in each round depending on the result saying the following messages:
- Rock loses to Paper. You lost!
- Rock equals Rock. It's a draw
- Rock beats Scissors. You win!
- Paper loses to Scissors. You lost!
- Paper equals Paper. It's a draw
- Paper beats Rock. You win!
- Scissors beat Paper. You win!
- Scissors losses to Rock. You lost!
- Scissors equals Scissors. It's a draw

* The background color contrast with the font color make it very easy to read.
* This Result area fulfills its purpose.

* **GameOptions**

![GameOptions](/docs/Options.JPG)

* These sections consist of three round images in the shape of buttons.
* The user can choose his move between rock, paper, or scissors.
* When the user hovers the mouse on one of these options it will have a darker tone of blue.
* When the user wins a game it will glow green when the user loses a game it will glow red and if the user loses it will glow grey.
* The Game Options area fulfills its purpose.

* **Footer**

![footer](/docs/footer.JPG)

* On the right side of the footer we have the rules of the game which area "Rock blunts Scissors | Paper covers Rock | Scissors cut Pappe".
* On the left side of the footer we have the different social media.
* The background color contrast with the font color make it very easy to read.
* The footer section fulfills its purpose.

4. ## Future Features

* In the future I could add some visual effect when the user wins, lose, and when it's a draw.

5. ## Typography and color scheme

* For this website I selected the font style Roboto for the header, footer, and body.
* Font color for header, footer, and result sections are in a dark tone.
* Background color for the body is sky blue.
* Color for header and footer is white.
* Game score area and result are in white.
* User tag and computer tag are in a tone of dark, which contrasts with the font very well.
* Both colors and styles on this website are easy to read and fit the idea of the website.

6. ## Wireframes
 
* To do a wireframe for this website I use the program Balsamiq.

* Desktop Wireframe
> ![desktop](/docs/DesktopWireframe.JPG)

* Mobile Wireframe
> ![mobile](/docs/MobieWireframe.JPG)

7. ## Technologies
 
* GitHub (server backing up my project, creating deployed and live links)
* GitPod (work environment)
* HTML to give structure to the website (header, body, footer, divs, lists, anchor tag, etc)
* CSS to style my website (background color, font style, sizes, etc)
* JavaScript to create interactivity on my website (header message, game mechanic of game rock paper scissors)

8. ## Testing
 
* I tested this website and confirm that it works on different browsers such as Chrome, Firefox, and Microsoft Edge.
* I confirm that this project is responsive, looks good, and functions on all standard screen sizes using the dev tool device toolbar.
* I confirm that all sections of this website are easy to read and understand.

9. ## Bugs
 
**Solved bugs**

* I had a bug when playing the game and winning my score was not updated
* I had to check my win function to realize I didn't name my variable created before properly. I change it from userScore to userScore_span to update my score in the Html.

before:
`userScore.innerHTML = userScore;`

after:
`userScore_span.innerHTML = userScore;`

10. ## Validator Testing
 
-HTML
    -No errors were found when passing through the official W3C HTML validator.
 
-CSS
    -No errors were found when passing through the official  W3C CSS validator.

-JavaScript
    -No errors were found when passing through the jshint website.
 
-Accessibility
    -I confirm that the colors and fonts chosen are easy to read and accessible by running it through lighthouse in dev tools

-Playing a game of Rock Paper Scissors
    -Input: The player opens the website sees the header title "Play Rock Paper Scissors", then he moves the mouse to one of the three images of rock paper, or scissors, click on it, then it will light up green if you win, grey if it is a draw, and red if you lose.
    -Output: Player will see the score of him vs robot as a result on the scoreboard on top of the images with the message from the last round stating if it was a win, loss, or draw.

![Accesibility](/docs/LightHouse.JPG)

11. ## Deployment
 
* The website is hosted by GitHub.
* The steps are taken to display the website where the following:
    - In the GitHub repository, navigate to the settings tab.
    - From the setting tab scroll down to the GitHub pages area and click.
    - Next, we need to select the main branch and press save.
    - This will generate a link to the website.
 
* This website was coded with GitPod, which is an open-source development platform for remote development.
* The steps to use it are the following:
    - Open a browser, then typing  Git pod on google will lead to the website link.
    - Open user account whit username and password.
    - Once you are in your user Git Pod account, hover with the mouse on the vertical dots that you wanna open.
    Click on it, then press open.
    - It opens a workplace, this workplace allows the user: to create files, code in different programming languages, and use commands on the terminal to do many different things such as display a website with the code that we use and see how it looks.

12.  ## Deployed link
    - Deployed link to the site: [RockPaperScissorsGame](https://juanmanuelnaya.github.io/RockPaperScissorsGame/)

13. ## Live link to the project
    - Live link to the project from GitHub: [RockPaperScissorsGame](https://github.com/JuanManuelNaya/RockPaperScissorsGame)

14. ## Credits

    - Font source: [Font Awesome](https://fontawesome.com/search?q=sort&m=free)

    - Image source: [googleimages](https://www.google.ie/imghp?hl=en&tab=ri&authuser=0&ogbl)
                [Clipartmax](https://www.clipartmax.com/)

    - The website was inspired by [FreeCodeCamp](https://www.youtube.com/watch?v=jaVNP3nIAv0)

    - Code for the social media taken from [CodeInstitute](https://learn.codeinstitute.net/ci_program/diplomainsoftwaredevelopmentecommerce)

