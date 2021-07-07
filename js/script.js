const app = new Vue (
    {
        el: "#app",
        data: {
            jobs: [
                {
                    id: 1,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: './img/logo.jpg',
                    city: 'Roma',
                    contract: 'Stage'
                },
                {
                    id: 2,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: './img/logo.jpg',
                    city: 'Torino',
                    contract: 'Full Time'
                },
                {
                    id: 3,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: './img/logo.jpg',
                    city: 'Genova',
                    contract: 'Full Time'
                },
                {
                    id: 4,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: './img/logo.jpg',
                    city: 'Palermo',
                    contract: 'Part Time'
                },
                {
                    id: 5,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: './img/logo.jpg',
                    city: 'Milano',
                    contract: 'Stage'
                },
                {
                    id: 6,
                    company: 'Perferendis',
                    position: 'Developer',
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
                    created_at: '5/22/2021',
                    logo: './img/logo.jpg',
                    city: 'Parma',
                    contract: 'Full Time'
                },
            ],
            starred: [2, 3, 6],
            applied: [4, 5],
        },
        methods: {
            aggiungi: function (index) {
                if (!this.starred.includes(index)) {
                    this.starred.push(index);
                }
            },
            rimuovi: function (index) {
                if (this.starred.includes(index)) {
                    let preferito = this.starred.indexOf(index);
                    this.starred.splice(preferito, 1);
                }
            },
            aggiungiApply: function (index) {
                if (!this.applied.includes(index)) {
                    this.applied.push(index);
                }
                let preferito = this.starred.indexOf(index);
                this.starred.splice(preferito, 1);
                this.annuncio ();
            },
            annuncio: function () {
                setTimeout(() => {
                    alert("Attendi");
                    alert("Candidatura inviata con successo");
                }, 1000);
            },
        },           
    },
);
