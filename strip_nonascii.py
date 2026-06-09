import sys

file_path = 'c:/projects/pawar cafe/pawar-cafe-app/components/MenuGrid.tsx'

with open(file_path, 'rb') as f:
    data = f.read()

# Replace any non-ascii byte with a space or appropriate ascii string
# Let's decode with 'ignore' to just strip them
text = data.decode('utf-8', 'ignore')

# Fix any remaining stuff just in case
with open(file_path, 'w', encoding='ascii', errors='ignore') as f:
    f.write(text)

print("Stripped non-ascii!")
