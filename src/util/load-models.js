
const loadModels = async () => {
  const url = 'http://192.168.1.123:3333/data';

    try {
      const response = await fetch(url);
      const data =  await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
    
 
};

export default loadModels;