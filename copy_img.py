import os
import shutil
import glob

source_dir = r"C:\Users\ROHIT\.gemini\antigravity-ide\brain\c298eae6-081c-4929-bd89-8f0bd7190892"
dest_dir = r"public\images"
import os
import shutil

source_file = os.path.join(source_dir, "french_fries_1780990766467.png")
dest_file = os.path.join(dest_dir, "french-fries.jpg")

if os.path.exists(source_file):
    shutil.copy(source_file, dest_file)
    print("Copied successfully")
else:
    print("Source file not found")
