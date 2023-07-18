const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="2">
        <span>{category}</span>
      </th>
    </tr>
  );
};

export default ProductCategoryRow;
