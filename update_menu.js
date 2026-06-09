const fs = require('fs');
const path = require('path');

const menuPath = path.join(__dirname, 'data', 'fullMenu.json');
const menuData = JSON.parse(fs.readFileSync(menuPath, 'utf8'));

const categoryImages = {
  "Pizza": "/images/cheese_pizza.png",
  "Burgers": "/images/veg_burger.png",
  "Sandwich": "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=900&auto=format&fit=crop",
  "Chinese Food": "/images/hakka_noodles.png",
  "Momos": "/images/veg_steam_momos.png",
  "Fries": "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=900&auto=format&fit=crop",
  "Missal": "/images/special_misal.png",
  "Pav Bhaji": "https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=900&auto=format&fit=crop",
  "Vadapav": "/images/vada_pav.png",
  "Beverage": "/images/cold_coffee.png",
};

function getDishDetails(name, category) {
    const nameLower = name.toLowerCase();
    let ingredients = [];
    let hook = "";

    if (category === "Pizza") {
        ingredients = ["Fresh Hand-tossed Dough", "Signature Pizza Sauce"];
        if (nameLower.includes("paneer")) {
            ingredients.push("Marinated Paneer", "Capsicum", "Onion", "Mozzarella");
            hook = "A delightful fusion of soft paneer and stretchy cheese.";
        } else if (nameLower.includes("peri")) {
            ingredients.push("Peri Peri Spices", "Jalapenos", "Mozzarella");
            hook = "Spicy, tangy, and bursting with Peri Peri flavor.";
        } else if (nameLower.includes("corn")) {
            ingredients.push("Sweet Corn", "Mozzarella", "Oregano");
            hook = "Sweet and savory perfection in every slice.";
        } else if (nameLower.includes("mashroom")) {
            ingredients.push("Fresh Mushrooms", "Mozzarella", "Black Olives");
            hook = "Earthy mushrooms met with gooey cheese.";
        } else if (nameLower.includes("burst")) {
            ingredients.push("Liquid Cheese", "Mozzarella", "Cheddar", "Herbs");
            hook = "Experience an absolute explosion of cheese!";
        } else if (nameLower.includes("all toping")) {
            ingredients.push("Onion", "Capsicum", "Tomato", "Paneer", "Corn", "Olives", "Mozzarella");
            hook = "The ultimate loaded pizza experience.";
        } else {
            ingredients.push("Mozzarella Cheese", "Cheddar", "Herbs");
            hook = "A timeless classic overloaded with gooey cheese.";
        }
    } else if (category === "Burgers") {
        ingredients = ["Soft Toasted Bun", "Lettuce", "Signature Sauce"];
        if (nameLower.includes("paneer")) {
            ingredients.push("Crispy Paneer Patty", "Tomato", "Onion");
            hook = "Crunchy on the outside, soft paneer on the inside.";
        } else if (nameLower.includes("schezwan")) {
            ingredients.push("Crispy Veg Patty", "Spicy Schezwan Sauce", "Onion");
            hook = "A fiery kick of Schezwan in every bite.";
        } else if (nameLower.includes("corn")) {
            ingredients.push("Sweet Corn Patty", "Cheese Slice", "Tomato");
            hook = "Sweet, cheesy, and incredibly satisfying.";
        } else {
            ingredients.push("Crispy Veg Patty", "Tomato", "Onion", "Cheese Slice");
            hook = "The perfect crunch layered with rich flavors.";
        }
    } else if (category === "Sandwich") {
        ingredients = ["Premium Bread", "Butter", "Green Chutney"];
        if (nameLower.includes("paneer")) {
            ingredients.push("Spiced Paneer", "Capsicum", "Onion", "Cheese");
            hook = "Grilled to golden perfection with rich paneer.";
        } else if (nameLower.includes("chocolate")) {
            ingredients = ["Premium Bread", "Melted Chocolate", "Butter", "Chocolate Chips"];
            hook = "A sweet, warm, gooey chocolate delight.";
        } else if (nameLower.includes("corn")) {
            ingredients.push("Sweet Corn", "Mayonnaise", "Cheese");
            hook = "Creamy, cheesy, and perfectly grilled.";
        } else {
            ingredients.push("Cucumber", "Tomato", "Onion", "Cheese", "Chat Masala");
            hook = "A crispy, classic street-style grilled sandwich.";
        }
    } else if (category === "Chinese Food") {
        if (nameLower.includes("rice")) {
            ingredients = ["Premium Basmati Rice", "Spring Onion", "Carrot", "Soy Sauce"];
            hook = "Wok-tossed perfection with authentic flavors.";
            if (nameLower.includes("schezwan")) { ingredients.push("Schezwan Sauce"); hook = "Spicy and intensely flavorful wok-tossed rice."; }
            else if (nameLower.includes("paneer")) { ingredients.push("Fried Paneer Cubes"); hook = "Rich paneer cubes tossed in aromatic rice."; }
            else if (nameLower.includes("manchurian")) { ingredients.push("Manchurian Balls"); hook = "The ultimate Indo-Chinese rice combo."; }
        } else if (nameLower.includes("noodle")) {
            ingredients = ["Hakka Noodles", "Cabbage", "Capsicum", "Soy Sauce"];
            hook = "Classic street-style wok-tossed noodles.";
            if (nameLower.includes("schezwan")) { ingredients.push("Schezwan Sauce"); hook = "Fiery hot noodles tossed in Schezwan sauce."; }
        } else if (nameLower.includes("manchurian")) {
            ingredients = ["Cabbage & Carrot Dumplings", "Garlic", "Dark Soy Sauce", "Spring Onion"];
            hook = "Crispy dumplings glazed in a savory, garlicky sauce.";
        } else if (nameLower.includes("pasta")) {
            ingredients = ["Penne Pasta", "Capsicum", "Corn", "Oregano"];
            if (nameLower.includes("white")) {
                ingredients.push("Creamy Bechamel Sauce", "Cheese");
                hook = "Rich, creamy, and loaded with cheese.";
            } else {
                ingredients.push("Tangy Tomato Sauce", "Chilli Flakes");
                hook = "A tangy and slightly spicy Italian delight.";
            }
        } else if (nameLower.includes("paneer") || nameLower.includes("65") || nameLower.includes("chilli")) {
            ingredients = [nameLower.includes("paneer") ? "Paneer Cubes" : "Cauliflower/Potato", "Spicy Batter", "Curry Leaves", "Chilli"];
            hook = "Spicy, crispy, and deeply flavorful.";
        } else {
            ingredients = ["Fresh Veggies", "Soy Sauce", "Garlic", "Ginger"];
            hook = "Authentic wok-tossed Chinese flavors.";
        }
    } else if (category === "Momos") {
        ingredients = ["Refined Wheat Wrapper", "Cabbage", "Carrot", "Onion"];
        if (nameLower.includes("cheese")) ingredients.push("Processed Cheese");
        if (nameLower.includes("peri peri")) ingredients.push("Peri Peri Seasoning");
        if (nameLower.includes("fried")) {
            hook = "Crispy golden exterior with a juicy, flavorful filling.";
            ingredients.push("Oil for Frying");
        } else {
            hook = "Soft, delicate parcels steamed to perfection.";
        }
    } else if (category === "Fries") {
        ingredients = ["Premium Cut Potatoes", "Vegetable Oil"];
        if (nameLower.includes("peri")) {
            ingredients.push("Spicy Peri Peri Mix");
            hook = "Crispy, golden fries tossed in fiery Peri Peri.";
        } else if (nameLower.includes("twister")) {
            ingredients.push("Secret Spices");
            hook = "A crunchy, spiral potato delight.";
        } else {
            ingredients.push("Sea Salt");
            hook = "Classic, golden, and perfectly salted.";
        }
    } else if (category === "Missal") {
        ingredients = ["Sprouted Moth Beans (Matki)", "Spicy Tarri/Rassa", "Farsan", "Chopped Onion", "Lemon"];
        hook = "The authentic, fiery taste of Maharashtra.";
    } else if (category === "Pav Bhaji") {
        ingredients = ["Mashed Potatoes", "Peas", "Tomatoes", "Secret Bhaji Masala", "Soft Pav"];
        if (nameLower.includes("cheese")) {
            ingredients.push("Grated Cheese");
            hook = "Rich, buttery bhaji topped with a mountain of cheese.";
        } else if (nameLower.includes("paneer")) {
            ingredients.push("Paneer Cubes");
            hook = "A royal twist to the classic street food.";
        } else {
            ingredients.push("Amul Butter");
            hook = "Rich, buttery, and packed with street-style flavor.";
        }
    } else if (category === "Vadapav") {
        if (nameLower.includes("paties")) {
            ingredients = ["Spiced Potato Filling", "Flaky Puff Pastry"];
            hook = "Golden, flaky, and baked to perfection.";
        } else {
            ingredients = ["Spiced Potato Patty (Vada)", "Soft Pav", "Dry Garlic Chutney", "Green Chutney"];
            if (nameLower.includes("cheese")) {
                ingredients.push("Cheese Slice");
                hook = "A cheesy upgrade to the ultimate street food.";
            } else if (nameLower.includes("grill")) {
                ingredients.push("Butter");
                hook = "Crispy grilled pav with a spicy potato heart.";
            } else {
                hook = "The legendary, authentic taste of street food.";
            }
        }
    } else if (category === "Beverage") {
        if (nameLower.includes("coffee")) {
            ingredients = ["Espresso Decoction", "Chilled Milk", "Sugar", "Ice Cream"];
            hook = "Thick, creamy, and instantly refreshing.";
        } else if (nameLower.includes("mango")) {
            ingredients = ["Mango Crush", "Chilled Water/Soda", "Ice"];
            hook = "A sweet, tropical escape in a glass.";
        } else if (nameLower.includes("mojito")) {
            ingredients = ["Fresh Mint", "Lemon", "Soda", "Sugar Syrup"];
            hook = "Zesty, minty, and perfectly thirst-quenching.";
        } else {
            ingredients = ["Secret Ingredients", "Ice"];
            hook = "Cool, refreshing, and delicious.";
        }
    } else {
        ingredients = ["Fresh Ingredients", "Secret Spices"];
        hook = "Prepared fresh with the finest ingredients.";
    }

    return { ingredients, hook };
}

menuData.forEach(cat => {
    cat.items.forEach(item => {
        const details = getDishDetails(item.name, cat.category);
        item.ingredients = details.ingredients;
        item.hook = details.hook;
        item.image = categoryImages[cat.category];
    });
});

fs.writeFileSync(menuPath, JSON.stringify(menuData, null, 2), 'utf8');
console.log("SUCCESS! fullMenu.json has been updated with images, hooks, and ingredients.");
