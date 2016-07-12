/**
 * Created by nikolai on 12.7.16.
 */
var serviceDiscover = require('serviceDiscovery');

serviceDiscover.watch(process.env.FILE_TO_WATCH, (err, data)=>{
    if (err){
    console.log('failed')
    return;
}
console.log('service discovery file detected!');
console.log('model is : ' + JSON.stringify(serviceDiscover.model()));
require('./bin/www');
//serviceDiscover.unwatch();

});