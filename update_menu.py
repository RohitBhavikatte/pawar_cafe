import json
import os

menu_path = "data/fullMenu.json"

with open(menu_path, "r", encoding="utf-8") as f:
    menu_data = json.load(f)

def get_dish_details(name, category):
    name_lower = name.lower()
    ingredients = []
    hook = ""

    if category == "Pizza":
        ingredients = ["Fresh Hand-tossed Dough", "Signature Pizza Sauce"]
        if "paneer" in name_lower:
            ingredients.extend(["Marinated Paneer", "Capsicum", "Onion", "Mozzarella"])
            hook = "A delightful fusion of soft paneer and stretchy cheese."
        elif "peri" in name_lower:
            ingredients.extend(["Peri Peri Spices", "Jalapenos", "Mozzarella"])
            hook = "Spicy, tangy, and bursting with Peri Peri flavor."
        elif "corn" in name_lower:
            ingredients.extend(["Sweet Corn", "Mozzarella", "Oregano"])
            hook = "Sweet and savory perfection in every slice."
        elif "mashroom" in name_lower:
            ingredients.extend(["Fresh Mushrooms", "Mozzarella", "Black Olives"])
            hook = "Earthy mushrooms met with gooey cheese."
        elif "burst" in name_lower:
            ingredients.extend(["Liquid Cheese", "Mozzarella", "Cheddar", "Herbs"])
            hook = "Experience an absolute explosion of cheese!"
        elif "all toping" in name_lower:
            ingredients.extend(["Onion", "Capsicum", "Tomato", "Paneer", "Corn", "Olives", "Mozzarella"])
            hook = "The ultimate loaded pizza experience."
        else:
            ingredients.extend(["Mozzarella Cheese", "Cheddar", "Herbs"])
            hook = "A timeless classic overloaded with gooey cheese."

    elif category == "Burgers":
        ingredients = ["Soft Toasted Bun", "Lettuce", "Signature Sauce"]
        if "paneer" in name_lower:
            ingredients.extend(["Crispy Paneer Patty", "Tomato", "Onion"])
            hook = "Crunchy on the outside, soft paneer on the inside."
        elif "schezwan" in name_lower:
            ingredients.extend(["Crispy Veg Patty", "Spicy Schezwan Sauce", "Onion"])
            hook = "A fiery kick of Schezwan in every bite."
        elif "corn" in name_lower:
            ingredients.extend(["Sweet Corn Patty", "Cheese Slice", "Tomato"])
            hook = "Sweet, cheesy, and incredibly satisfying."
        else:
            ingredients.extend(["Crispy Veg Patty", "Tomato", "Onion", "Cheese Slice"])
            hook = "The perfect crunch layered with rich flavors."

    elif category == "Sandwich":
        ingredients = ["Premium Bread", "Butter", "Green Chutney"]
        if "paneer" in name_lower:
            ingredients.extend(["Spiced Paneer", "Capsicum", "Onion", "Cheese"])
            hook = "Grilled to golden perfection with rich paneer."
        elif "chocolate" in name_lower:
            ingredients = ["Premium Bread", "Melted Chocolate", "Butter", "Chocolate Chips"]
            hook = "A sweet, warm, gooey chocolate delight."
        elif "corn" in name_lower:
            ingredients.extend(["Sweet Corn", "Mayonnaise", "Cheese"])
            hook = "Creamy, cheesy, and perfectly grilled."
        else:
            ingredients.extend(["Cucumber", "Tomato", "Onion", "Cheese", "Chat Masala"])
            hook = "A crispy, classic street-style grilled sandwich."

    elif category == "Chinese Food":
        if "rice" in name_lower:
            ingredients = ["Premium Basmati Rice", "Spring Onion", "Carrot", "Soy Sauce"]
            hook = "Wok-tossed perfection with authentic flavors."
            if "schezwan" in name_lower: ingredients.append("Schezwan Sauce"); hook = "Spicy and intensely flavorful wok-tossed rice."
            elif "paneer" in name_lower: ingredients.append("Fried Paneer Cubes"); hook = "Rich paneer cubes tossed in aromatic rice."
            elif "manchurian" in name_lower: ingredients.append("Manchurian Balls"); hook = "The ultimate Indo-Chinese rice combo."
        elif "noodle" in name_lower:
            ingredients = ["Hakka Noodles", "Cabbage", "Capsicum", "Soy Sauce"]
            hook = "Classic street-style wok-tossed noodles."
            if "schezwan" in name_lower: ingredients.append("Schezwan Sauce"); hook = "Fiery hot noodles tossed in Schezwan sauce."
        elif "manchurian" in name_lower:
            ingredients = ["Cabbage & Carrot Dumplings", "Garlic", "Dark Soy Sauce", "Spring Onion"]
            hook = "Crispy dumplings glazed in a savory, garlicky sauce."
        elif "pasta" in name_lower:
            ingredients = ["Penne Pasta", "Capsicum", "Corn", "Oregano"]
            if "white" in name_lower:
                ingredients.extend(["Creamy Bechamel Sauce", "Cheese"])
                hook = "Rich, creamy, and loaded with cheese."
            else:
                ingredients.extend(["Tangy Tomato Sauce", "Chilli Flakes"])
                hook = "A tangy and slightly spicy Italian delight."
        elif "paneer" in name_lower or "65" in name_lower or "chilli" in name_lower:
            ingredients = ["Paneer Cubes" if "paneer" in name_lower else "Cauliflower/Potato", "Spicy Batter", "Curry Leaves", "Chilli"]
            hook = "Spicy, crispy, and deeply flavorful."
        else:
            ingredients = ["Fresh Veggies", "Soy Sauce", "Garlic", "Ginger"]
            hook = "Authentic wok-tossed Chinese flavors."

    elif category == "Momos":
        ingredients = ["Refined Wheat Wrapper", "Cabbage", "Carrot", "Onion"]
        if "cheese" in name_lower:
            ingredients.append("Processed Cheese")
        if "peri peri" in name_lower:
            ingredients.append("Peri Peri Seasoning")
        
        if "fried" in name_lower:
            hook = "Crispy golden exterior with a juicy, flavorful filling."
            ingredients.append("Oil for Frying")
        else:
            hook = "Soft, delicate parcels steamed to perfection."

    elif category == "Fries":
        ingredients = ["Premium Cut Potatoes", "Vegetable Oil"]
        if "peri" in name_lower:
            ingredients.append("Spicy Peri Peri Mix")
            hook = "Crispy, golden fries tossed in fiery Peri Peri."
        elif "twister" in name_lower:
            ingredients.append("Secret Spices")
            hook = "A crunchy, spiral potato delight."
        else:
            ingredients.append("Sea Salt")
            hook = "Classic, golden, and perfectly salted."

    elif category == "Missal":
        ingredients = ["Sprouted Moth Beans (Matki)", "Spicy Tarri/Rassa", "Farsan", "Chopped Onion", "Lemon"]
        hook = "The authentic, fiery taste of Maharashtra."

    elif category == "Pav Bhaji":
        ingredients = ["Mashed Potatoes", "Peas", "Tomatoes", "Secret Bhaji Masala", "Soft Pav"]
        if "cheese" in name_lower:
            ingredients.append("Grated Cheese")
            hook = "Rich, buttery bhaji topped with a mountain of cheese."
        elif "paneer" in name_lower:
            ingredients.append("Paneer Cubes")
            hook = "A royal twist to the classic street food."
        else:
            ingredients.append("Amul Butter")
            hook = "Rich, buttery, and packed with street-style flavor."

    elif category == "Vadapav":
        if "paties" in name_lower:
            ingredients = ["Spiced Potato Filling", "Flaky Puff Pastry"]
            hook = "Golden, flaky, and baked to perfection."
        else:
            ingredients = ["Spiced Potato Patty (Vada)", "Soft Pav", "Dry Garlic Chutney", "Green Chutney"]
            if "cheese" in name_lower:
                ingredients.append("Cheese Slice")
                hook = "A cheesy upgrade to the ultimate street food."
            elif "grill" in name_lower:
                ingredients.append("Butter")
                hook = "Crispy grilled pav with a spicy potato heart."
            else:
                hook = "The legendary, authentic taste of street food."

    elif category == "Beverage":
        if "coffee" in name_lower:
            ingredients = ["Espresso Decoction", "Chilled Milk", "Sugar", "Ice Cream"]
            hook = "Thick, creamy, and instantly refreshing."
        elif "mango" in name_lower:
            ingredients = ["Mango Crush", "Chilled Water/Soda", "Ice"]
            hook = "A sweet, tropical escape in a glass."
        elif "mojito" in name_lower:
            ingredients = ["Fresh Mint", "Lemon", "Soda", "Sugar Syrup"]
            hook = "Zesty, minty, and perfectly thirst-quenching."
        else:
            ingredients = ["Secret Ingredients", "Ice"]
            hook = "Cool, refreshing, and delicious."
            
    else:
        ingredients = ["Fresh Ingredients", "Secret Spices"]
        hook = "Prepared fresh with the finest ingredients."

    return ingredients, hook

for cat in menu_data:
    for item in cat["items"]:
        ing, hk = get_dish_details(item["name"], cat["category"])
        item["ingredients"] = ing
        item["hook"] = hk

with open(menu_path, "w", encoding="utf-8") as f:
    json.dump(menu_data, f, indent=2)

print("fullMenu.json updated successfully.")
