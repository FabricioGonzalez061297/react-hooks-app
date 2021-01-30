import React,{memo} from 'react';

export const Small=memo( ({value})=>{

    console.log('me mostre small')

    return (
        <small>
            {value}
        </small>
    );  
});
