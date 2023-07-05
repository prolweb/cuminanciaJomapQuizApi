import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

const resultadosFilePath = 'src/pages/api/dados.txt';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { total, certas, percentual, setor } = req.body;

    const resultado = `Total: ${total}, Certas: ${certas}, Percentual: ${percentual}\n`;

    fs.appendFile(resultadosFilePath, resultado, { encoding: 'utf-8' }, (error) => {
      if (error) {
        console.error('Erro ao salvar o resultado:', error);
        res.status(500).json({ error: 'Erro ao salvar o resultado.' });
      } else {
        console.log('Resultado salvo com sucesso!');
        res.status(200).json({ message: 'Resultado salvo com sucesso.' });
      }
    });
  } else {
    res.status(405).json({ error: 'Método não permitido.' });
  }
}
