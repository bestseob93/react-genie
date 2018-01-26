import React from 'react';

function GenieHelp({ genieMsg }) {
  return (
    <div>
      <p>기가지니: { genieMsg }</p>
      <p>앱아이디: { process.env.REAT_APP_GENIE_APP_ID }</p>
      <p>키: { process.env.REAT_APP_GENIE_KEY }</p>
      <p>타입: { process.env.REAT_APP_GENIE_TYPE }</p>
    </div>
  );
}

export default GenieHelp;