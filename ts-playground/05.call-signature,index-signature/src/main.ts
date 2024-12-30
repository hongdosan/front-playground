// call signature
interface getLikeNumber {
  (like: number): number;
}

interface Post {
  id: number;
  title: string;
  getLikeNumber: getLikeNumber;
}

const post: Post = {
  id: 1,
  title: 'post 1',
  getLikeNumber(like: number) {
    return like
  }
}

post.getLikeNumber(1);

// index signature
interface Post {
  [key: string]: unknown; // index signature
  id: number;
  title: string;
}

const postIndex: Post = {
  id: 2,
  title: 'post 2',
  getLikeNumber(like: number) {
    return like
  }
}

postIndex['description'] = 'description 1';
postIndex['pages'] = 300;

interface Names {
  [item: number]: string;
}

const userNames: Names = ['John', 'kim', 'Joe']
