// Централізований набір фото для постів новин — ключ у фронтматтері посту
// (`image: 'hero-exterior'`) посилається сюди, самі фото не дублюються.
import heroExterior from '../assets/property/hero-exterior.jpg';
import lounge from '../assets/property/lounge.jpg';
import roomDouble from '../assets/property/room-double.jpg';
import buffetTray from '../assets/property/buffet-tray.jpg';

export const newsImages: Record<string, ImageMetadata> = {
	'hero-exterior': heroExterior,
	lounge: lounge,
	'room-double': roomDouble,
	'buffet-tray': buffetTray,
};
