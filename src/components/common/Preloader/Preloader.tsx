import React from 'react';
type PropsType={
    width?:string
}
export const Preloader = ({width="200px"}:PropsType) => {
    return (
        <img src={'https://usagif.com/wp-content/uploads/loading-96.gif'} width={width}/>
    );
};

