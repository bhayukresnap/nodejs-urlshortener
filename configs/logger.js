import pino from 'pino';

const fileTransport = pino.transport({
  targets: [
    {
      target: 'pino-pretty',
      options: {
        destination: './logs/app.log',
      },
    },
    {
      target: 'pino-pretty',
    },
  ],
});

export default pino(fileTransport);
