<template>
    <v-container>
        <v-card>
            <v-container>
                <div>
                    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                        <b-form-group
                            id="input-group-1"
                            label="股票代號:"
                            label-for="input-1"
                        >
                            <b-form-input
                                id="input-1"
                                v-model="form.stockID"
                                type="text"
                                placeholder="輸入編號"
                                required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-2" label="平均現金股利:" label-for="input-2" description="可自行輸入預設金額">
                            <b-form-input
                                id="input-2"
                                v-model="form.cash"
                                placeholder="輸入每股股利"
                                required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group id="input-group-3" label="平均股票股利:" label-for="input-3" description="可自行輸入預設金額">
                            <b-form-input
                                id="input-3"
                                v-model="form.sre"
                                placeholder="輸入股息"
                                required
                            ></b-form-input>
                        </b-form-group>

                        <!--                        <b-form-group id="input-group-4" label="Food:" label-for="input-4">-->
                        <!--                            <b-form-select-->
                        <!--                                id="input-4"-->
                        <!--                                v-model="form.food"-->
                        <!--                                :options="foods"-->
                        <!--                                required-->
                        <!--                            ></b-form-select>-->
                        <!--                        </b-form-group>-->

                        <b-form-group id="input-group-5" label="是否計算複利:"  v-slot="{ ariaDescribedby }">
                            <b-form-checkbox-group
                                v-model="form.checked"
                                id="checkboxes-4"
                                :aria-describedby="ariaDescribedby"
                            >
                                <b-form-checkbox value="yes">現金股利再投入</b-form-checkbox>
                                <b-form-checkbox value="no">現金股利不再投入</b-form-checkbox>
                            </b-form-checkbox-group>
                        </b-form-group>

                        <b-button type="submit" variant="primary">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </b-form>
                    <b-card class="mt-3" header="Form Data Result">
                        <pre class="m-0">{{ form }}</pre>
                    </b-card>
                </div>
            </v-container>
        </v-card>
    </v-container>

</template>

<script>
export default {
    data() {
        return {
            form: {
                stockID: '',
                cash: 0,
                sre: 0,
                food: null,
                checked: []
            },
            foods: [{text: 'Select One', value: null}, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
            show: true
        }
    },
    methods: {
        onSubmit(event) {
            event.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.stockID = ''
            this.form.cash = 0
            this.form.sre = 0
            this.form.food = null
            this.form.checked = []
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    }
}
</script>
