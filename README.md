# DayPlanner
A small application for logging things to do by the hour

this application logs the curent date and time using the Moment.js library and formats the background color of the text areas based on the current hour
 
if the hour is past the color will be red, if the hour is current the color will be gray, if the color is upcoming the color will be green

each label, text area, and button is created using a for loop; looping through an array with each hour (workday) listed as a string

each button saves the text area directly to the left of it and logs the value of the text area in local storage. 

the green complete buttons remove the logged local storage item corresponding to the text area to the left of it.

the save all button logs all of the text area values at once and te complete all button removes all of the logged items at once if the confrimation window is confirmed.

each button refreshes the page as well so the user receives the most updated page.

URL: https://github.com/pjpetro/DayPlanner
