import moment from 'moment';
import { WiCloudy } from 'react-icons/wi';
import { useContext } from 'react';
import QueryContext from '../contexts/QueryContext';
import Loading from './Loading';

const DailyForecast = ({ dailyForecastData }) => {
    const { loading } = useContext(QueryContext);
    const isToday = (t) => {
        let today = moment().format('YYYY-MM-DD');
        let time = moment.unix(t).format('YYYY-MM-DD');
        return moment(today).isSame(time) ? 'Hôm nay' : time;
    };
    return (
        <section className="rounded shadow-lg overflow-hidden mb-4 bg-rgba-0.2">
            <header className="px-2.5 py-4 bg-white">
                <h3 className="text-2xl lg:text-3xl font-bold">{`Dự báo hằng ngày`}</h3>
            </header>
            {!loading ? (
                <div className="grid grid-cols-2 md:grid-cols-7 mx-2">
                    {dailyForecastData?.slice(0, 7).map((item, index) => (
                        <div
                            key={index}
                            className="col-span-1 first-of-type:font-bold my-4 border-r last-of-type:border-none"
                        >
                            <div className="flex flex-col">
                                <h5 className="text-xl text-center">
                                    {isToday(item.dt)}
                                </h5>
                                <span className="text-center text-4xl my-2">{`${Math.round(
                                    item.temp.max
                                )}°`}</span>
                                <span className="text-center text-lg">{`${Math.round(
                                    item.temp.min
                                )}°`}</span>
                                <div className="">
                                    <img
                                        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
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
            ) : (
                <Loading />
            )}
        </section>
    );
};

export default DailyForecast;
