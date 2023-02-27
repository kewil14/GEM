class Personne {
    constructor(
        public id?: number,
        public nom?: string,
        public prenom?: string,
        public sexe?: string,
        public adress?: Adress,
        public dateNaissance?: Date
    ) {}
}
