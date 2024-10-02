const parseArgs = () => {
//process.argv[0] is process.execPath
//process.argv[1] is the path to the JavaScript file
//start from 3 element with step=2 because key-valuse pair
const _STEP = 2;
const _PREFIX = '--';
for(let i=2; i < process.argv.length; i+=_STEP){
    console.log(`${process.argv[i].slice(_PREFIX.length)} is ${process.argv[i+1]}`);
}
    
};

parseArgs();