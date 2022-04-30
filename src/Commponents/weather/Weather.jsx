import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import _debounce from "lodash/debounce";
import { WeatherSelectors, WeatherAC } from "../../store";
import "./weather.modules.css";
import { Spinner } from "./spinner/spinner.jsx";

export const Weather = () => {
  const dispatch = useDispatch();

  const data = useSelector(WeatherSelectors.getWeather);
  const isLoading = useSelector(WeatherSelectors.isLoading);
  const isLoaded = useSelector(WeatherSelectors.isLoaded);
  const isError = useSelector(WeatherSelectors.isError);

  const getWeather = (city) => dispatch(WeatherAC.fetchWeather(city));

  const [city, setCity] = useState("Minsk");

  const onChangeCity = ({ target }) => {
    setCity(`${target.value}`);
  };

  const fetchWeatherDebounced = useCallback(
    _debounce((city) => getWeather(city), 1000),
    []
  );

  useEffect(() => {
    fetchWeatherDebounced(city);
  }, [city, fetchWeatherDebounced]);

  return (
    <div className="weather">
      <input
        type=""
        value={city}
        placeholder="Введите город"
        onChange={onChangeCity}
      />
      {isError && <p>Не удалось получить данные, попробуйте изменить запрос</p>}
      {isLoading && <Spinner />}
      {isLoaded && (
        <table className="newstyle">
          <tbody>
            <tr>
              <th>Город</th>
              <th>{data.name}</th>
            </tr>
            <tr>
              <td>Температура</td>
              <td>{data.main.temp}</td>
            </tr>
            <tr>
              <td>Ощущаеться</td>
              <td>{data.main.feels_like}</td>
            </tr>
            <tr>
              <td>Давление</td>
              <td>{data.main.pressure}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
