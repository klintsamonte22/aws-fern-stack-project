let db = {
  users: [
    {
      userId: "asd32r4efrgv43gvrf4ef",
      email: "user@gmail.com",
      handle: "user",
      createdAt: "2020-07-08T10:37:52.798Z",
      imageUrl: "image/dsfsdkghfscb8uc/adsavcf32",
      bio: "Hello there. I am user, 22, student athlete",
      website: "https://user.com",
      location: "Cebu City, Philippines",
    },
  ],
  screams: [
    {
      userHandle: "user",
      body: "This is the scream body",
      createdAt: "2020-07-08T10:59:52.798Z",
      likeCount: 5,
      commentCount: 3,
    },
  ],
  comments: [
    {
      userHandle: "user",
      screamId: "kdjsfgdksuufhgkdsufky",
      body: "nice one mate!",
      createdAt: "2020-07-08T10:59:52.798Z",
    },
  ],
  notifications: [
    {
      recipient: "user",
      sender: "john",
      read: "true | false",
      screamId: "kdjsfgdksuufhgkdsufky",
      type: "like | comment",
      createdAt: "2019-03-15T10:59:52.798Z",
    },
  ],
};

const userDetails = {
  // Redux data
  credentials: {
    userId: "N43KJ5H43KJHREW4J5H3JWMERHB",
    email: "user@email.com",
    handle: "user",
    createdAt: "2019-03-15T10:59:52.798Z",
    imageUrl: "image/dsfsdkfghskdfgs/dgfdhfgdh",
    bio: "Hello, my name is user, nice to meet you",
    website: "https://user.com",
    location: "Lonodn, UK",
  },
  likes: [
    {
      userHandle: "user",
      screamId: "hh7O5oWfWucVzGbHH2pa",
    },
    {
      userHandle: "user",
      screamId: "3IOnFoQexRcofs5OhBXO",
    },
  ],
};
