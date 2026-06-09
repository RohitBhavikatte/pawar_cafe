import sys

file_path = 'c:/projects/pawar cafe/pawar-cafe-app/components/MenuGrid.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix rating stars
content = content.replace('\ufffd~.', '★')

# Fix default icon
content = content.replace("\ufffdY?\ufffd?", '🍽️')

# Fix arrow and rupee
content = content.replace('\ufffd?" \ufffd\'\ufffd', '- ₹')

# Fix comment
content = content.replace('Dish List \ufffd?" Marquee if >5 items, Static Grid if \ufffd%\ufffd5', 'Dish List - Marquee if >5 items, Static Grid if <=5')

# Remove any remaining replacement characters just in case
content = content.replace('\ufffd', '')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Replaced!")
