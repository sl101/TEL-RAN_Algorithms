// Алгоритм решения:

// 1. Сортируем массив заявок по возрастанию времени начала
// 2. Создаем переменные для хранения стартового времени и выгоды
// 3. Итерируемся по массиву заявок
// 4. Если заявка начинается позже или во время стартового времени, то добавляем размер выгоды в переменную выгоды
// 5. Если заявка начинается позже времени окончания предыдущей заявки, то мы добавляем выгоду предыдущей заявки и устанавливаем новое время начала.
// 6. Если заявка начинается раньше, то она игнорируется.
// 7. Сравниваем текущую выгоду с максимальной выгодой и обновляем максимальную выгоду, если текущая выгода больше.

function calculateProfit(bookings) {
	// сортируем массив заявок по возрастанию времени начала
	bookings.sort((a, b) => (a.start > b.start ? 1 : -1));

	// первоначальное значение выгоды равно 0
	let bookingProfit = 0;

	// проитерируемся циклом по всем заявкам с первой до предпоследней - сравниваемая заявка
	for (let i = 0; i < bookings.length - 1; i++) {
		// выведем в переменные начало и конец сравниваемой заявки
		const { start: start_i, end: end_i } = bookings[i];
		// возмем в дополнительную переменную конец сравниваемой заявки
		let bookingEnd = end_i;

		// вычисляем выгоду текущенй заявки
		let currentProfit = calculateIntervalProfit(start_i, end_i);

		// для того чтоб определить можем ли мы взять еще заявки до конца рабочего дня,
		// сравниваем время окончания текущей заявки со следующими в списке начиная со следующей
		for (let j = i + 1; j < bookings.length; j++) {
			// выведем в переменные начало и конец следующей заявки
			const { start: start_j, end: end_j } = bookings[j];
			// если время начала следующей заявки больше или равно сравниваемой заявки,
			// то она тоже попадает в список и соответсвенно расчитываем размер выгоды и добавляем к текущей
			if (start_j >= bookingEnd) {
				currentProfit += calculateIntervalProfit(start_j, end_j);
				// теперь временем окончания сессии заявок становится время окончания добавленной завки
				bookingEnd = end_j;
			}
		}
		// по завершении внутреннего цикла, сравниваем текущий размер выгоды с предыдущей
		if (bookingProfit < currentProfit) {
			// перезаписываем если текущая больше
			bookingProfit = currentProfit;
		}
		// цикл продолжается для сравнения всех возможных вариантов списков заявок
	}
	// функция возвращает сумму наибольшей выгоды которую дают возможный список завок
	return bookingProfit;
}

function calculateIntervalProfit(start, end) {
	if (end <= '13:00') {
		return 1;
	} else if (start >= '13:00') {
		return 2;
	} else if (start < '13:00' && end > '13:00') {
		if (13 - Number.parseInt(start, 10) > Number.parseInt(end, 10) - 13) {
			return 1;
		} else if (
			13 - Number.parseInt(start, 10) <=
			Number.parseInt(end, 10) - 13
		) {
			return 2;
		}
	}
}

const bookings = [
	{ start: '09:00', end: '10:30' }, // 1
	{ start: '12:00', end: '13:00' }, // 1
	{ start: '16:00', end: '17:00' }, // 2
	{ start: '12:00', end: '16:00' }, // 2
	{ start: '09:00', end: '14:00' }, // 1
	{ start: '12:00', end: '17:00' }, // 2
	{ start: '10:30', end: '14:00' }, // 1
];

console.log(calculateProfit(bookings)); // 4
