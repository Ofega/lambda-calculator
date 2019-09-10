import React from "react";
import SpecialButton from './SpecialButton';
import { specials } from '../../../data';

const Specials = () => {
  // STEP 2 - add the imported data to state

  return (
    <div className="btns-container">
      {
        specials.map(specialChar => <SpecialButton char={specialChar} />)
      }
    </div>
  );
};

export default Specials;