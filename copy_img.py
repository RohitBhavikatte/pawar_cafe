import os
import shutil
import glob

source_dir = r"C:\Users\ROHIT\.gemini\antigravity-ide\brain\6d6f13ac-a758-4500-a335-c252bed85922"
dest_dir = r"public\images"

os.makedirs(dest_dir, exist_ok=True)

png_files = glob.glob(os.path.join(source_dir, "*.png"))
for file in png_files:
    shutil.copy(file, dest_dir)
    print(f"Copied {file}")
