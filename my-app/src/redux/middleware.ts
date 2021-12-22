import { ReduxTypes } from '../@types/types';

export const fetchData =
  (store: ReduxTypes.State) =>
  (next: any) =>
  async (action: ReduxTypes.Action) => {
    try {
      const CityValue = action.payload.name;
      const WAPIKey = 'f086f29091b9a2f3e24577457bf75d29';
      const weatherRequest = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CityValue}&appid=${WAPIKey}&units=metric`
      );
      if (!weatherRequest.ok) throw 'Bad Request';
      const weatherData = await weatherRequest.json();
      next({ ...action, payload: weatherData });
    } catch (error) {
      console.log(error);
    }
  };
