var Model = (function () {
    function Model() {
        this.students = [{
                Name: "John",
                Age: 20,
                Evaluation: 10
        },
            {
                Name: "Jane",
                Age: 18,
                Evaluation: 11
        },
            {
                Name: "Jim",
                Age: 21,
                Evaluation: 8   
        },
           {
                Name: "Pete",
                Age: 18,
                Evaluation: 5
        },
            {
                Name: "Jack",
                Age: 25,
                Evaluation: 6   
        },
            {
                Name: "Vicky",
                Age: 18,
                Evaluation: 7
        },
            {
                Name: "Ann",
                Age: 21,
                Evaluation: 10   
        },
            {
                Name: "Robert",
                Age: 18,
                Evaluation: 9
        }
        
    ]
    }
    
    Model.prototype.get - function () {
        return this.students;
    };
    
    return Model;
})();