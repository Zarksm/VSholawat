import axios from 'axios'

export const getQuran = async () => {
   try{
      const response = await axios.get('https://equran.id/api/v2/surat');
      return response.data.data;
   } catch (error) {
      console.error('Error fetching Quran data:', error);   
   }
}

export const getAyat = async (surahNumber) => {
   try {
      const response = await axios.get(`https://equran.id/api/v2/surat/${surahNumber}`);
      return response.data.data;
   } catch (error) {
      console.error('Error fetching Ayat data:', error);   
   }
}