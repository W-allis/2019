export function chunks(file, size = 2048) {
	if (typeof size !== 'number') new Error('size must be number')
	
	if (size <= 0 || size > 2048 * 1000) new Error('size is out of range')
	
	const chunks_number = Math.ceil(file.size / size)
	
	return [...Array(chunks_number).keys()].map(number => file.slice(number * size, number * size + size))
}
