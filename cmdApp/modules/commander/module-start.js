
function Commander(type) {
    if (this.commands[type]) {
      this.command = this.commands[type];
    } else {
      this.command = this.commands.default;
    }
  };

  Commander.prototype.commands = {
    default: function (input, args) {
      console.log(`details: ${input.noteDetails()} args: ${args}`);
      return true;
    }
  , add: function (input, args) {
      console.log(input.read().forEach((el) => { console.log(el)}));
      console.log(`add: ${input.add()} ,details: ${input.noteDetails()}`);
      console.log(input.read().forEach((el) => { console.log(el)}));
      var json = JSON.stringify(input.read().map((el) => el));
      return json;
    }
  , save: function (input, args) {
      console.log(`save: ${input.save()}`);
      return true;
    }
  , list: function (input, args) {
      console.log(`list: ${input.list().foreach((el) => console.log(el))}`);
      return input.list(); 
    } 
  , remove: function (input, args) {
      console.log(`delete: ${input.delete(args.title)}`);
      return true;
    }   
  };
  
  Commander.prototype.action = function (input, args) {
     return this.command(new input(args.title, args.body), args);
  };

  Commander.prototype.commands['new'] = function (input, args) {
    console.log('new command');  
    console.log(args);
    console.log(this.commands);
    return true;
  }
  


  module.exports = {
      Commander
  }