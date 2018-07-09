export default  {
  state: {
    ads: [
      {
        title: 'Image1',
        description: 'Description1',
        promo: false,
        imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        id: 123
      },
      {
        title: 'Image2',
        description: 'Description2',
        promo: true,
        imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        id: 234
      },
      {
        title: 'Image3',
        description: 'Description3',
        promo: true,
        imgSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        id: 567
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds(state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    }
  }
}