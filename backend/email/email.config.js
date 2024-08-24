import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'anggriawan.net@gmail.com',
    pass: 'recy ashn uqfn lsmc',
  },
});
