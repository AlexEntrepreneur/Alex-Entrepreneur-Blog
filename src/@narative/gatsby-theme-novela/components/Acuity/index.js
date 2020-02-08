import React from 'react';

export default function AcuityScheduler() {
 return (
   <div style={{ marginBottom: '50vh', height: '85vh'}}>
    <iframe title="acuity" src="https://app.acuityscheduling.com/schedule.php?owner=18993163" width="100%" height="100%" frameBorder="0"></iframe>
    <script defer src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
   </div>
 );
}