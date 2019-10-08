import React from 'react';
import App from './App'


const conversiontheTime=ms=>{

const msPersecond=1000
const msPerminute= msPersecond * 60
const msPerHOUR=msPerminute * 60
// the functions
const hour=Math.floor(ms/msPerHOUR)
const theRestofhour= (ms% msPerHOUR)
const minute=Math.floor(theRestofhour/msPerminute)
const therestofminute= (theRestofhour %msPerminute)
const second=Math.floor (therestofminute/msPersecond)
return String(hour).padStart(2, '0') +':'+ String(minute).padStart(2, '0')+ ':'+String(second).padStart(2, '0')

}

const Time=({ms})=>
<div className='container'> 
<div className='container-time'>
    <div className='class-time'>
     {conversiontheTime(ms)} 
    </div>
    <div className='class-hour'>
        <div className='class-textHour'> Hour</div>
        <div className='class-textMinute'> Minute</div>
        <div className='class-textSecond'> Second </div>
    </div>
</div>
</div>

export default Time

