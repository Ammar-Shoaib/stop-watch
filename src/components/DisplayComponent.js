import React from 'react'

function DisplayComponent({time}) {

  const h = () => {
    return time.h > 0 && <span>{(time.h >= 10) ? time.h : "0"+ time.h}</span>
  }

  return (
    <div>
      {h()}<b>&nbsp;:&nbsp;</b>
      <span>{(time.m >= 10) ? time.m : "0"+ time.m}</span><b>&nbsp;:&nbsp;</b>
      <span>{(time.s >= 10) ? time.s : "0"+ time.s}</span><b>&nbsp;:&nbsp;</b>
      <span>{(time.ms >= 10) ? time.ms : "0"+ time.ms}</span>
    </div>
  );
}

export default DisplayComponent;
