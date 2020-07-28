import React from 'react';

import Icons from './icons';
import links from './content';

import * as S from './styles';

const SocialLinks: React.FC = () => (
  <S.SocialLinksWrapper>
    <S.SocialLinksList>
      {links.map((link) => {
        const Icon = Icons[link.label];

        return (
          <li key={link.label}>
            <a
              href={link.url}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.IconWrapper>
                <Icon />
              </S.IconWrapper>
            </a>
          </li>
        );
      })}
    </S.SocialLinksList>
  </S.SocialLinksWrapper>
);

export default SocialLinks;
