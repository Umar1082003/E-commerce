import { useContext } from "react";
import PageTransition from "../../components/pageTransition";
import { CartContext } from "../../components/context/CartContext";
import ProductsList from "../../components/slideProducts/ProductsList";

function FavoritesPage() {
  const { favorites, clearFavorites } = useContext(CartContext);

  return (
    <PageTransition>
      <ProductsList
        items={favorites}
        func={clearFavorites}
        title={"your favorites"}
      />
    </PageTransition>
  );
}

export default FavoritesPage;
