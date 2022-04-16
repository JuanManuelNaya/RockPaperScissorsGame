# Play Rock Paper Scissors against our Robot!

1. ## Purpose of the Project

* The Play Rock Paper Scissors against our Robot!, is a website that users can use to play a game of rock paper scissors, the purpose can be just for fun.

![Responsive](/images/responsive.JPG)

2. ## User Stories

* As a user I will read the tile in the header that says "Play Rock Paper Scissors against our Robot!" I will look at the game board with my score vs the robot score. I will read the rules on the footer, then make my move by selecting one of the three images rock paper or scissors. I will see a message after my move telling me if it is a win, lose or draw. The score will be updated for each round.

3. ## Features

* **Header**

![Header](/images/header.JPG)

* The header presents the website with the title "Play Rock Paper Scissors against our Robot!" , wich explain very clearly the purpose of the website.
* The title blackground contrast well against the font color making it very easy to read.
* The header area fulfills its purpose.

* **Score Board**

![ScoreBoard](/images/score-board.JPG)

* This section will show the score of the user vs the robot, it will update in every single round.
* The background color contraste with the font color make in it very easy to read.
* The Score Boar area fulfills its purpose.

* **Result**

![Result](/images/Result.JPG)

* This result section, initially will say "Make your move".
*  will update in each round depending on the result saying the following messages:
- Rock loses to Paper . You lost!
- Rock equals Rock . It's a draw
- Rock beats Scissors . You win!
- Paper loses to Scissors . You lost!
- Paper equals Paper . It's a draw
- Paper beats Rock . You win!
- Scissors beats Paper . You win!
- Scissors loses to Rock . You lost!
- Scissors equals Scissors . It's a draw

* The background color contraste with the font color make in it very easy to read.
* This Result area fulfills its purpose.

* **GameOptions**

![GameOptions](/images/GameOptions.JPG)

* This sections consist of three round images in the shape of button.
* The user can chose his move between rock, paper or scissors.
* The Game Options area fulfills its purpose.

* **Footer**

![footer](/images/footer.JPG)

* This section has the rules of the game wich area "Rock blunts Scissors | Paper covers Rock | Scissors cut Pappe".
* The background color contrast with the font color make in it very easy to read.
* The footer section fulfills its purpose.

4. ## Future Features

* In a future I could add some visual effect when the user win, lose and when it's a draw.

5. ## Typography and color scheme

* For this website I selected the font style Roboto for header, footer and body.
* Font color for header, footer, and result it's a dark tone.
* Background color for body is sky blue.
* Color for header and footer is white.
* Game score area and result is in white.
* User tag and computer tag is in a tone of dark, that contrast with the font very well.
* Both colors and styles on this website are easy to read and fit the idea of the website.

6. ## Wireframes
 
* To do a wireframe for this website I use the program Balsamic.

7. ## Technologies
 
* GitHub
* GitPod
* HTML
* CSS
* JavaScript

8. ## Testing
 
* I tested this website and confirm that it works on different browsers such as Chrome, Firefox, Microsoft Edge.
* I confirm that this project is responsive, looks good, and functions on all standard screen sizes using the dev tool device toolbar.
* I confirm that all sections of this website are easy to read and understand.

9. ## Bugs
 
**Solved bugs**

* I had a bug when playing the game and winning my score was not updated
* I had to check my win function to realise I didn't name my variable created before properly, i change it form userScore to userScore_span to update my socre in the html

before:
`userScore.innerHTML = userScore;`

after:
`userScore_span.innerHTML = userScore;`

10. ## Validator Testing
 
-HTML
    -No errors were found when passing through the official W3C HTML validator.
 
-CSS
    -No errors were found when passing through the official  W3C CSS validator.
 
-Accessibility
    -I confirm that the colors and fonts chosen are easy to read and accessible by running it through lighthouse in dev tools

![Accesibility](/images/Accesibility.JPG)

11. ## Deployment
 
* The website is hosted by GitHub.
* The steps are taken to display the website where the following:
    - In the GitHub repository, navigate to the settings tab.
    - From the setting tab scroll down to the GitHub pages area and click.
    - Next, we need to select the main branch and press save.
    - This will generate a link to the website.
 
* This website was coded with GitPod, which is an open-source development platform for remote development.
* The steps to use it are the following:
    - Open a browser, then typing  Git pod on google will lead  to the website link.
    - Open user account whit username and password.
    - Once you are in your user Git Pod account, hover with the mouse on the vertical dots that you wanna open.
    Click on it, then press open.
    - It opens a workplace, this workplace allows the user: to create files, code in different programming languages, use commands on the terminal to do many different things such as display a website with the code that we use and see how it looks.

    **Deployed link to the site:** [RockPaperScissorsGame](https://juanmanuelnaya.github.io/RockPaperScissorsGame/)

    **Live link to the project from GitHub:** [RockPaperScissorsGame](https://github.com/JuanManuelNaya/RockPaperScissorsGame)

    12. ## Credits

    Font source: [Font Awesome](https://fontawesome.com/search?q=sort&m=free)

    Image source: [googleimages](https://www.google.ie/imghp?hl=en&tab=ri&authuser=0&ogbl)
                  [Clipartmax](https://www.clipartmax.com/)

    Website was inspired by [FreeCodeCamp](https://www.youtube.com/watch?v=jaVNP3nIAv0)

