# CruzHacks Organizer Challenge (Backend)
## Tiffany Luong (tiluong@ucsc.edu)

To Run: 

```node server/server.js```

In a separate terminal


GET Request:

```curl -XGET -H ‘Content-Type: localhost/json’ http://localhost:3306/hackers```


PUT Request (example): 

```curl -XPUT -d "name=tiff&email=lol@omg.com" http://localhost:3306/hackers```