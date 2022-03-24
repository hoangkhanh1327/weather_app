import { FiSunrise, FiSunset } from 'react-icons/fi';
import QueryContext from '../contexts/QueryContext';
import { useContext } from 'react';
import Loading from './Loading';
import moment from 'moment';

const WeatherBox = ({ weatherData }) => {
    const { loading } = useContext(QueryContext);
    return (
        <section className="rounded shadow-lg overflow-hidden mb-4 bg-white">
            {!loading ? (
                <>
                    <header className="px-2.5 py-4 bg-gradient from-blue-100 to-blue-200">
                        <h3 className="text-2xl lg:text-3xl font-bold">{`Thời tiết hôm nay tại ${weatherData?.name}, ${weatherData?.sys.country}`}</h3>
                    </header>
                    <div className="flex justify-between items-center p-4">
                        <div className="flex items-center justify-between">
                            <div className="mx-6">
                                <h2
                                    className={`text-6xl font-black mb-2 ${
                                        weatherData?.main.feels_like >= 28
                                            ? 'text-red-500'
                                            : 'text-blue-500'
                                    }`}
                                >{`${Math.round(
                                    weatherData?.main.feels_like
                                )}°`}</h2>
                                <span className='font-black text-lg'>Feels like</span>
                            </div>
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
                            <div className="text-lg border-t border-gray-600 px-2.5 py-4 flex items-center justify-between">
                                <span className="text-xl font-bold">Cao / Thấp</span>
                                <span className="ml-auto">
                                    {`${Math.round(
                                        weatherData?.main.temp_min
                                    )}° / ${Math.round(
                                        weatherData?.main.temp_max
                                    )}°`}
                                </span>
                            </div>
                            <div className="text-lg border-t border-gray-600 px-2.5 py-4 flex items-center justify-between">
                                <span className="text-xl font-bold">Độ ẩm</span>
                                <span className="ml-auto">
                                    {`${weatherData?.main.humidity}%`}
                                </span>
                            </div>
                            <div className="text-lg border-t border-gray-600 px-2.5 py-4 flex items-center justify-between">
                                <span className="text-xl font-bold">Áp suất</span>
                                <span className="ml-auto">
                                    {`${weatherData?.main.pressure} mb`}
                                </span>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="text-lg border-t border-gray-600 px-2.5 py-4 flex items-center justify-between">
                                <span className="text-xl font-bold">Có mây</span>
                                <span className="ml-auto">
                                    {`${weatherData?.clouds.all} %`}
                                </span>
                            </div>
                            <div className="text-lg border-t border-gray-600 px-2.5 py-4 flex items-center justify-between">
                                <span className="text-xl font-bold">Gió</span>
                                <span className="ml-auto">
                                    {`${weatherData?.wind.speed} m/s`}
                                </span>
                            </div>
                            <div className="text-lg border-t border-gray-600 px-2.5 py-4 flex items-center justify-between">
                                <span className="text-xl font-bold">Tầm nhìn</span>
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
