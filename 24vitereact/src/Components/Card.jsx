import useApi from "../../Hooks/useApi";

function Card() {
    const apiinfo = useApi();   // ✔ hook inside component

    return (
        <>
            <div>
                <h1>Products</h1>
                {
                   apiinfo && 
                   apiinfo.map( 
                                product => (
                                                <div key={product.id}>
                                                        <h2>{product.name}</h2> 
                                                        <p>Reviews: {product.numberOfReviews}</p> 
                                                </div>
                                           )
                                )
                }
            </div>
        </>
    );
}

export default Card;
