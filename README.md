## Basic Express Discord BOT

### Outline

A discord bot that outputs custom commands in discord servers. At the moment set up to take api calls and return hardcoded text responses. Goal is to eventually make api calls to google calender and return events/schedules. 

### Creating Commands

1. Set command name, description, and type in commands.js. '/' + name will be the command in discord. Names must be unique as each command is unique.
2. Run ```<node commands.js>```. This sets the commands in the discord app
3. Run server ```<nodemon ./bin/www>``` ONLY if not already running
