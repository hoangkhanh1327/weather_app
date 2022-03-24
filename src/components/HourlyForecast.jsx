import moment from 'moment';
import { WiCloudy } from 'react-icons/wi';

const HourlyForecast = ({ hourlyForecastData }) => {
    return (
        <section className="rounded shadow-lg overflow-hidden mb-4">
            <header className="px-2.5 py-4 bg-white">
                <h3 className="text-2xl font-bold">{`Dự báo hằng giờ`}</h3>
            </header>
            <div className="grid grid-cols-2 md:grid-cols-7 mx-2">
                {hourlyForecastData?.slice(0, 7).map((item, index) => (
                    <div
                        key={index}
                        className="col-span-1 first-of-type:font-bold my-4 border-r last-of-type:border-none"
                    >
                        <div className="flex flex-col">
                            <h5 className="text-xl text-center">
                                {moment.unix(item.dt).format('HH:MM')}
                            </h5>
                            <span className="text-center text-4xl my-2">{`${Math.round(
                                item.temp
                            )}°`}</span>
                            <div className="">
                                <img
                                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                    alt="weather icon"
                                    className="mx-auto w-14 h-14"
                                />
                            </div>
                            <span className="text-center">
                                <WiCloudy className="inline-block w-4 mr-2" />
                                {`${item.clouds}%`}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HourlyForecast;
