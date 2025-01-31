export function generateEbookHtml(items) {
  const date = new Date();



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
      <a href="${item.downloadUrl || "https://example.com"}" 
   style="display: inline-block; padding: 10px 20px; font-size: 16px; color: white; background-color: #007BFF; text-decoration: none; border-radius: 5px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); transition: background-color 0.3s ease;"
   target="_blank" 
   rel="noopener noreferrer">
   Download
</a>

    </div>`;
};

export function generateConsultationHtml(data) {
  const { name, day, time, skypeId, planData } = data;

  return `
  <div class='container' style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <h1 style="text-align: center; color: #333; font-size: 24px; margin-bottom: 10px;">MIND THAT SEEKS TRUTH</h1>
    <h2 style="text-align: center; color: #555; font-size: 20px; margin-bottom: 20px;">Booked Consultation Details</h2>

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr style="background-color: #f9f9f9;">
        <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Field</th>
        <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Details</th>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">Name</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">Skype ID</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${skypeId}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">Preferred Day</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${day}</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">Preferred Time</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${time}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">Plan Title</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${planData.title}</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">Price</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">$${planData.price}</td>
      </tr>
      <tr>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">Duration</td>
        <td style="padding: 8px; border-bottom: 1px solid #ddd;">${planData.duration}</td>
      </tr>
    </table>

    <h3 style="color: #555; font-size: 18px; margin-bottom: 10px;">Plan Features:</h3>
    <ul style="list-style-type: disc; margin-left: 20px; color: #666; font-size: 16px;">
      ${planData.features.map(feature => `<li>${feature}</li>`).join("")}
    </ul>

    <p style="margin-top: 20px; color: #777; font-size: 16px;">Mehran will consult you on <strong>${day}</strong>, between <strong>${time}</strong>, via Skype (<strong>${skypeId}</strong>).</p>

    <footer style="margin-top: 30px; text-align: center; color: #999; font-size: 14px;">
      <p>&copy; ${new Date().getFullYear()} Mind that Seeks Truth. All rights reserved.</p>
    </footer>
  </div>`;
}

export function generateCoffeeHtml(data){
  const { supporterName, coffeeCount, message } = data;

  return `
  <div class='container' style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <h1 style="text-align: center; color: #333; font-size: 24px; margin-bottom: 10px;">Thank You!</h1>
    <h2 style="text-align: center; color: #555; font-size: 20px; margin-bottom: 20px;">Your Support Means the World</h2>

    <p style="font-size: 16px; color: #555; margin-bottom: 20px;">
      Dear <strong>${supporterName}</strong>,
    </p>
    <p style="font-size: 16px; color: #555; margin-bottom: 20px;">
      Thank you for buying Mehran <strong>${coffeeCount}</strong> ${coffeeCount === 1 ? 'coffee' : 'coffees'}! Your support helps Mehran continue creating and sharing his work with the world.
    </p>

    ${
      message
        ? `<p style="font-size: 16px; color: #555; margin-bottom: 20px;">
          <strong>Your Message:</strong> "${message}"
        </p>`
        : ""
    }

    <p style="font-size: 16px; color: #555; margin-bottom: 20px;">
      Mehran deeply appreciates your generosity and encouragement.
    </p>

    <footer style="margin-top: 30px; text-align: center; color: #999; font-size: 14px;">
      <p>&copy; ${new Date().getFullYear()} Mehran. All rights reserved.</p>
    </footer>
  </div>`;
}