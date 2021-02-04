function requestValidator(object) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (object.method == undefined || !validMethods.includes(object.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (object.uri == undefined || !object.uri != '' || !/\*|^[A-Za-z.0-9]+$/gm.test(object.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (object.version == undefined || !validVersions.includes(object.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (object.message == undefined || /[<>\\&'"]/gm.test(object.message)) {
        throw new Error('Invalid request header: Invalid Message');

    }

    return object;
}

console.log(requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
}
));
// console.log(requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
//   }  
// ));
// console.log(requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
//   }   
// ));
console.log(requestValidator( {
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
} 
));