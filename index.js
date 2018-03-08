const googlehome = require('google-home-notifier');

googlehome.ip('192.168.43.237', 'cz');

exports.main = function () {
  googlehome.notify('Hello from Openwhisk', function (res) {
    console.log(res);
  });

  return {
    result: "Done"
  };
};
