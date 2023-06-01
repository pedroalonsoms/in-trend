import type { APIRoute } from "astro";

export const post: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();

  let emailContent = "";
  emailContent += `<p><b>Name:</b> ${formData.get("name")}</p>`;
  emailContent += `<p><b>Company:</b> ${formData.get("company")}</p>`;
  emailContent += `<p><b>Phone Number:</b> ${formData.get("phone_number")}</p>`;
  emailContent += `<p><b>Email:</b> ${formData.get("email")}</p>`;
  emailContent += `<p><b>Message:</b> ${formData.get("message")}</p>`;

  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    headers: {
      Authorization: `Bearer ${import.meta.env.SEND_GRID_KEY}`,
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      from: { email: "pedro123ben10@gmail.com" },
      subject: "Contact Form - In-Trend's main webpage",
      content: [
        {
          type: "text/html",
          value: emailContent,
        },
      ],
    }),
  });

  if (!res.ok) {
    console.error(res);
    return new Response(null, {
      status: 500,
      statusText: "Email could not be delivered",
    });
  }

  return redirect("/", 307);
};
