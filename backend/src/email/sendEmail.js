import { transporter } from './email.config.js';

export const sendVerificationEmail = (email, verificationToken) => {
  const mailOptions = {
    from: 'anggriawan.net@gmail.com',
    to: email,
    subject: 'Verify your email',
    text: `This is your verification token: ${verificationToken}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

export const sendWelcomeEmail = (email, name) => {
  const mailOptions = {
    from: 'anggriawan.net@gmail.com',
    to: email,
    subject: 'Welcome',
    text: `Welcome to our website, ${name}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

export const sendPasswordResetEmail = (email, link) => {
  const mailOptions = {
    from: 'anggriawan.net@gmail.com',
    to: email,
    subject: 'Reset your password',
    text: `Click the link to reset your password: ${link}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

export const sendResetSuccessEmail = (email) => {
  const mailOptions = {
    from: 'anggriawan.net@gmail.com',
    to: email,
    subject: 'Password reset successful',
    text: 'Your password has been reset successfully',
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};
