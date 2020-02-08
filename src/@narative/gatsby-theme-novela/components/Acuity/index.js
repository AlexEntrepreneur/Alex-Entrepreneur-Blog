import React from 'react';
import styled from '@emotion/styled';

export default function AcuityScheduler() {
 return (
   <IframeContainer>
    <iframe title="acuity" src="https://app.acuityscheduling.com/schedule.php?owner=18993163" width="100%" height="100%" frameBorder="0"></iframe>
    <script defer src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
   </IframeContainer>
 );
}

const IframeContainer = styled.div`
  margin: 0 auto;
  margin-bottom: 50vh;
  height: 85vh;
  overflow-y: scroll;
  width: 90%;

  &::-webkit-scrollbar { 
    display: none; 
  }
`;
