import React, { useState } from 'react'
import HeaderComponent from './HeaderComponent';
// import PropsComp from './component/PropsComp';


const StateComp = () => {

    const [showContent, setShowContent] = useState(false); 

    const tv="halo var";

    const hanldeOnCLick = () =>{
        setShowContent(!showContent);
    }


    return (
        <div>
            <h3>StateComp</h3>
            <button onClick={hanldeOnCLick}>
                Klik
            </button>
            <HeaderComponent/>
      
            {/* {
                showContent &&  (
                    <PropsComp
                        tv={tv}
                        vl="test VL"
                    />
                )
            } */}

        </div>

    )
}

export default StateComp