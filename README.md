# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Kayla Nguyen

Time spent: 4 hours spent in total

Link to project: https://glitch.com/edit/#!/memory-game-kmnguyen436

## Required Functionality

The following **required** functionality is complete:

* [] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [] "Start" button toggles between "Start" and "Stop" when clicked. 
* [] Game buttons each light up and play a sound when clicked. 
* [] Computer plays back sequence of clues including sound and visual cue for each button
* [] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [] User wins the game after guessing a complete pattern
* [] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [] Buttons use a pitch (frequency) other than the ones in the tutorial
* [] More than 4 functional game buttons
* [] Playback speeds up on each turn
* [] Computer picks a different pattern each time the game is played
* [] Player only loses after 3 mistakes (instead of on the first mistake)
* [] Game button appearance change goes beyond color (e.g. add an image)
* [] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [] Display number of rounds
- [] Display number of mistakes

## Video Walkthrough

Here's a walkthrough of implemented user stories:
Part 1:
![](https://i.imgur.com/deM7hwK.gif)
Part 2:
![](https://i.imgur.com/r4FYIwG.gif)
Part 3:
![](https://i.imgur.com/kYU1G9i.gif)
GIFs created with ezgif.com




## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
    I used stackoverflow.com, geeksforgeek.org, w3schools.com, and tutorialspoint.com for additional help.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
    I experienced several challenges while creating this submission. One was when I wanted to align the “Rounds:” 
text with the start/stop button, but it wouldn't go to the right. After a while, I decided to just use margins 
and manually moved the texts. 
    My next problem was trying to figure out how to change the value after the “Rounds:” 
text. It was initially 0 and I wanted it to increase by one after every completed round. I lacked the knowledge to do
it without help so I looked up solutions on google. I found quite a lot of posts on stackoverflow.com; however, none 
of the solutions didn’t seem to help at first. Luckily, I stumbled upon the right one after going through many different 
links and was able to get my program to work the way I wanted it to. 
    My last problem was figuring out how create random patterns for every new game. It took me significantly less time 
than my first two problems, but I still had abit of trouble with it. I didn’t know why I was getting an error that said 
“Cannot read property ‘length’ of undefined.” I took a closer look at my code and realized I had forgotten to include the
array input for my createPattern function. After that, I tested my program and to my surprise, it works!

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
    How do web developers keep their codes organized when there is a lot of code or functions to add? It seems really 
difficult to keep track of things when there are a lot of small snippets of codes everywhere, especially with a 
fully functional program or website.  I’m also curious to know more about the brainstorming stage of web developing. 
Do web developers draw their ideas first and then make their website? Or is it through continuous trial and error? 
How long does it usually take to make a finished product? How do they save time while maintaining efficiency? 
Is there even an efficient way? 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
    If I had more time, then I would try to make it look better. I would like to make the four buttons be a strange 
shape with a spot in the middle, which will be the fifth button. However, my HTML knowledge is very basic and 
I’m not sure how to create complicated-looking buttons.
    I would also like to include a timer that displays the limited amount of time that forces the player to input 
their guesses quicker. I’m also not sure how I would go about this and would need a lot more time to look do 
some research, implement it in my code, and have it function properly. 



## License

    Copyright [Kayla Nguyen]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
