
const loadTruckModel = async () => {
  const url = 'https://api-node-hxq1.vercel.app/data';

    try {
      const response = await fetch(url);
      const data =  await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
    
 
};

export default loadTruckModel;