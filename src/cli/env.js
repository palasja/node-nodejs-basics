const parseEnv = () => {
    const reg = /^RSS_/;
    for(const key in process.env){
        if(reg.test(key)) console.log(`${key}=${process.env[key]};`);
    }
};

parseEnv();