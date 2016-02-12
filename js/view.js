var View = (function () {    
function View () {
    this.template = '<tr> + <th>{{Name}}</th> + <th>{{Age}}</th> + <th>{{Evaluation}}</th> + </tr>';
    this.drawn = '';
    this.table = $('.table');
  };
    
    View.prototype.render = function () {
        this.drawn = '';
        $(this.table).html(this.drawn);
    };
    
   
    
   return View;
})();