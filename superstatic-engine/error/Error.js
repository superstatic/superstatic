class Error {
  constructor({ error, message }) {
    this._class = 'Error';
    this.error = error;
    this.message = message;

    this.throw();
  }

  throw() {
    console.error(this.error);
    console.error(this.message);
    throw this.error;
  }
}