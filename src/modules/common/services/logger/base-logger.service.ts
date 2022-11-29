import { Logger } from '@nestjs/common';
import { DateUtils } from 'src/modules/core/utils/date.utils';
import { LogUtils } from './../../utils/log.utils';

export class CoreLoggerService extends Logger {
  private logToFile = false;
  private logToConsole = true;
  private formatLog = false;
  constructor(context?: string, logToFile = false, logToConsole = true) {
    super(context);
    this.logToFile = logToFile;
  }

  parseMessage(message: any, ...optionalParams) {
    message = this.parseMessageToText(message);
    optionalParams = this.logOptionalParams(...optionalParams);
    optionalParams.forEach((item) => {
      message += ' ' + item;
    });

    return {
      message,
      optionalParams: [],
    };
  }

  parseMessageToText(message: any): string {
    if (message instanceof Error) {
      return message.stack;
    }
    if (typeof message == 'object') {
      try {
        message = JSON.stringify(message, null, this.formatLog ? 2 : 0);
      } catch (err) {
        message = this.simpleStringify(message);
      }
    }

    return message;
  }
  simpleStringify(object): string {
    var simpleObject = {};
    for (var prop in object) {
      if (!object.hasOwnProperty(prop)) {
        continue;
      }
      if (typeof object[prop] == 'object') {
        continue;
      }
      if (typeof object[prop] == 'function') {
        continue;
      }
      simpleObject[prop] = object[prop];
    }

    return JSON.stringify(simpleObject, null, 2); // returns cleaned up JSON
  }

  logOptionalParams(...optionalParams): string[] {
    if (!optionalParams.length) return optionalParams;

    return optionalParams.map((item) => this.parseMessageToText(item));
  }
  log(message: any, ...optionalParams: any[]) {}

  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]) {
    const params = this.parseMessage(message, ...optionalParams);
    message = params.message;
    optionalParams = params.optionalParams;
    if (this.logToConsole) {
      super.error(message, ...optionalParams);
    }

    this.writeLog(message, 'error', optionalParams);
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]) {}

  /**
   * Write a 'debug' level log.
   */
  debug(message: any, ...optionalParams: any[]) {
    const params = this.parseMessage(message, ...optionalParams);
    message = params.message;
    optionalParams = params.optionalParams;
    if (this.logToConsole) {
      super.debug(message, ...optionalParams);
    }
    this.writeLog(message, 'debug', optionalParams);
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose(message: any, ...optionalParams: any[]) {}

  writeLog(text: string, message: string, optionalParams: string[]): void {
    if (this.logToFile) {
      const timestamp = DateUtils.getCurrentDate('YYYY-MM-DD HH:mm:ss');
      text = [text, ...optionalParams].join(' ');
      LogUtils[message](`${timestamp} - ${this.context}: ${text}`);
    }
  }

  color(message: any, color: string = 'red') {
    const config = {
        "red": "\x1b[31m",
        "cyan": "\x1b[36m%s\x1b[0m",
        "green": "\x1b[32m",
        "yellow": "\x1b[33m",
    }
    if (!(color in config)) color = "cyan";

    console.log("\x1b[33m", `${message}:`, config[color], message);
  }
}
