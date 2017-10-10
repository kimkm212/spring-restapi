//action type
export const CONTENT_NEXT = 'CONTENT_NEXT'
export const CONTENT_PREV = 'CONTENT_PREV'

//action creators
export function contentNext() {
    return {
        type : CONTENT_NEXT
    }
}

export function contentPrev() {
    return {
        type : CONTENT_PREV
    }
}