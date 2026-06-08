const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Configure this client with your real projectId and a write token
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'demo_project_id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2026-06-07',
  token: process.env.SANITY_API_TOKEN, // Requires a write token
});

async function importData() {
  if (!process.env.SANITY_API_TOKEN) {
    console.warn("WARNING: SANITY_API_TOKEN is missing. Data import will fail if not authenticated.");
  }

  const dataPath = path.join(__dirname, 'fullMenu.json');
  const rawData = fs.readFileSync(dataPath, 'utf8');
  const fullMenu = JSON.parse(rawData);

  for (const categoryData of fullMenu) {
    console.log(`Importing Category: ${categoryData.category}...`);
    
    // Create the Category document
    const categoryDoc = {
      _type: 'category',
      title: categoryData.category,
      description: `All items for ${categoryData.category}`
    };

    try {
      const createdCategory = await client.create(categoryDoc);
      console.log(`Created Category: ${createdCategory.title} (${createdCategory._id})`);

      // Create Menu Items for this Category
      for (const item of categoryData.items) {
        // Handle prices like "99/149" by just taking the first number for the schema's 'price' field
        const basePrice = parseInt(item.price.split('/')[0]) || 0;
        
        const menuItemDoc = {
          _type: 'menuItem',
          title: item.name,
          slug: { current: item.name.toLowerCase().replace(/\s+/g, '-') },
          price: basePrice,
          category: {
            _type: 'reference',
            _ref: createdCategory._id,
          },
          isHighlight: false,
        };

        const createdItem = await client.create(menuItemDoc);
        console.log(`  Created Item: ${createdItem.title}`);
      }
    } catch (error) {
      console.error(`Error importing category ${categoryData.category}:`, error.message);
    }
  }

  console.log("Import Complete!");
}

importData();
