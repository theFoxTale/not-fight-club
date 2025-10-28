**Язык:** [English](README_en.md) | [Русский](README.md)

## Browser Game "Fight Club"
This is my homework for [RS School](https://rs.school/), JS / Front-end Course 2025 Q3

1. **Task**: [link](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/notFightClub/README.md)
2. **Deployment** (you can see how the website works): [link](https://thefoxtale.github.io/portfolio/)

![Main Page](assets/screenshots/main.jpg)

<details>
<summary>Additional screenshots</summary>

![Medium](assets/screenshots/medium.jpg)
![Small](assets/screenshots/small.jpg)
</details>

### Task Description:

1. Registration Screen (10 points)
   - [ ] Contains an input that allows the player to enter their name. After entering the name, it will be used on all other screens, so it's important to store it somewhere. <b>+10 points</b>


2. Home Page (5 points)
   - [ ] Has a start button that creates a new fight and opens the fight page when clicked. <b>+5 points</b>


3. Character Page (25 points)
   - [ ] The page contains a character avatar <b>+5 points</b>
   - [ ] The page displays a list of wins, losses, and the player's name <b>+5 points</b>
   - [ ] The page provides the ability to select a new avatar (implemented in the demo by hovering over the avatar and an additional window. However, for the task, it's not necessary to do it exactly this way - the main thing is that the avatar can be changed). Images can be taken from the internet, and we must maintain decency :) <b>+15 points</b>


4. Settings Page (10 points)
   - [ ] Allows changing the player's name. As with the avatar, you can come up with your own method, but the main thing is that such an opportunity exists and the new name is displayed in other parts of the game. <b>+10 points</b>


5. Fight Page (100 points)
   - [ ] The page displays the player and the opponent with an interactive health counter that changes according to the fight logic. <b>+20 points</b>
   - [ ] When creating a fight, the opponent is selected from a pre-created pool (meaning you have several opponents (at least 2) with different settings). <b>+5 points</b>
   - [ ] Full working fight mechanics according to the requirements are implemented. <b>+15 points</b>
   
      Mechanics description:
      - There are attack zones and defense zones. Each turn, the player selects one point to attack and two points to defend (it's better to leave clarifying description on this matter). Until the player selects the correct number of points, the game does not allow them to attack (in the demo, for example, the button is active only if the selection is correct).
      - After pressing the button, an exchange of blows occurs.
      - Each monster also has its own settings for attack and defense zones (in the demo, there are 3 opponents, and each has different capabilities: for example, the spider attacks two points and blocks one; the troll attacks one point but blocks three). This must be considered when creating opponents.
      - Where exactly the opponent attacks and what they block is chosen randomly. For example, if the spider attacks two zones, then each turn these are two random points, but they should not coincide (it cannot attack the legs twice, or the troll blocking the head three times - that doesn't make sense).
      - After that, we compare who attacked where and who blocked what. In case of mismatches, damage is dealt or received. For example, if the player attacked the head and the opponent blocked the head - no damage is dealt, and vice versa.
      - After the exchange of blows, the results are summarized, and both fighters lose health.

   - [ ] Critical hit mechanics are implemented. According to this mechanics, the player and the opponent have a chance to deal critical damage. In this case, if the hit was not blocked, the opponent receives additional damage (in the demo, the damage coefficient is 1.5 times the normal damage). If the hit was blocked, the block is penetrated and critical damage is also dealt. What specific health pool, damage, critical hit chance, and critical damage coefficient the player and opponents have is up to everyone to decide. There are no requirements or restrictions, except one: health must be at least 3 times higher than damage so that fights don't end in one turn (in the demo, for example, there is no balance and it's almost impossible to win :) <b>+5 points</b> If fights end in one turn - <b>penalty of 20 points</b>.

   - [ ] There is a fight log for every action. +55 points
          
      The fight logic is quite complex, and, in fact, you don't have to implement it, but do pseudo-fights. That's why only 15 points are given for the mechanics, and 55 points for the fight logs. Fight logs are not complex functionality, but they allow the player and reviewers to understand what happened and why. How to generate the log: each attack has a result. For example, if the player attacked one point and the opponent attacked two, as a result of the turn, 3 entries with results should appear in the log. Everyone is free to choose the texts themselves, but each log must contain the following information: WHO attacked, WHO was attacked, WHERE they attacked, HOW MUCH damage was dealt. (Capitalized words indicate what must be specified.)
     - [ ] For logs <b>+50 points</b>
     - [ ] Text element highlighting as in the demo is implemented (different styles for key information) <b>+5 points</b>.


6. Bonus Task
   - [ ] Full data storage is implemented, allowing not only to continue playing with your character when reloading the page, but also saving fight results and the full state of the fight that was in progress. <b>+20 points</b>
