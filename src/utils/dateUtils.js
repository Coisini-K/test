// 计算日期的工具函数
/*
import { getDates, getAdjacentDates } from './dateUtils';

// 获取当前日期的过去一周
const dates = getDates();
console.log(dates);

// 获取当前日期的过去一周，并指定格式
const dates = getDates(null, "MM-DD");
console.log(dates);

// 获取指定日期（只有月日）的过去一周
const specifiedDate = '03-02'; // 或者 '3月2日'
const datesSpecified = getDates(specifiedDate, 'MM-DD'); // 或者 'MM月DD日'
console.log(datesSpecified);

// 获取指定日期（只有月日）的前一天和后一天
const adjacentDates = getAdjacentDates('03-02'); // 或者 '3月2日'
console.log(adjacentDates);

当请求计算，且未指定年份时，会默认使用当前年份。
*/

function formatDate(date, format = 'YYYY-MM-DD') {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  // console.log(date, format);
  // console.log(year, month, day);
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

function getDates(dateStr = null, format = 'YYYY-MM-DD') {
  try {
    let date;
    let parsedFormat = format;

    // console.log(dateStr, parsedFormat);
    if (dateStr) {
      const { date: parsedDate, format: parsedFormatFromStr } =
        parseDate(dateStr);
      date = parsedDate;
      parsedFormat = parsedFormatFromStr;
    } else {
      date = new Date();
    }
    // console.log(dateStr, parsedFormat, date);
    const oneDay = 24 * 60 * 60 * 1000; // 毫秒数

    // 当前日期
    const currentDate = formatDate(date, parsedFormat);

    // 前一天的日期
    const previousDay = new Date(date.getTime() - oneDay);
    const previousDate = formatDate(previousDay, parsedFormat);
    // console.log(currentDate, previousDate);

    // 过去一周的日期
    const datesOfWeek = [];
    for (let i = 7; i > 0; i--) {
      const dates = new Date(date.getTime() - i * oneDay);
      datesOfWeek.push(formatDate(dates, parsedFormat));
    }
    // console.log(datesOfWeek);

    return {
      year: date.getFullYear(),
      currentDate,
      previousDate,
      datesOfWeek,
    };
  } catch (error) {
    console.error('Error parsing date:', error);
    return {
      year: null,
      currentDate: 'Invalid date',
      previousDate: 'Invalid date',
      datesOfWeek: [
        'Invalid date',
        'Invalid date',
        'Invalid date',
        'Invalid date',
        'Invalid date',
        'Invalid date',
        'Invalid date',
      ],
    };
  }
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
