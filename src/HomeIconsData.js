// import image from '../public' 상대경로

const homeIcons = [
    {
        iconTitle: '재밌게놀자', // '놀멍쉬멍'으로 변경?
        iconSrc: '/assets/images/play.png', // 'images/play.png'에서 변경
        url: '/play'
    },
    {
        iconTitle: '일하자',
        iconSrc: '/assets/images/work.png',
        url: '/work'
    },
    {
        iconTitle: '밥먹자', //'뭐먹지'로 변경? 
        iconSrc: '/assets/images/food.png',
        url: '/food'
    },
    {
        iconTitle: '세상에이런일이',
        iconSrc: '/assets/images/newspaper.png',
        url: '/news'
    },
    {
        iconTitle: '집에가자', // '칼퇴하자'로 변경?
        iconSrc: '/assets/images/newhome.png', // 'images/home.png'에서 변경
        url: '/backhome'
    },
    {
        iconTitle: '만남의광장',
        iconSrc: '/assets/images/chat.png',
        url: '/lounge'
    },
    {
        iconTitle: '설정',
        iconSrc: '../assets/images/settings.png',
        url: '' // url 안바꾸고 모달로 설정창 띄우기
    },
    {
        iconTitle: '로그인',
        iconSrc: '../assets/images/users.png',
        url: '' // url 안바꾸고 모달로 로그인창 띄우기
    }
]

export default homeIcons