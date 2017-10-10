import * as counter from '../action/content'

const contentData = [
        {
            idx : 0,
            subject : '제목1',
            content : '내용1',
            regDate : '2017년 9월 13일'
        },
        {
            idx : 1,
            subject : '제목2',
            content : '내용2',
            regDate : '2017년 9월 27일'
        },
        {
            idx : 2,
            subject : '제목3333',
            content : '내용2222233333333333333222',
            regDate : '2017년 10월 27일'
        }
    ]


const initialState = contentData[0];

export default function content(state = initialState, action) {

    switch (action.type) {
        case counter.CONTENT_NEXT :
            let nextIdx = state.idx+1;
            if(nextIdx >= contentData.length){
                return contentData[0];
            }else{
                return contentData[nextIdx];
            }

        case counter.CONTENT_PREV :
            let prevIdx = state.idx-1;
            if(prevIdx < 0){
                return contentData[contentData.length-1];
            }else{
                return contentData[prevIdx];
            }

        default:
            return state;
    }
}