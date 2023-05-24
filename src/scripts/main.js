document.addEventListener('DOMContentLoaded', function(){
    AOS.init();

    const dataDoEvento = new Date("Oct 15, 2023 19:00:00");
    const timeStampDoEvento = dataDoEvento.getTime();

    const contaAsHoras = setInterval(function() {
        const hoje =  new Date();
        const timeStampAtual = hoje.getTime();

        const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

        const diaEmMs = 1000* 60 * 60 * 24;
        const horaEmMs = 1000 * 60 * 60;
        const minutoEmMs = 1000 * 60; 

        const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs); /*Transformando milissegundos em dias*/
        const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs); /*Transformando o resto(horas) da conta de cima em horas*/
        const minutosAteOEvento = Math.floor(distanciaAteOEvento % horaEmMs / minutoEmMs); /*Transformando o resto das horas em minutos*/
        const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

        document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`
    
        if (distanciaAteOEvento < 0) {
            clearInterval(contaAsHoras);
            document.getElementById('contador').innerHTML = 'Evento expirado'
        }
    }, 1000)
})