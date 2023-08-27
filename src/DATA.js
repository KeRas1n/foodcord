import sushi from './img/sushi.png'
import flatSushi from './img/flat-sushi.png'
import burger from './img/burger.png'
import flatBurger from './img/flat-burger.png'
import flatPizza from './img/pizza-flat.png'
import flatDrink from './img/flatDrink.png'
import pizza from './img/pizza.png'

export const CATEGORIES = [
    {id:1, name:"Top Products", img:flatPizza},
    {id:2, name:"Burgers", img:flatBurger},
    {id:3, name:"Sushi", img:flatSushi},
    {id:4, name:"Pizza", img:flatPizza},
    {id:5, name:"Drinks", img:flatDrink},
]

export const PRODUCTS  = [
    {id:1, img:burger, name:"MegaBurger", price:"12.99", category:['Top Products', "Burgers"]},
    {id:2, img:burger, name:"Cheeseburger", price:"9.99", category:["Burgers"]},
    {id:3, img:sushi, name:"SuperSet", price:"14.99", category:['Sushi']},
    {id:4, img:flatPizza, name:"Pizza Peperoni", price:"5.99", category:['Top Products', "Pizza"]},
    {id:5, img:flatDrink, name:"Cola", price:"2.99", category:['Top Products', "Drinks"]},
    {id:6, img:pizza, name:"Pizza Neapolitan ", price:"5.99", category:['Top Products', "Pizza"]},
    {id:7, img:flatPizza, name:"Pizza Sicliana", price:"5.99", category:['Top Products', "Pizza"]},
    {id:8, img:pizza, name:"Pizza", price:"5.99", category:['Top Products', "Pizza"]},
    {id:9, img:flatBurger, name:"SuperBurger", price:"8.99", category:['Top Products', "Burgers"]},
    {id:10, img:sushi, name:"SuperUltraSet", price:"44.99", category:['Top Products','Sushi']},
    {id:11, img:pizza, name:"Pizza", price:"5.99", category:["Pizza"]},
    {id:12, img:flatPizza, name:"Pizza Viennese", price:"5.99", category:['Top Products', "Pizza"]},
    {id:13, img:pizza, name:"Pizza Vegetariana", price:"5.99", category:['Top Products', "Pizza"]},
    {id:14, img:burger, name:"NiceBurger", price:"7.99", category:['Top Products', "Burgers"]},
    {id:15, img:flatDrink, name:"Fantal", price:"7.99", category:['Top Products', "Drinks"]},
    {id:16, img:flatDrink, name:"Sprunk", price:"7.99", category:['Top Products', "Drinks"]},


]