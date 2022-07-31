(() => {
    function getMoviebyId(id: string): void {
        console.log({ id });
    }

    function getMovieCastById(id: string): void {
        console.log({ id });
    }

    function getActorBioById(ActorId: string): void {
        console.log({ ActorId });
    }

    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;
    }


    function createMovie({ title, description, rating, cast }: Movie): void {
        console.log({ title, description, rating, cast });
    }

    function createActor(fullName: string, birthDate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        if (fullName === 'fernando') return false;

        console.log('Crear actor', birthDate);
        return true;

    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if (isDead) return 1500;

        if (isSeparated) return 2500;

        return isRetired ? 3000 : 4000;
    }

})();




