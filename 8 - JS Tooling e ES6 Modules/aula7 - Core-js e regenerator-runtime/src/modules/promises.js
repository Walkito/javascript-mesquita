function promessa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hey eu sou a promessa');
            resolve();
        }, 2000);
    });
}

export default async function(){
    await promessa();
    console.log('Terminou');
}