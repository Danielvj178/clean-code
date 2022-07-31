import { JsonDatabaseService, LocalDataBaseService } from "./05-dependency-c";

export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private jsonDatabaseService: JsonDatabaseService) { }

    async getPosts() {
        this.posts = await this.jsonDatabaseService.getPosts();

        return this.posts;
    }
}