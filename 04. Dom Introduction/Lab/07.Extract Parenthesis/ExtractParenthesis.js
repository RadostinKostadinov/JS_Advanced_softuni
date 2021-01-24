function extract(id) {
    const text = document.getElementById(id).textContent;
    const regex = /\((.+?)\)/gm;
    const result = [];

    let tokens = regex.exec(text);
    while(tokens != null) {
        result.push(tokens[1]);
        tokens = regex.exec(text);
    }

    return result.join('; ');
}