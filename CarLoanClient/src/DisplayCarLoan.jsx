import React from "react";
import useCarLoan from "./useCarLoan";

function DisplayCarLoan()
{
    const dataCarLoan = useCarLoan();

    return(
        <>
        <div>
        <h1>Display Car Loan</h1>
        {

            dataCarLoan && dataCarLoan.map
            (
                loan => (
                    <div>
                        <h2>{loan.make}</h2>
                        <h2>{loan.model}</h2>
                        <h2>{loan.style}</h2>
                        <h2>{loan.loanType}</h2>
                    </div>
                )
            )

        }
        </div>
        </>
    );
        
}

export default DisplayCarLoan;