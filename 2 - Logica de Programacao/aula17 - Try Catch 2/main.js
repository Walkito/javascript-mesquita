function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date');
    }

    if(!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {

    });
}


try{
    const data = new Date('01-01-1970 12:52:12');
    const hora = retornaHora(data);
    console.log(hora);
} catch(e){

} finally {
    console.log('Tenha um bom dia.');
}
