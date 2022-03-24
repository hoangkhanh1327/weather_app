import { FiSunrise, FiSunset } from 'react-icons/fi';
import QueryContext from '../contexts/QueryContext';
import { useContext } from 'react';
import Loading from './Loading';
import moment from 'moment';

const WeatherBox = ({ weatherData }) => {
    const { loading } = useContext(QueryContext);
    return (
        <section className="rounded shadow-lg overflow-hidden mb-4">
            {!loading ? (
                <>
                    <header className="px-2.5 py-4 bg-white">
                        <h3 className="text-2xl font-bold">{`Thời tiết hôm nay tại ${weatherData?.name}, ${weatherData?.sys.country}`}</h3>
                    </header>
                    <div className="flex justify-between items-center p-4">
                        <div className="flex items-center justify-between">
                            <div className="mx-6">
                                <h2 className="text-6xl font-black mb-2">{`${Math.round(
                                    weatherData?.main.feels_like
                                )}°`}</h2>
                                <span>Feels like</span>
                            </div>
                            <div className="mx-6"></div>
                        </div>
                        <div className="mx-6">
                            <div className="flex items-center">
                                <span className="mr-2">
                                    <FiSunrise className="inline-block w-6 h-6 mr-1" />
                                    {moment
                                        .unix(weatherData?.sys.sunrise)
                                        .format('hh:mm')}
                                </span>
                                <span className="ml-2">
                                    <FiSunset className="inline-block w-6 h-6 mr-1" />
                                    {moment
                                        .unix(weatherData?.sys.sunset)
                                        .format('hh:mm')}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 px-3">
                        <div className="col-span-1">
                            <div className="border-t border-gray-600 px-2.5 py-4 flex items-center justify-between">
                                <span>Cao / Thấp</span>
                                <span className="ml-auto">
                                    {`${Math.round(
                                        weatherData?.main.temp_min
                                    )}° / ${Math.round(
                                        weatherData?.main.temp_max
                                    )}°`}
                                </span>
                            </div>
                            <div className="border-t border-gray-600 px-2.5 py-4 flex items-center justify-between">
                                <span>Độ ẩm</span>
                                <span className="ml-auto">
                                    {`${weatherData?.main.humidity}%`}
                                </span>
                            </div>
                            <div className="border-t border-gray-600 px-2.5 py-4 flex items-center justify-between">
                                <span>Áp suất</span>
                                <span className="ml-auto">
                                    {`${weatherData?.main.pressure} mb`}
                                </span>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="border-t border-gray-600 px-2.5 py-4 flex items-center justify-between">
                                <span>Có mây</span>
                                <span className="ml-auto">
                                    {`${weatherData?.clouds.all} %`}
                                </span>
                            </div>
                            <div className="border-t border-gray-600 px-2.5 py-4 flex items-center justify-between">
                                <span>Gió</span>
                                <span className="ml-auto">
                                    {`${weatherData?.wind.speed} m/s`}
                                </span>
                            </div>
                            <div className="border-t border-gray-600 px-2.5 py-4 flex items-center justify-between">
                                <span>Tầm nhìn</span>
                                <span className="ml-auto">
                                    {`${weatherData?.visibility / 1000} km`}
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <Loading />
            )}
        </section>
    );
};

export default WeatherBox;
