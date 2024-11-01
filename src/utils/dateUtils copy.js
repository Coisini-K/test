// dateUtils.js

function formatDate(date, format = 'YYYY-MM-DD') {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  if (format === 'YYYY-MM-DD') {
    return `${year}-${month}-${day}`;
  } else if (format === 'YYYY年MM月DD日') {
    return `${year}年${month}月${day}日`;
  } else if (format === 'MM-DD') {
    return `${month}-${day}`;
  } else if (format === 'MM月DD日') {
    return `${month}月${day}日`;
  } else {
    throw new Error('Unsupported format');
  }
}

function parseDate(dateStr) {
  const formats = [
    { regex: /^(\d{4})-(\d{2})-(\d{2})$/, format: 'YYYY-MM-DD' },
    { regex: /^(\d{4})年(\d{2})月(\d{2})日$/, format: 'YYYY年MM月DD日' },
    { regex: /^(\d{2})-(\d{2})$/, format: 'MM-DD' },
    { regex: /^(\d{2})月(\d{2})日$/, format: 'MM月DD日' },
  ];

  for (const { regex, format } of formats) {
    const match = dateStr.match(regex);
    if (match) {
      let year, month, day;

      if (format === 'YYYY-MM-DD') {
        year = parseInt(match[1], 10);
        month = parseInt(match[2], 10) - 1;
        day = parseInt(match[3], 10);
      } else if (format === 'YYYY年MM月DD日') {
        year = parseInt(match[1], 10);
        month = parseInt(match[2], 10) - 1;
        day = parseInt(match[3], 10);
      } else if (format === 'MM-DD') {
        year = new Date().getFullYear();
        month = parseInt(match[1], 10) - 1;
        day = parseInt(match[2], 10);
      } else if (format === 'MM月DD日') {
        year = new Date().getFullYear();
        month = parseInt(match[1], 10) - 1;
        day = parseInt(match[2], 10);
      }

      return { date: new Date(year, month, day), format };
    }
  }

  throw new Error('Invalid date format');
}

function getDates(format = 'YYYY-MM-DD') {
  const today = new Date();
  const oneDay = 24 * 60 * 60 * 1000; // 毫秒数

  // 当前日期
  const currentDate = formatDate(today, format);

  // 前一天的日期
  const previousDay = new Date(today.getTime() - oneDay);
  const previousDate = formatDate(previousDay, format);

  // 过去一周的日期
  const datesOfWeek = [];
  for (let i = 7; i > 0; i--) {
    const date = new Date(today.getTime() - i * oneDay);
    datesOfWeek.push(formatDate(date, format));
  }

  return {
    year: today.getFullYear(),
    currentDate,
    previousDate,
    datesOfWeek,
  };
}

function getAdjacentDates(dateStr) {
  try {
    const { date, format } = parseDate(dateStr);
    const oneDay = 24 * 60 * 60 * 1000; // 毫秒数

    // 前一天的日期
    const previousDay = new Date(date.getTime() - oneDay);
    const previousDate = formatDate(previousDay, format);

    // 后一天的日期
    const nextDay = new Date(date.getTime() + oneDay);
    const nextDate = formatDate(nextDay, format);

    return {
      previousDate,
      nextDate,
    };
  } catch (error) {
    console.error('Error parsing date:', error);
    return {
      previousDate: 'Invalid date',
      nextDate: 'Invalid date',
    };
  }
}

export { getDates, getAdjacentDates };
