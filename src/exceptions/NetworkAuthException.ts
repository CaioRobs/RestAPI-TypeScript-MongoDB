import HttpException from "./HttpException";

class NetworkAuthException extends HttpException {
  constructor(name: string) {
    super(511, `Eae ${name}`);
  }
}

export default NetworkAuthException;
