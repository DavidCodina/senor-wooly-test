import React, { createContext, useState } from 'react';


/* =========================================================================
                               Context.js
========================================================================= */


export const Context  = createContext({});
export const Consumer = Context.Consumer;
export const Provider = (props) => {
  const [ breeds, setBreeds ] = useState([]);

  return (
    <Context.Provider value={{ breeds, setBreeds }}>
      { props.children }
    </Context.Provider>
  );
};