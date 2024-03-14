/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { fetchViaCep } from "../services/ViaCepService.tsx";

interface ViaCepProps {
  cep: string;
}

const ViaCep: React.FC<ViaCepProps> = ({ cep }) => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean | null>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchViaCep(cep)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [cep]);
  if (loading) return <div> Loading ...</div>;
  if (error) return <div> Error: {error}</div>;

  return (
    <>
      <div>
        <h1>Dados do CEP: {data?.cep}</h1>
        <br/>
        <p>Cidade: {data?.localidade}</p>
        <p>Estado: {data?.uf}</p>
        <p>Logadouro: {data?.logradouro}</p>
        <p>Bairro: {data?.bairro}</p>
        <p>Complemento: {data?.complemento}</p>
      </div>
    </>
  );
};

// {
//     "cep": "88704-225",
//     "logradouro": "Rua Silvino Moreira Lima Sobrinho",
//     "complemento": "até 799/800",
//     "bairro": "Dehon",
//     "localidade": "Tubarão",
//     "uf": "SC",
//     "ibge": "4218707",
//     "gia": "",
//     "ddd": "48",
//     "siafi": "8367"
//   }

export default ViaCep;