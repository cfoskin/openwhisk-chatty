const googlehome = require('google-home-notifier');

googlehome.ip('192.168.43.237', 'cz');

exports.main = function (args) {
  var article = args.article || "Red Fedora";
  googlehome.notify('Wow what a nice ' + article, function (res) {
    console.log(res);
  });

  return {
    result: "Done"
  };
};
