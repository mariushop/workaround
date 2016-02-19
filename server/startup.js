Meteor.startup(function(){
   // 1. Set up stmp
  //   your_server would be something like 'smtp.gmail.com'
  //   and your_port would be a number like 25

  smtp = {
    username: 'workaroundapp@gmail.com',  
    password: 'HxoFSb3eoSNCOx8ScVlnpdNIcYDewgbyrJropkCSlFusPajmQH',   
    server:   'smtp.gmail.com',  
    port: 587
  }
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

    //send verification email
  Accounts.config({
    sendVerificationEmail: true
  });
});