// eslint-disable-next-line react/prop-types
export const SearchTodo = (props) => {
  
  const { placeholder, inputValue, onChangeInputValue, onKeyDown } = props;
  return (
    <input 
      placeholder={placeholder} 
      value={inputValue}
      onChange={onChangeInputValue}
      onKeyDown={onKeyDown}
    />
  );
}