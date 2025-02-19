import { renderHook } from '@testing-library/react'
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
})