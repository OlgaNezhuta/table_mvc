var View = (function () {    
function View () {
    this.template = '<tr><td>{{Name}}</td><td>{{Age}}</td><td>{{Evaluation}}</td></tr>';
    this.drawn = '<tr><th>Name</th><th>Age</th><th>Evaluation</th></tr>';
    this.table = $('.table');
  };
    
    View.prototype.render = function (data) {
    	var self = this;

        data.forEach(function (item) {
        	self.drawn += self.template.replace("{{Name}}", item.Name).replace("{{Age}}", item.Age).replace("{{Evaluation}}", item.Evaluation);
        });

        $(this.table).html(this.drawn);
    };
    
   
    
   return View;
})();