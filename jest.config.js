import dotenv from 'dotenv';

dotenv.config();

export default {
  reporters: [
    'default',
    [
      'jest-qase-reporter',
      {
        // Usando variável de ambiente para a API Token
        apiToken: process.env.QASE_API_TOKEN,
        // Usando variável de ambiente para o Project Code
        projectCode: process.env.QASE_PROJECT_CODE,
        // O runId pode ser dinâmico ou fixo, dependendo da necessidade
        // runId: 45,
        // environmentId deve ser configurado conforme necessário para o projeto
        // environmentId: 1,
        logging: true,
        runComplete: true,
      },
    ],
  ],
};
