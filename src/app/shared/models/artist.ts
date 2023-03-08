

export interface Artist {
    id : number;
    firstname : string;
    lastname : string;
    birthdate : Date;
    deathdate : Date;
}


export interface ArtistResultArray {
    results : Artist[];
    count : number;
    statusCode : number;
}

export interface ArtistResult {
    result : Artist;
    statusCode : number;
}