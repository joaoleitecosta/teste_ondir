function capitalizeFirstLetter(value: string): string {
	if (!value) {
		return '';
	}
	return value
	  .trim()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(' ');
}

function getFirstName(value: string): string {
	if (value) {
		return capitalizeFirstLetter(value.split(' ').slice(0, 1).join(''));
	}
	return value;
}


export const stringUtils = { capitalizeFirstLetter, getFirstName };
