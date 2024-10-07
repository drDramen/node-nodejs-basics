const ERROR_MSG = 'FS operation failed'

export class FsException extends Error {
  constructor(message = ERROR_MSG) {
    super(message);
    this.name = 'FsException';
  }
}
