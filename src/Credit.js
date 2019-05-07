import React from 'react';
import sim from './sim.png'
import mastercard from './mastercard.jpg'

function Credit(){
    return (
        <div className="App">
            <h1 className='text'>Credit Card</h1>
            <img className='simCard' src={sim} alt='sim' />
            <div className="CardNumberBack"><span className='CardNumber'  >7586 5664 7895 1245</span></div>
            <div className='validation colWhite'>
                <span className='colWhite code' >5422</span>
                <div className='ValiDate'><p className='val'> VALID <br /> THRU</p>
                    <div ><p className='date'>MONTH/YEAR</p>
                        <p className='colWhite code'>11/50</p></div>
                    <img className='masterCard' src={mastercard} alt='sim' />
                </div>
            </div>
            <p className='colWhite cardHolder'>CARD HOLDER</p>
        </div>
    )
}
export default Credit