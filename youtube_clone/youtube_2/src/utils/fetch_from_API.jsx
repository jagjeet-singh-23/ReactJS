import axios from 'axios'
const Base_URL = 'https://youtube-v31.p.rapidapi.com'
const options = {
  params: { part: 'snippet', videoId: 'M7FIvfx5J10' },
  headers: {
    'X-RapidAPI-Key': '3e2d8f8508mshd51caaa05647043p177c87jsna86161c94153',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${Base_URL}/${url}`, options);
  return data;
}