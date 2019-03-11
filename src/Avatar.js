import React from 'react';
import { avatarSizes } from './entityApi';
import styled, { css } from 'styled-components';

const AvatarContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  ${({ backgroundColor, containerSize }) => css`
    background-color: ${backgroundColor};
    width: ${containerSize};
    height: ${containerSize};
  `};
`;

const Avatar = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  max-width: none;
  ${({ imgSize, imgLeftOffset, imgTopOffset }) => css`
    left: ${imgLeftOffset};
    top: ${imgTopOffset};
    width: ${imgSize};
  `};
`;

const ReactionContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
`;

const IdentityAvatar = ({ size, reaction, style = {}, backgroundColor, src, lazy = true }) => {
  const { containerSize, imgSize, imgTopOffset, imgLeftOffset } = avatarSizes[size];
  return (
    <div style={{ position: 'relative', ...style }}>
      <AvatarContainer backgroundColor={backgroundColor} containerSize={containerSize}>
        <Avatar src={src} imgSize={imgSize} imgTopOffset={imgTopOffset} imgLeftOffset={imgLeftOffset} />
      </AvatarContainer>
      {reaction && <ReactionContainer>{reaction}</ReactionContainer>}
    </div>
  );
};

export default IdentityAvatar;
