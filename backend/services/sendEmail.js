// const nodemailer = require("nodemailer");

// const sendEmail = async (
//   to,
//   subject,
//   html
// ) => {

//   const transporter =
//     nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//   await transporter.sendMail({
//     from: process.env.EMAIL_USER,
//     to,
//     subject,
//     html,
//   });
// };

// module.exports = sendEmail;



const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service:"gmail",
  auth:{user:process.env.EMAIL_USER,pass:process.env.EMAIL_PASS}
});

const sendEmail = async (to,subject,html)=>{

try{
  await transporter.sendMail({
    from:process.env.EMAIL_USER,
    to,
    subject,
    html
});
return true;
}
catch(error){
  console.error("Mail error:", error.message);
  return false;
}
};


module.exports = sendEmail;