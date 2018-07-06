<template>

    <div>
        <v-container fluid>
            <v-layout row>
                <v-flex xs12>
                    <v-carousel>
                    <v-carousel-item
                    v-for="ad in ads"
                    :key="ad.id"
                    :src="ad.imgSrc"

                    >
                        <div class="car-link">
                            <v-btn class="error" :to="'/ad/' + ad.id">{{ad.title}}</v-btn>
                        </div>
                    </v-carousel-item>
                    </v-carousel>
                </v-flex>
            </v-layout>
        </v-container>

        <v-container grid-list-lg>
            <v-layout row wrap>
                <v-flex
                        xs12
                        sm6
                        md4
                        v-for="ad in ads"
                        :key="ad.id"

                >
                    <v-card>
                        <v-card-media
                                :src="ad.imgSrc"
                                height="200px"
                        ></v-card-media>

                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{ad.title}}</h3>
                                <div>{{ad.description}}</div>
                            </div>
                        </v-card-title>

                        <v-card-actions>
                            <v-spacer>
                                <v-btn flat :to="'/ad/' + ad.id">Open</v-btn>
                                <v-btn raised class="primary">Buy</v-btn>
                            </v-spacer>

                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
  data () {
    return {
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
    }
  }
}
</script>

<style scoped="">
    .car-link {
        position: absolute;
        bottom: 50px;
        left: 50%;
        background: rgba(0, 0, 0, .5);
        transform: translate(-50%, 0);
        padding: 5px 15px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
    }
</style>