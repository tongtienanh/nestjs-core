import 'dotenv/config';
import { appendFile, existsSync, mkdirSync, writeFileSync } from 'fs';
import { EOL } from 'os';
import { DateUtils } from 'src/modules/core/utils/date.utils';
export class LogUtils {

    static debug(text: string): void {
        this.writeLog(text, "debug");
    }

    static error(text: string): void {
        this.writeLog(text, "error")
    }

    static log(text: string): void {
        this.writeLog(text, "log");
    }

    static warn(text: string): void {
        this.writeLog(text, "warn");
    }

    static verbose(text: string): void {
        this.writeLog(text, "verbose");
    }

    static writeLog(text: string, message: string): void {
        try {
            const fileName = `${DateUtils.getCurrentDate()}_${message}.log`;
            const logPath = process.env.LOG_FOLDER + fileName;
            if (!existsSync(process.env.LOG_FOLDER)) {
                mkdirSync(process.env.LOG_FOLDER);
            }

            text = text + "\r\n";
            appendFile(logPath, text, err => {
                if (err) throw err;
            });
        } catch (err) {
            throw err;
        }
    }
}