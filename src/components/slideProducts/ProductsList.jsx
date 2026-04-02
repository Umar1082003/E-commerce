import TopSlide from "./TopSlide";
import Products from "./Products";

function ProductsList({ title, items, func }) {
  return (
    <div className="products-list">
      <div className="container">
        <TopSlide title={title} />
        {items.length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            {title === "your favorites" ? (
              <p style={{ fontSize: "20px" }}>"Favorite items Not Added"</p>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        ) : (
          <>
            {title === "your favorites" && (
              <div className="removeAll">
                <button onClick={func}>Remove All</button>
              </div>
            )}

            <div className="products-container">
              {items.map((product) => {
                return (
                  <>
                    <Products data={product} />
                  </>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductsList;
