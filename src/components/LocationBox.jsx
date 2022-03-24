import { useContext } from 'react';
import QueryContext from '../contexts/QueryContext';
import Loading from './Loading';

const LocationBox = ({ weatherData, localName }) => {
    const { loading } = useContext(QueryContext);
    const dayConverter = (d) => {
        let months = [
            'Tháng Giêng',
            'Tháng Hai',
            'Tháng Ba',
            'Tháng Tư',
            'Tháng Năm',
            'Tháng Sáu',
            'Tháng Bảy',
            'Tháng Tám',
            'Tháng Chín',
            'Tháng Mười',
            'Tháng Mười Một',
            'Tháng Mời Hai',
        ];

        let days = [
            'Chủ Nhật',
            'Thứ Hai',
            'Thứ Ba',
            'Thứ Tư',
            'Thứ Năm',
            'Thứ Sáu',
            'Thứ Bảy',
        ];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    };

    return (
        <section className="rounded shadow-lg overflow-hidden mb-4">
            {!loading ? (
                <>
                    <header className="px-2.5 py-4 bg-gradient-to-r from-slate-300 to-slate-400 flex items-center justify-between">
                        <h3 className="text-2xl font-bold">{`${localName}, ${weatherData?.sys.country}`}</h3>
                        <p className="text-2xl">{dayConverter(new Date())}</p>
                    </header>
                    <div
                        className={`flex justify-between items-center p-4 bg-cover bg-center ${
                            weatherData?.main.temp <= 28 ? 'bg-warm' : 'bg-cold'
                        }`}
                    >
                        <div className="mx-6">
                            <h2 className="text-6xl lg:text-8xl font-black">
                                {`${Math.round(weatherData?.main.temp)}°`}
                            </h2>
                            <p className="text-xl lg:text-2xl font-bold capitalize">
                                {weatherData?.weather[0].description}
                            </p>
                        </div>
                        <div className="mx-6">
                            <img
                                src={`http://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
                                alt="weather icon"
                            />
                        </div>
                    </div>
                </>
            ) : (
                <Loading />
            )}
        </section>
    );
};
export default LocationBox;
