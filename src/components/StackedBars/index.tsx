import React from 'react';
import { useSelector } from 'react-redux';
 import { Progress, ProgressBar, ProgressDetails, ProgressDetailsCon, ProgressBox } from './style';


const StackedBars = (props: any) => {
    const { data } = useSelector((state: any) => state.data);
    console.log(data)

    const bars = [
      {color: '#FFCC00', width: 236, error: 'Error 500: 1 256'},
      {color: '#5856D5', width: 157, error: 'Error 501: 800'},
      {color: '#2196F3', width: 130, error: 'Error 502: 650'},
      {color: '#A0B0B9', width: 82, error: 'Others: 330'},
    ]
    return (
        <>
            <ProgressBar >
                {bars.map((bar) => (
                      <Progress data-size="5" style= {{ background: `${bar.color}`, width: `${bar.width}px` }}/>
                ))}
            </ProgressBar>
            <ProgressDetailsCon>
                {bars.map((bar) => (
                  <>
                      <ProgressBox sx={{bgcolor: `${bar.color}` }} />
                      <ProgressDetails> {bar.error} </ProgressDetails>
                  </>
                ))}
            </ProgressDetailsCon>
        </>
    );
};

export default StackedBars;
