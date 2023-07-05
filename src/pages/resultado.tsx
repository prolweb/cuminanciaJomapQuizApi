// Importe as bibliotecas necessárias
import { useRouter } from 'next/router';
import styles from '@/styles/Resultado.module.css';
import Estatistica from '../../components/Estatistica';
import Botao from '../../components/Botao';

const BASE_URL = 'http://localhost:3000/api';

export default function Resultado() {
  const router = useRouter();
  const total = Number(router.query.total);
  const certas = Number(router.query.certas);
  const percentual = Math.round((certas / total) * 100);
  const setor = '{$setor}'; // Substitua 'Tecnologia' pelo valor correto do setor

  async function salvarResultado() {
    try {
      await fetch(`${BASE_URL}/salvar-resultado`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ total, certas, percentual, setor }),
      });
      console.log('Resultado salvo com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar o resultado:', error);
    }
  }

  return (
    <div className={styles.resultado}>
      <h1>Dados coletados com sucesso</h1>
      <h3>Aguardem nossos calculos estatísticos ao final da aula!</h3>
      <div style={{ display: 'flex' }}>
        <Estatistica texto="Perguntas" valor={total} />
        <Estatistica texto="Certas" valor={certas} corFundo="#9CD2A4" />
        <Estatistica texto="Percentual" valor={`${percentual}%`} corFundo="#DE6A33" />
        
      </div>
      <Botao
        href="/"
        texto="Tentar Novamente"
        onClick={salvarResultado} // Chamada para salvar o resultado ao clicar no botão
      />
    </div>
  );
}
