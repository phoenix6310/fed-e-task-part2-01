var spawnSync = require('child_process').spawnSync;

var result = spawnSync('powershell',
    ['(Get-CimInstance -ClassName Win32_OperatingSystem).caption'],
    { input: 'write this to stdin' });

console.log(result)