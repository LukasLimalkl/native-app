


export function processSelectedYear(selectedYear) {
   return selectedYear; 
}

export function processSelectedMarc(selectedMarca) {
    return selectedMarca;
  }

export function processSelectedModel(selectedModel) {
    return selectedModel;
  }

export function processSelectedMedia(selectedMedia) {
    return selectedMedia;
  }


const postTruck = async (truck, model, ano, media) => {
    const requestData = {
        truck,
        model,
        ano,
        media
    };

    console.log('Dados a serem enviados:', requestData);

    try {
        const response = await fetch('https://api-node.cyclic.app/media', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
        });

        const jsonResponse = await response.json();
        console.log('Resposta da API:', jsonResponse);
    } catch (error) {
        console.error('Erro ao enviar requisição:', error);
    }
};


export default postTruck;