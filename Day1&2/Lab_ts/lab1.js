var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1-	Create array that accept  number only the cast value to string
var arr;
arr = [1, 2, 3, 4, 5];
console.log(arr.toString());
// 2-	Create array that accept string and number only and print all items
var arr2;
arr2 = [1, 2, 3, "fatma", "gad"];
console.log(arr2);
// 3-	Create enum and add  a unique number values for each enum 
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 100] = "Red";
    Colors[Colors["Blue"] = 200] = "Blue";
    Colors[Colors["Pink"] = 300] = "Pink";
    Colors[Colors["Purple"] = 400] = "Purple";
})(Colors || (Colors = {}));
var red = Colors.Red;
console.log(red);
// 4-	Create a variable that accept number and Boolean only 
var x;
x = 1;
x = false;
function sum(x, y) {
    x + y;
}
sum(1, 2);
sum("ahmed", "mohamed");
var Employee = /** @class */ (function () {
    function Employee(_id, _name, _username, _email, _address, _city, _zipcode, _geo) {
        this.id = _id;
        this.name = _name;
        this.username = _username;
        this.email = _email;
        this.address = _address;
        this.city = _city;
        this.geo = _geo;
    }
    Object.defineProperty(Employee.prototype, "getUsername", {
        get: function () {
            return this.username;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "setUsername", {
        set: function (_userName) {
            this.username = _userName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "getAddress", {
        get: function () {
            return this.address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "setAddress", {
        set: function (_address) {
            this.address = _address;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var emp = new Employee(1, "Leanne Graham", "Bret", "Sincere@april.biz", { street: "Kulas Light", suite: "Apt. 556" }, "Gwenborough", "92998-3874", { lat: "-37.3159", lng: "81.1496" });
console.log(emp);
//7-  Manager class
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(ManagerId, _id, _name, _username, _email, _address, _city, _zipcode, _geo) {
        var _this = _super.call(this, _id, _name, _username, _email, _address, _city, _zipcode, _geo) || this;
        _this.ManagerId = ManagerId;
        return _this;
    }
    return Manager;
}(Employee));
var Mang = new Manager(100, 1, "Leanne Graham", "Bret", "Sincere@april.biz", { street: "Kulas Light", suite: "Apt. 556" }, "Gwenborough", "92998-3874", { lat: "-37.3159", lng: "81.1496" });
console.log(Mang.ManagerId, Mang.getAddress);
