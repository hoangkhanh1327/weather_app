import { useEffect, useState } from 'react';

import LocationBox from './components/LocationBox';
import WeatherBox from './components/WeatherBox';
import Forecast from './components/DailyForecast';
import SearchBox from './components/SearchBox';
import HourlyForecast from './components/HourlyForecast';
import { weatherAPI } from './apis';

import QueryContext from './contexts/QueryContext';

const App = () => {
    const [query, setQuery] = useState('Bien Hoa');
    const [weatherData, setWeatherData] = useState();
    const [hourlyForecastData, setHourlyForecastData] = useState();
    const [dailyForecastData, setDailyForecastData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = async () => {
        setLoading(true);
        try {
            const { lat, lon } = await weatherAPI.getCoordinateByLocation(
                query
            );
            const forecastData = await weatherAPI.getForecastData(lat, lon);
            const currentWeatherData = await weatherAPI.getCurrentWeatherData(
                lat,
                lon
            );
            setWeatherData(currentWeatherData);
            setHourlyForecastData(forecastData.hourly);
            setDailyForecastData(forecastData.daily);
            setError('');
        } catch (error) {
            setError('Không tìm thấy dữ liệu tỉnh / thành phố này.');
        }
        setQuery('');
        setLoading(false);
    };

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            fetchData(query);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="bg-gradient-to-b from-blue-200 to-blue-300">
            <QueryContext.Provider
                value={{ query, setQuery, handleSearch, loading }}
            >
                <header className="py-6 bg-gradient-to-b from-blue-500 to-blue-600">
                    <div className="container mx-auto max-w-6xl">
                        <div className="flex items-center justify-between">
                            <div></div>
                            <SearchBox />
                            <div></div>
                        </div>
                    </div>
                </header>
                <main className="relative p-6">
                    <div className="container mx-auto max-w-6xl">
                        {error === '' ? (
                            <>
                                <LocationBox weatherData={weatherData} />
                                <WeatherBox weatherData={weatherData} />
                                <HourlyForecast
                                    hourlyForecastData={hourlyForecastData}
                                />
                                <Forecast
                                    dailyForecastData={dailyForecastData}
                                />
                            </>
                        ) : (
                            <div>
                                <p className="text-4xl text-center text-white">
                                    {error}
                                </p>
                            </div>
                        )}
                    </div>
                </main>
            </QueryContext.Provider>
        </div>
    );
};

export default App;
