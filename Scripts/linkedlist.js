/*
// pushVal: add value on condition greater than the last element
// pop: remove from the end of array
// unshift: Add value to the beginning
// shift: Remove value from the beginning
*/ 

var LnkdLst = {
    data: [],

    pushVal: function(val) {
        if (this.data.length == 0 ||
            (this.data[this.data.length - 1].value < val)) {

            this.data.push({ value: val });
            return "Value added successfully :)";
        } else {
            return "Enter a value greater than the last item :)";
        }
    },

    pop: function() {
        if (this.data.length > 0) {
            this.data.pop();
            return "Done poping :)";
        } else {
            return "List is empty :(";
        }
    },

    unshift: function(val) {
        this.data.unshift({ value: val });
        return "Value added to the beginning.";
    },

    shift: function() {
        if (this.data.length > 0) {
            this.data.shift();
            return "First element removed.";
        } else {
            return "List is empty.";
        }
    },

    addVal: function(val) {
        if (this.data.length === 0) {
            this.data.push({ value: val });
            return "Value added successfully :)";
        } else {
            var inserted = false;
            for (var i = 0; i < this.data.length; i++) {
                if (this.data[i].value > val) {
                    this.data.splice(i, 0, { value: val });
                    inserted = true;
                    break;
                }
            }
            if (!inserted) {
                this.data.push({ value: val });
            }
            return "Value added successfully :)";
        }
    },

    removeVal: function(val) {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].value === val) {
                this.data.splice(i, 1);
                return "Removed :)";
            }
        }
        return "Data not found :(";
    },

    
    display: function() {
        return this.data.map(item => item.value);
    }
};


var testList = LnkdLst;

console.log(testList.pushVal(10)); 
console.log(testList.display()); //[10]

console.log(testList.pushVal(20));
console.log(testList.display()); //[10, 20]
// remains unchanged because last element 20 > 15
console.log(testList.pushVal(15));
console.log(testList.display()); //[10, 20]

console.log(testList.pushVal(30)); // Should return "Value added successfully."
console.log(testList.display()); // Should display [10, 20, 30]

console.log(testList.pop()); // Should return "Done :)"
console.log(testList.display()); // Should display [10, 20]
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Test unshift
console.log(testList.unshift(5));
console.log(testList.display()); //[5,10,20]

// Test shift
console.log(testList.shift()); 
console.log(testList.display()); //[10,20]

// Test addVal
console.log(testList.addVal(15));
console.log(testList.display()); //[10,15,20]

console.log(testList.addVal(5));
console.log(testList.display());//[5,10,15,20]

// Test removeVal
console.log(testList.removeVal(5));
console.log(testList.display()); //[10,15,20]

