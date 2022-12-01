import * as dayjs from 'dayjs';
import * as customParseFormat from 'dayjs/plugin/customParseFormat';
import * as isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import * as weekday from 'dayjs/plugin/weekday';
import * as isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isSameOrAfter);
dayjs.extend(customParseFormat);
dayjs.extend(weekday);
dayjs.extend(isoWeek);

export class DateUtils {
  static getCurrentDate(format = 'YYYY-MM-DD'): string {
    return this.formatDate(new Date().toISOString(), format);
  }

  static formatDate(date: any, format = 'YYYY-MM-DD'): string {
    if (!date) return null;

    return dayjs(date).format(format);
  }

  static parseFormatDate(
    date: any,
    parse = 'DD/MM/YYYY',
    format = 'YYYY-MM-DD',
  ): string {
    if (!date) return null;

    return dayjs(date, parse).format(format);
  }
  // so sánh 2 khoảng thời gian
  static diffTimeBetweenDate(
    startDate: string | Date,
    endDate: string | Date,
    type: dayjs.ManipulateType,
  ): number | null {
    if (!startDate || !endDate) return null;

    const start = dayjs(startDate);
    const end = dayjs(endDate);

    return start.diff(end, type);
  }

  // lấy giờ
  static getTime(date: Date): string {
    if (!date) return null;

    return dayjs(date).format('HH:mm');
  }

  // lấy ngày
  static getDay(date: Date): number {
    if (!date) return null;

    return dayjs(date).day();
  }

  // Lấy ra tất cả các ngày nằm giữa 2 ngày
  static getDatesBetweenTwoDay(fromDate: string, endDate: string): string[] {
    const dates = [];
    let currentDate = dayjs(fromDate);
    const nextDate = dayjs(endDate);
    while (currentDate <= nextDate) {
      dates.push(dayjs(currentDate).format('YYYY-MM-DD'));
      currentDate = dayjs(currentDate).add(1, 'days');
    }
    return dates;
  }
}
