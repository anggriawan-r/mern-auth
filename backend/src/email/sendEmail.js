import { transporter } from './email.config.js';

export const sendVerificationEmail = async (email, verificationToken) => {
  const mailOptions = {
    from: 'anggriawan.net@gmail.com',
    to: email,
    subject: 'Verify your email',
    text: `This is your verification token: ${verificationToken}`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Email sent: ' + info.response);
        resolve(info);
      }
    });
  });
};

export const sendWelcomeEmail = async (email, name) => {
  const mailOptions = {
    from: 'anggriawan.net@gmail.com',
    to: email,
    subject: 'Welcome',
    text: `Welcome to our website, ${name}`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Email sent: ' + info.response);
        resolve(info);
      }
    });
  });
};

export const sendPasswordResetEmail = async (email, link) => {
  const mailOptions = {
    from: 'anggriawan.net@gmail.com',
    to: email,
    subject: 'Reset your password',
    text: `Click the link to reset your password: ${link}`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Email sent: ' + info.response);
        resolve(info);
      }
    });
  });
};

export const sendResetSuccessEmail = async (email) => {
  const mailOptions = {
    from: 'anggriawan.net@gmail.com',
    to: email,
    subject: 'Password reset successful',
    text: 'Your password has been reset successfully',
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log('Email sent: ' + info.response);
        resolve(info);
      }
    });
  });
};
