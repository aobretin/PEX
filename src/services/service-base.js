import {
  req,
  q
} from 'services';

export class ServiceBase {
  async req(REQUEST, args = {}) {
    return await req(
      {
        REQUEST,
        ...args
      }
    );
  }

  async q(requests) {
    return await q(requests);
  }
}
