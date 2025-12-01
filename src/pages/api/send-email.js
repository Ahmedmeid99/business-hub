// import { PUBLIC_KEY, SERVICE, TEMPLATE } from "../../lib/email-js";

// export async function post({ request }) {
//     const formData = await request.formData();

//     // Convert FormData into a regular object
//     const data = Object.fromEntries(formData);

//     try {
//         // Use EmailJS REST API
//         const response = await fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
//             method: "POST",
//             body: formData,
//             headers: {
//                 "Authorization": `Bearer ${PUBLIC_KEY}`,
//             }
//         });

//         if (!response.ok) {
//             return new Response(JSON.stringify({ success: false }), { status: 500 });
//         }

//         return new Response(JSON.stringify({ success: true }), { status: 200 });

//     } catch (err) {
//         console.error(err);
//         return new Response(JSON.stringify({ success: false }), { status: 500 });
//     }
// }
