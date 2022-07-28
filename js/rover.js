export class Mars_rover {
    constructor(location = [0, 0], direction = 'North', command ='') 
    {
      this.location = location;
      this.direction = direction;
      this.command=command;
      this.directions = ['North', 'East', 'South', 'West'];
      if (direction === 'North')      this.dir = 0;
      else if (direction === 'East')  this.dir = 1;
      else if (direction === 'South') this.dir = 2;
      else if (direction === 'West')  this.dir = 3;
    }


    move(command)
    {
        var xIncrement = 0, yIncrement = 0;
        if (this.direction === 'North') {
            yIncrement = 1;
        } else if (this.direction === 'East') {
            xIncrement = 1;
        } else if (this.direction === 'South') {
            yIncrement = -1;
        } else if (this.direction === 'West') {
            xIncrement = -1;
        }
        if (command === 'B') {
            xIncrement *= -1;
            yIncrement *= -1;
        }

        this.location = [this.location[0] + xIncrement, this.location[1] + yIncrement];
    }

    
    rotate(command) 
    {
        if (command === 'L') 
        {
            this.dir = (this.dir - 1);
            if (this.dir === -1) this.dir = 3;
        } 
        else {
            this.dir = (this.dir + 1);
            if (this.dir === 4) this.dir = 0;
        }
        this.direction = this.directions[this.dir];
    }

    getCommands(command)
    {
        let arr = command.split("");
        return arr;
    }   

}
