const { createApp } = Vue

createApp({
    data() {
      return {
        message: 'Lista Email:',
        emails: []
      }
    },

    // Questa prima versione non funziona

    methods: {
        printEmail() {
            for (i=0; i<10; i++) {
                axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((risp) => {
	 				    console.log(risp.data.response)
                        this.emails.push(risp.data.response)
	 			    })
		}
        },
    },
    
    // Questa invece funziona

    methods: {
        printEmail() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((risp) => {
                    console.log(risp.data.response)
                    this.emails.push(risp.data.response)
                })
            },
        },
        mounted() {
            for (i=0; i<10; i++) {
                this.printEmail()
            }
        }
}).mount('#app')