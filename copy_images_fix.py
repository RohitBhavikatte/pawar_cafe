import os
import shutil
import glob

source_dir = r"C:\Users\ROHIT\.gemini\antigravity-ide\brain\2e66eb3b-d950-4b6f-b748-3706a1bf559b"
dest_dir = r"C:\projects\pawar cafe\pawar-cafe-app\public\images"

os.makedirs(dest_dir, exist_ok=True)

files_to_copy = [
    ("special_misal_*.png", "special_misal.png"),
    ("vada_pav_*.png", "vada_pav.png"),
    ("hakka_noodles_*.png", "hakka_noodles.png"),
    ("cheese_pizza_*.png", "cheese_pizza.png"),
    ("veg_burger_*.png", "veg_burger.png"),
    ("cold_coffee_*.png", "cold_coffee.png"),
    ("veg_steam_momos_*.png", "veg_steam_momos.png"),
]

for pattern, new_name in files_to_copy:
    search_path = os.path.join(source_dir, pattern)
    matches = glob.glob(search_path)
    if matches:
        shutil.copy2(matches[0], os.path.join(dest_dir, new_name))
        print(f"Copied {matches[0]} to {new_name}")
    else:
        print(f"Could not find {pattern}")
