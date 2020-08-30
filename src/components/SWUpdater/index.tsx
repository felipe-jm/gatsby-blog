import React from 'react';

import { Refresh } from '@styled-icons/boxicons-regular/Refresh';

import * as S from './styles';

const SWUpdater: React.FC = () => (
  <S.Container>
    <p>Atualização disponível</p>

    <S.IconContainer onClick={() => window.location.reload()}>
      <Refresh title="Atualizar página" />
    </S.IconContainer>
  </S.Container>
);

export default SWUpdater;
