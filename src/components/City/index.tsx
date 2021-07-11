import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { StyledCity } from './styles';

const City = () => {
	const { city, loading } = useSelector((state: RootState) => state);

	return (
		<StyledCity className={city.name && !loading ? 'fadein' : ''}>
			<header className='card__header'>
				<h2 className='city'>{city.name}</h2>
				<p className='country'>
					{city.country} {city.flag}
				</p>
			</header>

			<div className='card__weather-info'>
				<div className='inner-container'>
					<p>
						<span>Temp. mínima</span> {city.min} °C
					</p>
				</div>

				<div className='inner-container'>
					<p>
						<span>Temp. máxima</span> {city.max} °C
					</p>
				</div>

				<div className='inner-container'>
					<p>
						<span>Clima</span> {city.weather}
					</p>
				</div>
			</div>
		</StyledCity>
	);
};

export default City;
