import { PostService } from './05-dependency-b';
import { JsonDatabaseService, LocalDataBaseService, WebApiPostService } from './05-dependency-c';


// Main
(async () => {

    //const providerService = new JsonDatabaseService();
    const providerService = new WebApiPostService();

    const postService = new PostService(providerService);

    const posts = await postService.getPosts();

    console.log({ posts })


})();