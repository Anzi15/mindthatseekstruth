export function generateEbookHtml(items) {
  const date = new Date();

  console.log("recieved items")
  console.log(items)

  return `
    <div class='container' style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
      <h1 style="text-align: center; color: #333; font-size: 24px; margin-bottom: 10px;">MIND THAT SEEKS TRUTH</h1>

        ${items.map(item => itemHtml(item.product)).join('')}

      <footer style="margin-top: 30px; text-align: center; color: #999; font-size: 14px;">
        <p>&copy; ${date.getFullYear()} Mind that seeks truth. All rights reserved.</p>
      </footer>
    </div>`;
}

const itemHtml = (item) => {
  return `
    <div class='image-container' style="text-align: center; margin-bottom: 20px;">
      <h2 class='heading' style="font-size: 20px; color: #555; margin-bottom: 10px;">${item.title}</h2>
      <a href="${item.downloadLink || "https://example.com"}" 
   style="display: inline-block; padding: 10px 20px; font-size: 16px; color: white; background-color: #007BFF; text-decoration: none; border-radius: 5px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: background-color 0.3s ease;"
   target="_blank" 
   rel="noopener noreferrer">
   Download
</a>

    </div>`;
};
