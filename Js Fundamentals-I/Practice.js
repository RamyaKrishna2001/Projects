function a() {
  console.log(this);
}

const b = function () {
  console.log(this);
};

const c = () => console.log(this);

// a();
// b();
// c();

const person = {
  name: 'Ramya',
  birthYear: 2001,
  city: 'Hyderbad',

  getAge: function () {
    console.log(this);
    console.log(this.birthYear);
    // return 2022 - this.birthYear;
    //In the case of Function Declarations/Function Expressions the 'this' keyword points to window Object
    // let getCity = function () {
    //     console.log(this);
    //     console.log(this.city);
    //   };
    //getCity(); //Here the getCity method is not refering to any context/Object\

    // The Arrow Functions will refer to 'this' in the lexical scope i.e, Outer environment
    let getCity = () => {
      console.log(this);
      console.log(this.city);
    };
    getCity();
  },
};

// person.getAge();

//DESTRUCTURING OF ARRAYS
const restaurant = {
  name: 'Classico Italiano',
  location: 'via Angelo Tavanti 23,Firenze, Italy',
  categories: ['Italian', 'pizzeria', 'vegetarian', 'organic'],
  staterMenu: ['Focaccia', 'Bruschetta', 'Garlic_Bread', 'Caprese_salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (staterIndex, mainIndex) {
    return [this.staterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
};

const [stater, mainCourse] = restaurant.order(2, 2);
console.log(stater, mainCourse);

// const num = [1, 23, 6, 77];
// let [i, j, k, l] = restaurant.staterMenu;
// console.log(i, l);
// console.log(i, j, k, l);

// [i, l] = [l, i];
// console.log(i, l);

// [i, j, k, l] = [i, k, j, l];
// console.log(i, j, k, l);

const num = [1, 11, 2, 3];
const [e, f = 1, g = 1, h = 1, m = 1] = num;
console.log(e, f, g, h, m);
