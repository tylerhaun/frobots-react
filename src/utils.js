import moment from "moment";

export function titleToId(title) {
    return title.toLowerCase().replace(/[ ]/g, "-");
}

export function postToUrl(post) {

    let postDate = moment(post.date);
    let hrefDateString = postDate.format("YYYY-MM-DD");

    let postId = titleToId(post.title);

    let postUrl = "/post/" + hrefDateString + "/" + postId;

    return postUrl;

}
