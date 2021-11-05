const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const body = JSON.parse(req.body);

 console.log(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  await mail.send({
    to: 'to.name@email.com',
    from: 'from.name@email.com',
    subject: 'Message from a User!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  });

  res.status(200).json({ status: 'Message Sent Successfully!' });
}