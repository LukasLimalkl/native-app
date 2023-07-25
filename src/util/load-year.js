const loadTruckYear = async () => {
    const url = 'https://api-node-hxq1.vercel.app/data/ano';
  
      try {
        const response = await fetch(url);
        const data =  await response.json();
        return data;
      } catch (error) {
        console.log(error);
        throw error;
      }
      
   
  };
  
  export default loadTruckYear;