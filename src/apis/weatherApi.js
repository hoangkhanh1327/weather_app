import instance from './instance';
const apiKey = '9fab1e4a25d72ab7679121b0c2d066b7';

const getCoordinateByLocation = async (locationName) => {
    try {
        const { data } = await instance.get(
            `/geo/1.0/direct?q=${locationName}}&appid=${apiKey}&limit=1`
        );

        return data[0];
    } catch (error) {
        console.log(error);
        return error;
    }
};

const getCurrentWeatherData = async (lat, lon) => {
    try {
        const { data } = await instance.get(
            `data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}&lang=vi`
        );
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

const getForecastData = async (lat, lon) => {
    try {
        const { data } = await instance.get(
            `data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts&appid=${apiKey}&lang=vi`
        );

        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export { getCurrentWeatherData, getForecastData, getCoordinateByLocation };
