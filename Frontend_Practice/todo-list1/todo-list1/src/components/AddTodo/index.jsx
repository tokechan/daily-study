// eslint-disable-next-line react/prop-types
export const AddTodo = (props) => {
  const { todoText, onChangeTodoText, onEnterPress } = props;

  return (
    <input 
      placeholder={"Enter your task here"} 
      value={todoText} 
      onChange={onChangeTodoText} 
      onKeyDown={onEnterPress}
    />
  );
};



