<template>
    <v-container>
        <v-card>
            <v-container>
                <div>
                    <h1 style="text-align:center;">滿天星空</h1>
                    <b-row>
                        <b-col sm="9">
                            <label>選擇點數：</label>
                            <b-button v-on:click="set_your_num(1)" variant="outline-primary">1</b-button>
                            <b-button v-on:click="set_your_num(2)" variant="outline-primary">2</b-button>
                            <b-button v-on:click="set_your_num(3)" variant="outline-primary">3</b-button>
                            <b-button v-on:click="set_your_num(4)" variant="outline-primary">4</b-button>
                            <b-button v-on:click="set_your_num(5)" variant="outline-primary">5</b-button>
                            <b-button v-on:click="set_your_num(6)" variant="outline-primary">6</b-button>
                        </b-col>
                        <b-col sm="3">
                            <label>剩餘數量：{{ form.DiceCount }}</label>
                        </b-col>
                    </b-row>
                    <b-card class="mt-3" header="剩餘骰子">
                        <pre class="m-0">
                            <v-row>
                                <v-col v-for="item in form.ImgList" cols="2" class="d-flex child-flex">
                                    <v-img
                                        :src="item.url"
                                        max-height="50"
                                        max-width="50"
                                        aspect-ratio="1"
                                        class="grey lighten-2"
                                    ></v-img>
                                </v-col>
                            </v-row>
                        </pre>
                    </b-card>

                    <b-card class="mt-3" header="出局骰子">
                        <pre class="m-0">
                            <v-row>
                                <v-col v-for="item in form.OutList" cols="2" class="d-flex child-flex">
                                    <v-img
                                        :src="item.url"
                                        max-height="50"
                                        max-width="50"
                                        aspect-ratio="1"
                                        class="grey lighten-2"
                                    ></v-img>
                                </v-col>
                            </v-row>
                        </pre>
                    </b-card>
                </div>
            </v-container>
        </v-card>
    </v-container>
</template>

<style>
label {
    display: inline-block;
    width: 140px;
    text-align: right;
}
</style>

<script>
export default {
    data() {
        return {
            form: {
                DiceCount: 20,
                OutList: [],
                ImgList: [],
                LossCount: 0,
            },
            imgMap: new Map([
                [1, {url: './dice_1.png', alt: '1'}],
                [2, {url: './dice_2.png', alt: '2'}],
                [3, {url: './dice_3.png', alt: '3'}],
                [4, {url: './dice_4.png', alt: '4'}],
                [5, {url: './dice_5.png', alt: '5'}],
                [6, {url: './dice_6.png', alt: '6'}],
            ]),
        }
    },
    methods: {
        set_your_num: function (num) {

            this.form.OutList = []
            this.form.ImgList = []
            this.form.LossCount = 0

            for (let i = 0; i < this.form.DiceCount; i++) {
                let point = this.getRandomInt(6)
                if (num === point) {
                    this.form.LossCount++
                    this.form.OutList.push(this.imgMap.get(point));
                } else {
                    this.form.ImgList.push(this.imgMap.get(point))
                }
            }
            if (this.form.LossCount === 0) {
                alert("給我喝喔")
            }
            this.form.DiceCount -= this.form.LossCount
            // alert(this.DiceList);
        },
        getRandomInt: function (max) {
            if (max === 0) {
                return 0;
            }
            return Math.floor(Math.random() * (max - 1)) + 1;
        }
    }
}
</script>
