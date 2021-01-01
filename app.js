const menu = {
    _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
      },
    get appetizers() {
    return this._courses.appetizers = appetizers;
      },
    get mains() {
    return this._courses.mains = mains;
      },
    get deserts() {
    return this._courses.deserts = desserts;
      },
    set appetizers(appetizers) {
      return this._courses.appetizers = appetizers;
      },
    set mains(mains) {
      return this._courses.mains = mains;
      },
      set desserts(desserts) {
      return this._courses.deserts = desserts;
      }, 
    get courses() {
       return {
        appetizers: this.appetizers
      };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {  
    name: dishName,
    price: dishPrice,
   };
  return this._courses[courseName].push(dish);
  },
 getRandomDishFromCourse(courseName) {
const dishes = this._courses[courseName];
const randomIndex = Math.floor(Math.random () * dishes.length);
    return dishes[randomIndex];
    },
generateRandomMeal() {
const appetizer = this.getRandomDishFromCourse('appetizers');
const main = this.getRandomDishFromCourse('mains');
 const dessert = this.getRandomDishFromCourse('desserts');
const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name},he price is ${totalPrice}.`;
   }
};
     
  menu.addDishToCourse('appetizers', 'Caesar Salad', 5.50);
  menu.addDishToCourse('appetizers', 'Carrot and Coriander Soup', 4.25);
  menu.addDishToCourse('appetizers', 'Prawn Coctail', 5.50);
  menu.addDishToCourse('mains', 'chicken Kiev', 11.25);
  menu.addDishToCourse('mains', 'Beef Curry and Basamti Rice', 11.50);
  menu.addDishToCourse('mains', 'Quiche Loraine and Side Salad', 10.50);
  menu.addDishToCourse('desserts', 'Chocolate Mouse', 5.25);
  menu.addDishToCourse('desserts', 'New York Cheese Cake', 5.50);
  menu.addDishToCourse('desserts', 'Fruit Salad and Ice Cream', 5.50);
  menu.addDishToCourse('desserts', 'Coffee and Petite Four', 5.50);
  menu.addDishToCourse('desserts', 'Cheese and biscuits', 5.50);

let meal = menu.generateRandomMeal();
console.log(meal);
    

