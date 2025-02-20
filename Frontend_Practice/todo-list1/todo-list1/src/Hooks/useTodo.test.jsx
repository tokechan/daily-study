import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { useTodo } from './useTodo'

describe('useTodo Custom Hook', () => {
  it('初期状態が正しく設定されている', () => {
    const { result } = renderHook(() => useTodo())
    
    // 初期状態の検証
    expect(result.current.todoText).toBe('')
    expect(result.current.searchKeyword).toBe('')
    expect(result.current.filteredTodos).toEqual([])
  })

  //Todo入力テスト
  it('text入力が正しく更新される', () => {
    const { result } = renderHook(() => useTodo())

    act(() => {
      result.current.onChangeTodoText({ target: { value: 'test todo' } })   
    })

    expect(result.current.todoText).toBe('test todo')
  })

  //Enterキー押下テスト
  it('Enterキー押下でTodoが追加される', () => {
    const  { result } = renderHook(() => useTodo())

    act(() => {
      result.current.onChangeTodoText({ target: { value: 'test todo' } })
    })

    act(() => {
      result.current.onEnterPress({ key: 'Enter'})
    })

    expect(result.current.todoText).toBe('')//Todo入力フォームがクリアされる
    expect(result.current.filteredTodos).toEqual(['test todo'])//Todoが追加される
  })

  //検索キーワード入力テスト
  it('検索キーワード入力が正しく更新される', () => {
    const { result } = renderHook(() => useTodo())
    
    //1つ目のTodoを追加
    act(() => {
      result.current.onChangeTodoText({ target: { value: 'test todo1'}})
    })

    act(() => {
      result.current.onEnterPress({ key: 'Enter'})      
    })

    console.log('After first todo:', result.current.filteredTodos) // デバッグログ

    //2つ目のTodoを追加
    act(() => {
      result.current.onChangeTodoText({ target: { value: 'test todo2'}})
    })

    act(() => {
      result.current.onEnterPress({ key: 'Enter'})      
    })

    console.log('After second todo:', result.current.filteredTodos) // デバッグログ

    //検索キーワードを入力
    act(() => {
      result.current.onChangeInputValue({ target: {value: 'test'}})
    })
    console.log('After search:', {
      searchKeyword: result.current.searchKeyword,
      filteredTodos: result.current.filteredTodos,
      incompleteTodo: result.current.incompleteTodo // 元の配列も確認
    }) // デバッグログ


    //検証
    expect(result.current.searchKeyword).toBe('test')
    expect(result.current.filteredTodos).toStrictEqual([
      'test todo1',
      'test todo2'
    ])
  }) 

  it('Todoが正しく削除される', () => {
    const { result } = renderHook(() => useTodo())
    
    // Todoを追加
    act(() => {
      result.current.onChangeTodoText({ target: { value: 'test todo1' } })
    })
    act(() => {
      result.current.onEnterPress({ key: 'Enter' })
    })
    
    // 削除を実行
    act(() => {
      result.current.onClickDelete('test todo1')
    })
    
    expect(result.current.filteredTodos).toEqual([])
  })

  it('空のTodoは追加されない', () => {
    const { result } = renderHook(() => useTodo())
    
    act(() => {
      result.current.onChangeTodoText({ target: { value: '' } })
    })
    act(() => {
      result.current.onEnterPress({ key: 'Enter' })
    })
    
    expect(result.current.filteredTodos).toEqual([])
  })

  it('検索は大文字小文字を区別しない', () => {
    const { result } = renderHook(() => useTodo())
    
    // Todoを追加
    act(() => {
      result.current.onChangeTodoText({ target: { value: 'Test Todo' } })
    })
    act(() => {
      result.current.onEnterPress({ key: 'Enter' })
    })
    
    // 小文字で検索
    act(() => {
      result.current.onChangeInputValue({ target: { value: 'test' } })
    })
    
    expect(result.current.filteredTodos).toEqual(['Test Todo'])
  })
})

