const postTruck = async ({ placa, media }) => {
    const requestData = {
        placa,
        media,
    };

    console.log('Dados a serem enviados:', requestData);

    try {
        const response = await fetch('https://api-node.cyclic.app/truck', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });

        const jsonResponse = await response.json();
        console.log('Resposta da API:', jsonResponse);
    } catch (error) {
        console.error('Erro ao enviar requisição:', error);
    }
};

export default postTruck;
