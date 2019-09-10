import React, { useState } from "react";
import SpecialButton from './SpecialButton';
import { specials } from '../../../data';

const Specials = (props) => {

  const [specialState] = useState(specials);

  return (
    <div className="btns-container">
      {
        specialState.map(specialChar => {
          return(
            <SpecialButton 
              key={specialChar} 
              char={specialChar} 
              reset={props.reset}
            />
          )
        })
      }
    </div>
  );
};

export default Specials;