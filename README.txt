Milestone Project 1 - Building a Platform scroller game
by Robert Behm

As a kid born in the early ninties, I discovered "Super Mario Land: 6 Golden Coins" 
on Game Boy and it quickly became my favorite game for a decade. A few decades later, 
I was very excited to get a chance to learn how to creaste a platform game of my own.

I first brainstormed the key components of the game and I came up with the following:
Character - move, jump, duck, attack
Terrain - floor, platforms, background, blocks, fire/spikes/death pits
NPC Charaters - move back and forth, make main character lose health
Events - die, level up, lose health, kill npc, beat level
Create Parallax scroll effect

I started the game development and attempted to use a move function code that manipulated the position of the player on the screen.
I quickly found out that just moving position would not work because the character would not be able to jump and move right or left at the same time. I need to create a velocity component and add gravity to make a playable experience. 

I was also exploring how to create the illusion that the character was moving through the level. I found out that a paralax scroll effect in combination with moving the terrain was the way to make this happen. 

At this point I found this tutorial on how to build a platform game:
https://www.youtube.com/watch?v=4q2vvZn5aoo
In this video, Chris walks through the logic and process to build a platform game. This video was helpful for me to learn how to use Canvas, walk though how to build the physics, collision detection, parallax scroll, and sprite character animation. 

In the tutorial, Chris uses a separate library to crate a live server to display his images, but I was able to use VS Code's 'Live Server" feature to do the same thing. 

I was able to find copyright free graphics for the parallax background and the sprite animated character from Itch.io. 

The parallax images I found had 5 different layers included, which create a sprauling hillside illusion when each of the distant layers scroll at a slower speed than the near layers. 

The sprite character was also very interesting to learn about because the attached image is a series of still images of the character that make the character come to life when cycled through quickly. 

I really enjoyed this project because it challenged me to learn new things to create my game while deepening my confidence with javascript and thinking like a programmer.

At the time of presentation, I still have a few things to build out:
NPC characters
Mystery Boxes w/ power ups
moving platforms
attack function for main character
and improved win animation
multiple levels
music and sound effects
health