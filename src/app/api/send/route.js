// // import { EmailTemplate } from '../../../components/EmailTemplate';
// import { NextResponse } from 'next/server';
// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST() {
//   try {
//     const data = await resend.emails.send({
//       from: 'Yash <sunnyeng1981@gmail.com>',
//       to: ['yash.ecs@gmail.com'],
//       subject: 'Hello world',
//       react: <><p>Emailbdy</p></>
//     });

//     return NextResponse.json(data);
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }
