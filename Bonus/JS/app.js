const { createApp } = Vue

createApp({
    data() {
      return {
        message: 'Lista Email:',
        emails: []
      }
    },
    
    methods: {
        printEmail() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((risp) => {
                    for (i=0; i<10; i++) {
                    console.log(risp.data.response)
                    this.emails.push(risp.data.response)
                    }
                })
            },
        }, 
        mounted() {
            this.printEmail()
        }
}).mount('#app')