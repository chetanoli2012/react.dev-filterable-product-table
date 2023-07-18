import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({ data, searchText, inStockOnly }) => {
  let rows = [];

  let previousCategory = null;

  data.forEach((product) => {
    if (!product.name.toLowerCase().includes(searchText)) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== previousCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }

    rows.push(<ProductRow product={product} key={product.id} />);

    previousCategory = product.category;
  });

  return (
    <div className="product-table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default ProductTable;
