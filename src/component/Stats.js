export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list</em>
      </footer>
    );

  const NumItem = items.length;
  const NumPakge = items.filter((item) => item.packed).length;
  const percentage = Math.round((NumPakge / NumItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got erverything! Ready to go"
          : `You have ${NumItem} items on your list , and you already packed 
          ${NumPakge} (${percentage}%)`}
      </em>
    </footer>
  );
}
