// eslint-disable-next-line react/prop-types
export const AddTodo = (props) => {
  const { todoText, onChangeTodoText, onEnterPress, placeholder } = props;

  return (
    <input 
      placeholder={placeholder}
      value={todoText} 
      onChange={onChangeTodoText} 
      onKeyDown={onEnterPress}
    />
  );
};



