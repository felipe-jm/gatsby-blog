import { PageProps } from 'gatsby';
import React from 'react';

import Layout from '@/components/Layout';
import * as S from '@/components/Post/styles';
import SEO from '@/components/Seo';

const AboutPage: React.FC<PageProps> = () => (
  <Layout>
    <SEO
      title="Sobre Mim"
      description="Um estudante apaixonado por tecnologia e em busca de conhecimento"
    />
    <S.PostHeader>
      <S.PostTitle>Sobre Mim</S.PostTitle>
    </S.PostHeader>
    <S.MainContent>
      <p>
        Meu nome é Felipe Jung de Mattos, nasci em{' '}
        <a
          href="https://www.google.com/maps/place/Cel.+Vivida,+PR,+85550-000/@-25.9872428,-52.5866414,14z/data=!3m1!4b1!4m5!3m4!1s0x94effa2862ada8f5:0xff166a2c67851c7a!8m2!3d-25.979821!4d-52.5678016?hl=pt-BR"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coronel Vivida
        </a>{' '}
        no estado do Paraná e sou um estudante que entrou no mundo do
        desenvolvimento em 2017.
      </p>

      <p>
        Atualmente sou de Cuiabá (Mato Grosso) e comecei a me envolver no mundo
        de tecnologia e desenvolvimento em um curso técnico de informática feito
        no IFMT. Meu primeiro projeto &quot;sério&quot; foi um aplicativo feito
        em Android Nativo que tinha o objetivo de facilitar a venda de trufas
        dentro do campus{' '}
        <span role="img" aria-label="Um emoji rindo">
          😂
        </span>
      </p>

      <div style={{ display: 'flex' }}>
        <img
          src="/assets/img/about-me/iffood/screen1.png"
          alt="Um celular com a descrição 'IFFOOD - Bem vindo - Digite o nome no campo abaixo para identificação', um input de texto para digitar o nome e um botão abaixo escrito 'REGISTRAR'"
        />

        <img
          src="/assets/img/about-me/iffood/screen2.png"
          alt="Um celular com uma listagem de trufas"
        />
      </div>

      <hr />

      <p>
        Atualmente busco cada vez mais aprofundar meus conhecimentos em ReactJS,
        React Native, NodeJS e todo ecossistema ao redor dessas tecnologias.
      </p>
    </S.MainContent>
  </Layout>
);

export default AboutPage;
