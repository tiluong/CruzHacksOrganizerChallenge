# CruzHacksOrganizerChallenge
# Tiffany Luong (tiluong@ucsc.edu)

To Run: 
node server/server.js

GET Request:
curl -XGET -H ‘Content-Type: localhost/json’ http://localhost:3306/hackers

PUT Request: (example)
curl -XPUT -d "name=tiff&email=lol@omg.com" http://localhost:3306/hackers