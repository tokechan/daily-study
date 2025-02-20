import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useTodo } from './useTodo'
import { TodoProvider } from '../contexts/TodoContext'

describe('useTodo Custom Hook', () => {
  //TodoProviderでラップしてテストする rapper function
  const wrapper = ({ children }) => (
    <TodoProvider>{children}</TodoProvider>
  );

  it('初期状態が正しく設定されている', () => {
    const { result } = renderHook(() => useTodo(), { wrapper })
    
    expect(result.current.incompleteTodo).toEqual([])
    expect(result.current.searchKeyword).toBe('')
    expect(result.current.filteredTodos).toEqual([])
  })

  //検索キーワード入力テスト
  it('検索キーワード入力が正しく更新される', () => {
    const { result } = renderHook(() => useTodo(), { wrapper })
    
    act(() => {
      result.current.onChangeInputValue({ target: { value: 'test' } })
    })

    expect(result.current.searchKeyword).toBe('test')
  })

  it('Todoが正しく削除される', () => {
    const { result } = renderHook(() => useTodo(), { wrapper })
    
    act(() => {
      result.current.setIncompleteTodo(['test todo1'])
    })
    
    act(() => {
      result.current.onClickDelete('test todo1')
    })
    
    expect(result.current.filteredTodos).toEqual([])
  })

  it('検索は大文字小文字を区別しない', () => {
    const { result } = renderHook(() => useTodo(), { wrapper })
    
    act(() => {
      result.current.setIncompleteTodo(['Test Todo'])
    })
    
    act(() => {
      result.current.onChangeInputValue({ target: { value: 'test' } })
    })
    
    expect(result.current.filteredTodos).toEqual(['Test Todo'])
  })
})

