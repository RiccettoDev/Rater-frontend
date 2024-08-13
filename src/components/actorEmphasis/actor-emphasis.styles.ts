import styled from "styled-components";

export const ActorContainer = styled.div`
  display: flex;
  gap: 10px; /* Espaço entre os cards */
  overflow-x: auto; /* Permite rolar horizontalmente se houver muitos atores */
  padding: 10px 0; /* Espaçamento interno */
`;

export const CardActor = styled.div`
  position: relative;
  width: 150px;
  margin: 0; /* Remove a margem padrão para alinhamento em linha */
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`;

export const CardContent = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  margin: 0;
`;
