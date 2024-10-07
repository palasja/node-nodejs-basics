const parseEnv = () => {
    const reg = /^RSS_/;
    let res = '';
    for(const key in process.env){
        if(reg.test(key)) res+=`${key}=${process.env[key]}; `;
    }
    console.log(res.slice(0, -2));
};

parseEnv();