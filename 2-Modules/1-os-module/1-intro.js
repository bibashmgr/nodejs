// os-module:

// The os module provides operating system-related utility methods and properties.
// It can be accessed using:
// const os = require('os');

const os = require('os');

// os.hostname()
// returns the host name of the operating system.
console.log(os.hostname());

// os.platform()
// returns operating system platform.
console.log(os.platform());

// os.release()
// returns the operating system's release date.
console.log(os.release());

// os.type()
// returns the operating system name.
console.log(os.type());

// os.uptime()
// returns the system uptime in number of seconds.
console.log(os.uptime());

// os.userInfo([options])
// returns information about the current user.
console.log(os.userInfo());

// os.version()
// returns kernel version.
console.log(os.version());
