import { ServerException, StatusCode } from '@spetushkou/expressjs';
import dotenvExpand from 'dotenv-expand';
import dotenvFlow from 'dotenv-flow';
import { cleanEnv, port, str } from 'envalid';

export class Env {
  constructor() {
    const env = dotenvFlow.config({
      path: './config/',
      silent: true,
    });

    const envParsed = dotenvExpand(env);
    if (envParsed.error) {
      throw ServerException.create(
        StatusCode.INTERNAL_SERVER_ERROR,
        'Error parsing application config',
      );
    }

    if (envParsed.parsed) {
      this.validate();
    }
  }

  private validate(): void {
    cleanEnv(process.env, {
      ENV_NAME: str(),
      PORT: port(),
      API_VERSION: str(),
      ACCESS_CONTROL_ALLOW_ORIGIN: str(),
      ACCESS_CONTROL_ALLOW_HEADERS: str(),
      ACCESS_CONTROL_ALLOW_METHODS: str(),
    });
  }
}
