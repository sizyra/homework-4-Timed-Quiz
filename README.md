# Homework 4: Timed Coding Quiz

Desc:
This app will allow the user to take a timed multiple-choice quiz on simple coding matters and facts. It will ask 25 questions and give the user 2 minutes to complete the test.
The user will earn one point for each correct answer. They will lose five seconds from the testing time for each incorrect answer. 
If they answer all the questions or run out of time, the app will allow them to record their score with their initials. They may take it again to try and beat their score.

Updates:
Workday 1: 
Arranged basic formatting and initial working pieces. Installed a start button that will disappear when clicked, allowing new visuals to take its place.

	To-do:
	- Use JS to create a <div> for each question and its answers.
	- Arrange <div>s to disappear when unneeded and for new ones to take their place.
	- Arrange timer to be displayed from the moment the start button is clicked.
	- Connect timer to answers so that incorrect ones will lower time, and running out of time will end the quiz.

Workday 2 & 3:
Created functioning quiz with score increasing for every correct answer. 
Timer starts at button press and counts down from 60 to 0. 
Time is penalized for every incorrect answer correctly.

	Issues:
	- Cannot get final screen (no questions, area for initials) to show up.
	- Timer can glitch and go below 0 if a question is answer wrong too close to 0.

	To-do:
	- Ensure recorded answers are stored locally

Workday 4:
Fixed issue with final screen and with timer glitch. Ensured all answers were stored locally.