
export function processSelectedYear(selectedYear) {
    console.log(selectedYear);
    return selectedYear;
}

export function processSelectedMarc(selectedMarca) {
    console.log(selectedMarca);
    return selectedMarca;
  }

export function processSelectedModel(selectedModel) {
    console.log(selectedModel);
    return selectedModel;
  }

export function processSelectedMedia(selectedMedia) {
    console.log(selectedMedia);
    return selectedMedia;
  }


const postTruck = async(truck,model,ano,media) => {
    fetch('https://api-node.cyclic.app/media', {
        method: 'POST',
        body: JSON.stringify({
            truck,
            model,
            ano,
            media
        })
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
};

export default postTruck;