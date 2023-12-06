export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
};
