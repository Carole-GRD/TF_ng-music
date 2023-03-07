
// ATTENTION :   faire le model comme attendu en DB !!!!

export interface Genre {
    id : string;
    name : string;
}

export interface GenreResultArray {
    results : Genre[];
    count : number;
    statusCode : number;
}

export interface GenreResult {
    result : Genre;
    statusCode : number;
}