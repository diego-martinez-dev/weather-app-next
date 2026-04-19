import axios from 'axios';
import { API_KEY } from '@/config';

// Obtener clima actual
export const getCurrentWeather = async (city: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
  );
  return response.data;
};

// Obtener calidad del aire
export const getAirQuality = async (lat: number, lon: number) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );
  return response.data;
};

// Obtener pronóstico
export const getForecast = async (city: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=es`
  );
  return response.data;
};

// Obtener coordenadas de la ciudad
export const getCoordinates = async (city: string) => {
  const response = await axios.get(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
  );
  return response.data[0];
};

// Obtener ciudad por coordenadas (reverse geocoding)
export const getCityByCoords = async (lat: number, lon: number) => {
  const response = await axios.get(
    `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`
  );
  return response.data[0];
};
