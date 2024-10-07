const parseArgs = () => {
    //process.argv[0] is process.execPath
    //process.argv[1] is the path to the JavaScript file
    //start from 3 element with step=2 because key-valuse pair
    const STEP = 2;
    const PREFIX = '--';
    let res = '';
    for(let i=2; i < process.argv.length; i+=STEP){
        res+=`${process.argv[i].slice(PREFIX.length)} is ${process.argv[i+1]}${i != process.argv.length - 2 ? ', ' : ''}`;
    }
    console.log(res);
};

parseArgs();