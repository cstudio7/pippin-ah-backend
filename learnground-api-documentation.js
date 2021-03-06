/* eslint-disable */
export default {
  swagger: '2.0',
  info: {
    version: '1.0',
    title: 'Learn Ground Api Documentation',
    description: 'Learn Ground Api Docs',
    contact: {}
  },
  host: 'learnground-api-staging.herokuapp.com',
  basePath: '/api/v1',
  schemes: [
    'https'
  ],
  consumes: [
    'application/json'
  ],
  produces: [
    'application/json'
  ],
  paths: {
    '/users': {
      post: {
        description: '',
        summary: 'Signup',
        operationId: 'UsersPost',
        produces: [
          'application/json'
        ],
        consumes: [
          'application/x-www-form-urlencoded'
        ],
        parameters: [
          {
            name: 'username',
            in: 'formData',
            required: true,
            type: 'string',
            description: ''
          },
          {
            name: 'email',
            in: 'formData',
            required: true,
            type: 'string',
            description: ''
          },
          {
            name: 'password',
            in: 'formData',
            required: true,
            type: 'string',
            description: ''
          },
          {
            name: 'Content-Type',
            in: 'header',
            required: true,
            type: 'string',
            description: ''
          }
        ],
        responses: {
          201: {
            description: '',
            schema: {
              $ref: '#/definitions/SignupResponse'
            },
            examples: {
              'application/json': {
                message: 'An email has been sent to your email address',
                username: 'blakelively',
                email: 'blake2019@gmail.com',
                notification: [],
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNGFiNDlkLTg5YWEtNGJiNC04NzFhLTExZDZlODc0YTMyYyIsImlzTWVudG9yIjpmYWxzZSwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU0OTAzMjE3NCwiZXhwIjoxNTQ5MjkxMzc0fQ.cvC_GKZ1Ieq7FiT0KMxSuQJq5E7GxJGeCwYDZ0lL-Qo'
              }
            },
            headers: {}
          },
          400: {
            description: 'Returns 400 for invalid Credentials',
            example: [
              {
                error: 'password must contain only numbers and alphabets'
              },
              {
                error: 'Your username must be at least 6 characters'
              },
              {
                error: 'Your password must be at least 8 characters'
              },
              {
                error: 'username must contain only alphabets and numbers'
              },
              {
                error: 'please Enter a valid Email'
              },
              {
                error: 'password is required'
              },
              {
                error: 'Email is required'
              },
              {
                error: 'Username is required'
              },
              {
                error: 'username must not be empty'
              },
              {
                error: 'password must not be empty'
              },
              {
                error: 'email must not be empty'
              }
            ]
          },
          409: {
            description: 'returns 409 if email or username alread exist',
            example: [
              {
                error: 'Email already in use'
              },
              {
                error: 'Username already in use'
              }
            ]
          },
          500: {
            description: 'Server Error'
          }
        }
      }
    },
    '/users/login': {
      post: {
        description: '',
        summary: 'SignIn',
        operationId: 'UsersLoginPost',
        produces: [
          'application/json'
        ],
        consumes: [
          'application/x-www-form-urlencoded'
        ],
        parameters: [
          {
            name: 'usernameOrEmail',
            in: 'formData',
            required: true,
            type: 'string',
            description: ''
          },
          {
            name: 'password',
            in: 'formData',
            required: true,
            type: 'string',
            description: ''
          },
          {
            name: 'Content-Type',
            in: 'header',
            required: true,
            type: 'string',
            description: ''
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/SignInResponse'
            },
            examples: {
              'application/json': {
                message: 'Login was successful',
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNGFiNDlkLTg5YWEtNGJiNC04NzFhLTExZDZlODc0YTMyYyIsImlzTWVudG9yIjpmYWxzZSwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU0OTAzMjI5NiwiZXhwIjoxNTQ5MjkxNDk2fQ.2VA5lZuXXrtssd6N7Ex0JPYX8lCgXqF6K6JfPZaEigU',
                notifications: []
              }
            },
            headers: {}
          },
          400: {
            description: 'returns 400 for invalid credentials',
            example: [
              {
                error: 'Invalid Credentials'
              },
              {
                error: 'Invalid Password'
              },
              {
                error: 'usernameOrEmail is required'
              },
              {
                error: 'password is required'
              },
              {
                error: 'Username must not be empty'
              }
            ]
          },
          500: {
            description: 'Server Error'
          }
        }
      }
    },
    '/user': {
      get: {
        description: '',
        summary: 'Get current User',
        operationId: 'UserGet',
        produces: [
          'application/json'
        ],
        parameters: [
          {
            name: 'Content-Type',
            in: 'header',
            required: true,
            type: 'string',
            description: ''
          }
        ],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/GetcurrentUserResponse'
            },
            examples: {
              'application/json': {
                username: 'blakelively',
                email: 'blake2019@gmail.com',
                isMentor: false,
                profile: {
                  firstName: null,
                  lastName: null,
                  bio: null,
                  imageUrl: null
                }
              }
            },
            headers: {}
          },
          401: {
            description: 'Token should be provided',
            example: [
              {
                error: 'Invalid token'
              },
              {
                error: 'No token provide'
              }
            ]
          },
          500: {
            description: 'Server Error'
          }
        }
      },
      patch: {
        description: '',
        summary: 'Update a user',
        operationId: 'UserPatch',
        produces: [
          'application/json'
        ],
        consumes: [
          'application/x-www-form-urlencoded'
        ],
        parameters: [
          {
            name: 'username',
            in: 'formData',
            required: true,
            type: 'string',
            description: ''
          },
          {
            name: 'email',
            in: 'formData',
            required: true,
            type: 'string',
            description: ''
          },
          {
            name: 'password',
            in: 'formData',
            required: true,
            type: 'string',
            description: ''
          },
          {
            name: 'Content-Type',
            in: 'header',
            required: true,
            type: 'string',
            description: ''
          }
        ],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/UpdateauserResponse'
            },
            examples: {
              'application/json': {
                username: 'newUsername',
                email: 'newemail@gmail.com',
                isMentor: false,
                message: 'User Updated Successfully'
              }
            },
            headers: {}
          },
          400: {
            description: 'Bad reques',
            example: [
              {
                error: 'Username already in use'
              },
              {
                error: 'Email already in use'
              }
            ]
          },
          401: {
            description: 'Token should be provided',
            example: [
              {
                error: 'Invalid token'
              },
              {
                error: 'No token provide'
              }
            ]
          },
          500: {
            description: 'Server Error'
          }
        }
      }
    },
    '/profile': {
      patch: {
        description: '',
        summary: 'Update profile',
        operationId: 'UnnammedEndpointGet',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            headers: {}
          }
        }
      }
    },
    '/user/authors': {
      get: {
        description: '',
        summary: 'getAuthors',
        operationId: 'UserAuthorsGet',
        produces: [
          'application/json'
        ],
        parameters: [
          {
            name: 'Content-Type',
            in: 'header',
            required: true,
            type: 'string',
            description: ''
          }
        ],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/getAuthorsResponse'
              }
            },
            examples: {
              'application/json': [
                {
                  author: 'SteveCage',
                  firstName: null,
                  lastName: null,
                  bio: null,
                  image: null,
                  interests: null
                },
                {
                  author: 'SteveCage',
                  firstName: null,
                  lastName: null,
                  bio: null,
                  image: null,
                  interests: null
                },
                {
                  author: 'SteveCage',
                  firstName: null,
                  lastName: null,
                  bio: null,
                  image: null,
                  interests: null
                },
                {
                  author: 'SteveCage',
                  firstName: null,
                  lastName: null,
                  bio: null,
                  image: null,
                  interests: null
                },
                {
                  author: 'SteveCage',
                  firstName: null,
                  lastName: null,
                  bio: null,
                  image: null,
                  interests: null
                },
                {
                  author: 'SteveCage',
                  firstName: null,
                  lastName: null,
                  bio: null,
                  image: null,
                  interests: null
                },
                {
                  author: 'usernameone',
                  firstName: null,
                  lastName: null,
                  bio: null,
                  image: null,
                  interests: null
                },
                {
                  author: 'usernameone',
                  firstName: null,
                  lastName: null,
                  bio: null,
                  image: null,
                  interests: null
                },
                {
                  author: 'usernametwo',
                  firstName: null,
                  lastName: null,
                  bio: null,
                  image: null,
                  interests: null
                },
                {
                  author: 'Philip123',
                  firstName: null,
                  lastName: null,
                  bio: null,
                  image: null,
                  interests: null
                },
                {
                  author: 'Philip123',
                  firstName: null,
                  lastName: null,
                  bio: null,
                  image: null,
                  interests: null
                },
                {
                  author: 'Philip123',
                  firstName: null,
                  lastName: null,
                  bio: null,
                  image: null,
                  interests: null
                }
              ]
            },
            headers: {}
          },
          401: {
            description: 'Token should be provided',
            example: [
              {
                error: 'Invalid token'
              },
              {
                error: 'No token provide'
              }
            ]
          }
        }
      }
    },
    '/users/resetpassword': {
      post: {
        description: '',
        summary: 'Reset Password',
        operationId: 'UsersResetpasswordPost',
        produces: [
          'application/json'
        ],
        consumes: [
          'application/x-www-form-urlencoded'
        ],
        parameters: [
          {
            name: 'email',
            in: 'formData',
            required: true,
            type: 'string',
            description: ''
          },
          {
            name: 'Content-Type',
            in: 'header',
            required: true,
            type: 'string',
            description: ''
          }
        ],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/ResetPasswordResponse'
            },
            examples: {
              'application/json': {
                message: 'A reset link has been sent to your mail'
              }
            },
            headers: {}
          }
        }
      }
    },
    '/user/request': {
      post: {
        description: '',
        summary: 'Create a request',
        operationId: 'UserRequestPost',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/CreatearequestResponse'
            },
            examples: {
              'application/json': {
                message: 'Your request to be a mentor has been sent',
                id: 'a42dfab2-9d63-4a83-a5ea-bd72151ce00f'
              }
            },
            headers: {}
          }
        }
      }
    },
    '/user/request/approve/:id': {
      patch: {
        description: '',
        summary: 'Approve a user request to be a Mentor',
        operationId: 'UserRequestApproveA42dfab29d634a83A5eaBd72151ce00fPatch',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            headers: {}
          },
          401: {
            description: 'Unauthorized',
            schema: {
              $ref: '#/definitions/RateAnArticleResponse'
            },
            examples: {
              'application/json': {
                error: 'Unauthorized'
              }
            }
          }
        }
      }
    },
    '/user/request/reject/id': {
      patch: {
        description: '',
        summary: 'Reject request to be a Mentor',
        operationId: 'UserRequestRejectA42dfab29d634a83A5eaBd72151ce00fPatch',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            headers: {}
          },
          401: {
            description: 'Unauthorized',
            schema: {
              $ref: '#/definitions/RateAnArticleResponse'
            },
            examples: {
              'application/json': {
                error: 'Unauthorized'
              }
            }
          }
        }
      }
    },
    '/user/activate/id': {
      get: {
        description: '',
        summary: 'Activate User account, when link is clicked',
        operationId: 'UserActivateA42dfab29d634a83A5eaBd72151ce00fGet',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/ActivateUseraccount,whenlinkisclickedResponse'
            },
            examples: {
              'application/json': {
                message: 'Your account has been activated. Login to continue using learnground'
              }
            },
            headers: {}
          }
        }
      }
    },
    '/profile/:username/follow': {
      post: {
        description: '',
        summary: 'Follow a User',
        operationId: 'ProfileSarahaududFollowPost',
        produces: [
          'application/json'
        ],
        parameters: [
          {
            name: 'Content-Type',
            in: 'header',
            required: true,
            type: 'string',
            description: ''
          }
        ],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/FollowaUserResponse'
            },
            examples: {
              'application/json': {
                message: 'You are now following sarahaudud',
                profile: {
                  username: 'sarahaudud',
                  firstName: null,
                  lastName: null,
                  bio: null
                }
              }
            },
            headers: {}
          }
        }
      }
    },
    '/profile/following': {
      get: {
        description: '',
        summary: 'get all those whom you follow',
        operationId: 'ProfileFollowingGet',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/getallthosewhomyoufollowResponse'
            },
            examples: {
              'application/json': {
                following: [
                  {
                    username: 'sarahaudud',
                    lastName: null,
                    firstName: null,
                    bio: null,
                    interests: null,
                    imageUrl: null
                  }
                ],
                count: 1
              }
            },
            headers: {}
          }
        }
      }
    },
    '/profile/followers': {
      get: {
        description: '',
        summary: 'Get all Your followers',
        operationId: 'ProfileFollowersGet',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/GetallYourfollowersResponse'
            },
            examples: {
              'application/json': {
                followers: [
                  {
                    username: 'blakelively',
                    lastName: null,
                    firstName: null,
                    bio: null,
                    interests: null,
                    imageUrl: null
                  }
                ],
                count: 1
              }
            },
            headers: {}
          }
        }
      }
    },
    '/articles': {
      post: {
        description: '',
        summary: 'Create An Article',
        operationId: 'ArticlesPost',
        produces: [
          'application/json'
        ],
        consumes: [
          'application/x-www-form-urlencoded'
        ],
        parameters: [
          {
            name: 'title',
            in: 'formData',
            required: true,
            type: 'string',
            description: ''
          },
          {
            name: 'body',
            in: 'formData',
            required: true,
            type: 'string',
            description: ''
          },
          {
            name: 'description',
            in: 'formData',
            required: true,
            type: 'string',
            description: ''
          },
          {
            name: 'category',
            in: 'formData',
            required: true,
            type: 'string',
            description: ''
          },
          {
            name: 'Content-Type',
            in: 'header',
            required: true,
            type: 'string',
            description: ''
          }
        ],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          201: {
            description: '',
            schema: {
              $ref: '#/definitions/CreateAnArticleResponse'
            },
            examples: {
              'application/json': {
                title: 'How to be a developer',
                body: 'To be a developer you have to learn to think and to code',
                description: 'I want to be a developer',
                slug: 'how-to-be-a-developer-blakelively',
                rating: null,
                createdAt: '2019-02-01T16:45:36.406Z',
                readTime: 1,
                author: {
                  username: 'blakelively',
                  bio: null,
                  image: null
                }
              }
            },
            headers: {}
          }
        }
      },
      get: {
        description: '',
        summary: 'Get Articles',
        operationId: 'ArticlesGet',
        produces: [
          'application/json'
        ],
        parameters: [],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/GetArticlesResponse'
            },
            examples: {
              'application/json': {
                articles: [
                  {
                    author: 'blakelively',
                    slug: 'how-to-be-a-developer-blakelively',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'How to be a developer',
                    description: 'I want to be a developer',
                    category: 'Science',
                    body: 'To be a developer you have to learn to think and to code',
                    readTime: 1,
                    createdOn: '1 February 2019, 4:36PM',
                    modifiedOn: '1 February 2019, 4:36PM'
                  },
                  {
                    author: 'Philip123',
                    slug: 'easy-way-to-divide-numbers-Philip123',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'Easy way to divide numbers',
                    description: 'Skill Session',
                    category: 'Mathematics',
                    body: 'Have you ever Wondered',
                    readTime: 1,
                    createdOn: '1 February 2019, 12:22PM',
                    modifiedOn: '1 February 2019, 12:22PM'
                  },
                  {
                    author: 'Philip123',
                    slug: 'easy-way-to-divide-numberst-Philip123',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'Easy way to divide numberst',
                    description: 'Skill Session',
                    category: 'Mathematics',
                    body: 'Have you ever Wondered',
                    readTime: 1,
                    createdOn: '1 February 2019, 12:08PM',
                    modifiedOn: '1 February 2019, 12:08PM'
                  },
                  {
                    author: 'Philip123',
                    slug: 'how-to-calculate-fast-Philip123',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'How to calculate fast',
                    description: 'Skill Session',
                    category: 'Mathematics',
                    body: 'Have you ever Wondered',
                    readTime: 1,
                    createdOn: '1 February 2019, 11:58AM',
                    modifiedOn: '1 February 2019, 11:58AM'
                  },
                  {
                    author: 'usernametwo',
                    slug: 'testing-for-efficiency-usernametwo',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'Testing for efficiency',
                    description: 'testing too',
                    category: 'Arts',
                    body: 'tesing',
                    readTime: 1,
                    createdOn: '1 February 2019, 9:25AM',
                    modifiedOn: '1 February 2019, 9:25AM'
                  },
                  {
                    author: 'usernameone',
                    slug: 'the-story-of-a-young-lady-usernameone',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'The story of a young lady',
                    description: 'to take care of',
                    category: 'Arts',
                    body: 'who needs a',
                    readTime: 1,
                    createdOn: '1 February 2019, 9:27AM',
                    modifiedOn: '1 February 2019, 9:27AM'
                  },
                  {
                    author: 'usernameone',
                    slug: 'the-story-of-a-young-girl-usernameone',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'The story of a young girl',
                    description: 'to take care of',
                    category: 'Arts',
                    body: 'who needs a',
                    readTime: 1,
                    createdOn: '1 February 2019, 9:48AM',
                    modifiedOn: '1 February 2019, 9:48AM'
                  },
                  {
                    author: 'SteveCage',
                    slug: 'bone-talks-and-harmopuhkktettredgoredfgffdf-SteveCage',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'bone talks and harmopuhkktettredgoredfgffdf',
                    description: 'I am a chosen onet',
                    category: 'Arts',
                    body: 'this is all about bucky roberttf',
                    readTime: 1,
                    createdOn: '1 February 2019, 9:01AM',
                    modifiedOn: '1 February 2019, 9:01AM'
                  },
                  {
                    author: 'SteveCage',
                    slug: 'bone-talks-and-harmopuhkktettredgoredfgff-SteveCage',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'bone talks and harmopuhkktettredgoredfgff',
                    description: 'I am a chosen onet',
                    category: 'Arts',
                    body: 'this is all about bucky roberttf',
                    readTime: 1,
                    createdOn: '1 February 2019, 9:42AM',
                    modifiedOn: '1 February 2019, 9:42AM'
                  },
                  {
                    author: 'SteveCage',
                    slug: 'bone-talks-and-harmopuhkktettredgoredfg-SteveCage',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'bone talks and harmopuhkktettredgoredfg',
                    description: 'I am a chosen onet',
                    category: 'Arts',
                    body: 'this is all about bucky roberttf',
                    readTime: 1,
                    createdOn: '1 February 2019, 9:20AM',
                    modifiedOn: '1 February 2019, 9:20AM'
                  },
                  {
                    author: 'SteveCage',
                    slug: 'bone-talks-and-harmopuhkktettredgoredf-SteveCage',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'bone talks and harmopuhkktettredgoredf',
                    description: 'I am a chosen onet',
                    category: 'Arts',
                    body: 'this is all about bucky roberttf',
                    readTime: 1,
                    createdOn: '1 February 2019, 9:05AM',
                    modifiedOn: '1 February 2019, 9:05AM'
                  },
                  {
                    author: 'SteveCage',
                    slug: 'bone-talks-and-harmopuhkktettredgored-SteveCage',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'bone talks and harmopuhkktettredgored',
                    description: 'I am a chosen onet',
                    category: 'Arts',
                    body: 'this is all about bucky roberttf',
                    readTime: 1,
                    createdOn: '1 February 2019, 9:18AM',
                    modifiedOn: '1 February 2019, 9:18AM'
                  },
                  {
                    author: 'SteveCage',
                    slug: 'bone-talks-and-harmopuhkktettredgo-SteveCage',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'bone talks and harmopuhkktettredgo',
                    description: 'I am a chosen onet',
                    category: 'Arts',
                    body: 'this is all about bucky roberttf',
                    readTime: 1,
                    createdOn: '1 February 2019, 9:40AM',
                    modifiedOn: '1 February 2019, 9:40AM'
                  }
                ],
                count: 13,
                page: 1
              }
            },
            headers: {}
          }
        }
      }
    },
    '/articles/report/:slug': {
      post: {
        description: '',
        summary: 'Report An Article',
        operationId: 'ArticlesReportSlugForArticlePost',
        produces: [
          'application/json'
        ],
        security: [
          {
            UserToken: []
          }
        ],
        consumes: [
          'application/x-www-form-urlencoded'
        ],
        parameters: [
          {
            name: 'report',
            in: 'formData',
            required: true,
            type: 'string',
            description: ''
          },
          {
            name: 'Content-Type',
            in: 'header',
            required: true,
            type: 'string',
            description: ''
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/ReportAnArticleResponse'
            },
            examples: {
              'application/json': {
                message: 'Your report has been registered'
              }
            },
            headers: {}
          }
        }
      }
    },
    '/articles/:slug': {
      get: {
        description: '',
        summary: 'Get Article by slug',
        operationId: 'ArticlesSlugForArticleGet',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/GetArticlebyslugResponse'
            },
            examples: {
              'application/json': {
                title: 'How to be a developer',
                body: 'To be a developer you have to learn to think and to code',
                description: 'I want to be a developer',
                slug: 'how-to-be-a-developer-blakelively',
                rating: null,
                createdAt: '2019-02-01T16:45:36.406Z',
                readTime: 1,
                author: {
                  username: 'blakelively',
                  bio: null,
                  image: null
                }
              }
            },
            headers: {}
          }
        }
      }
    },
    '/articles/bookmarks/:slug': {
      post: {
        description: '',
        summary: 'Bookmark an Article',
        operationId: 'ArticlesBookmarksHowToBeADeveloperBlakelivelyPost',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          201: {
            description: '',
            schema: {
              type: 'string'
            },
            examples: {
              'text/plain': ' Created'
            },
            headers: {}
          }
        }
      },
      patch: {
        description: '',
        summary: 'Remove bookmark from an Article',
        operationId: 'ArticlesBookmarksHowToBeADeveloperBlakelivelyPatch',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              type: 'string'
            },
            examples: {
              'text/plain': 'OK'
            },
            headers: {}
          }
        }
      }
    },
    '/articles/bookmarks': {
      get: {
        description: '',
        summary: 'Get All bookmark',
        operationId: 'ArticlesBookmarksGet',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            examples: {
              'text/plain': []
            },
            headers: {}
          }
        }
      }
    },
    '/articles/:slug/comments': {
      post: {
        description: '',
        summary: 'Comment on an Article',
        operationId: 'ArticlesHowToBeADeveloperBlakelivelyCommentsPost',
        produces: [
          'application/json'
        ],
        consumes: [
          'application/x-www-form-urlencoded'
        ],
        parameters: [
          {
            name: 'comment',
            in: 'formData',
            required: true,
            type: 'string',
            description: ''
          },
          {
            name: 'Content-Type',
            in: 'header',
            required: true,
            type: 'string',
            description: ''
          }
        ],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          201: {
            description: '',
            schema: {
              $ref: '#/definitions/CommentonanArticleResponse'
            },
            examples: {
              'application/json': {
                Comment: 'Wonderfull article',
                ArticleId: 'dfgdfjfkirirytu78869af',
                userId: 'gdhtrutogjkblkdbsfgjj'
              }
            },
            headers: {}
          }
        }
      }
    },
    '/articles/:slug/comment': {
      patch: {
        description: '',
        summary: 'Edit a comment',
        operationId: 'ArticlesHowToBeADeveloperBlakelivelyCommentPatch',
        produces: [
          'application/json'
        ],
        consumes: [
          'application/x-www-form-urlencoded'
        ],
        parameters: [
          {
            name: 'comment',
            in: 'formData',
            required: true,
            type: 'string',
            description: ''
          },
          {
            name: 'Content-Type',
            in: 'header',
            required: true,
            type: 'string',
            description: ''
          }
        ],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/EditacommentResponse'
            },
            examples: {
              'application/json': {
                message: 'wonderful Article'
              }
            },
            headers: {}
          }
        }
      }
    },
    '/articles/:slug/comments/:id': {
      delete: {
        description: '',
        summary: 'Delete A comment',
        operationId: 'ArticlesHowToBeADeveloperBlakelivelyCommentsTyeufhdj6475883gdtgryDelete',
        produces: [
          'application/json'
        ],
        parameters: [],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/DeleteAcommentResponse'
            },
            examples: {
              'application/json': {
                message: 'Comment deleted successfully'
              }
            },
            headers: {}
          }
        }
      }
    },
    '/articles/rating/:slug': {
      patch: {
        description: '',
        summary: 'Rate An Article',
        operationId: 'ArticlesRatingHowToBeADeveloperBlakelivelyPatch',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/RateAnArticleResponse'
            },
            examples: {
              'application/json': {
                error: 'Only mentors can rate articles'
              }
            },
            headers: {}
          }
        }
      }
    },
    '/articles/:slug/like': {
      patch: {
        description: '',
        summary: 'Like an article',
        operationId: 'ArticlesHowToBeADeveloperBlakelivelyLikePatch',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              type: 'string'
            },
            examples: {
              'text/plain': 'OK'
            },
            headers: {}
          }
        }
      }
    },
    '/articles/:slug/dislike': {
      patch: {
        description: '',
        summary: 'Dislike An Article',
        operationId: 'ArticlesHowToBeADeveloperBlakelivelyDislikePatch',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              type: 'string'
            },
            examples: {
              'text/plain': 'OK'
            },
            headers: {}
          }
        }
      }
    },
    '/articles/:slug/cancelReaction': {
      patch: {
        description: '',
        summary: 'Cancel Reaction On an Article',
        operationId: 'ArticlesHowToBeADeveloperBlakelivelyCancelReactionPatch',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              type: 'string'
            },
            examples: {
              'text/plain': 'OK'
            },
            headers: {}
          }
        }
      }
    },
    '/articles/:slug/comments/id/like': {
      post: {
        description: '',
        summary: 'Like A comment',
        operationId: 'ArticlesHowToBeADeveloperBlakelivelyComments55EWRFFDFR34567LikePost',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          201: {
            description: '',
            schema: {
              type: 'string'
            },
            examples: {
              'text/plain': 'Created'
            },
            headers: {}
          }
        }
      }
    },
    '/articles/:slug/comments/:id/dislike': {
      patch: {
        description: '',
        summary: 'Dislike A comment',
        operationId: 'ArticlesHowToBeADeveloperBlakelivelyComments55EWRFFDFR34567DislikePatch',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              type: 'string'
            },
            examples: {
              'text/plain': 'OK'
            },
            headers: {}
          }
        }
      }
    },
    '/articles/:categories': {
      get: {
        description: '',
        summary: 'Get Article By Category',
        operationId: 'ArticlesCategoriesGet',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/GetArticleByCategoryResponse'
            },
            examples: {
              'application/json': {
                articles: [
                  {
                    author: 'blakelively',
                    slug: 'how-to-be-a-developer-blakelively',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'How to be a developer',
                    description: 'I want to be a developer',
                    category: 'Science',
                    body: 'To be a developer you have to learn to think and to code',
                    readTime: 1,
                    createdOn: '1 February 2019, 4:36PM',
                    modifiedOn: '1 February 2019, 4:36PM'
                  },
                  {
                    author: 'Philip123',
                    slug: 'easy-way-to-divide-numbers-Philip123',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'Easy way to divide numbers',
                    description: 'Skill Session',
                    category: 'Mathematics',
                    body: 'Have you ever Wondered',
                    readTime: 1,
                    createdOn: '1 February 2019, 12:22PM',
                    modifiedOn: '1 February 2019, 12:22PM'
                  },
                  {
                    author: 'Philip123',
                    slug: 'easy-way-to-divide-numberst-Philip123',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'Easy way to divide numberst',
                    description: 'Skill Session',
                    category: 'Mathematics',
                    body: 'Have you ever Wondered',
                    readTime: 1,
                    createdOn: '1 February 2019, 12:08PM',
                    modifiedOn: '1 February 2019, 12:08PM'
                  },
                  {
                    author: 'Philip123',
                    slug: 'how-to-calculate-fast-Philip123',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'How to calculate fast',
                    description: 'Skill Session',
                    category: 'Mathematics',
                    body: 'Have you ever Wondered',
                    readTime: 1,
                    createdOn: '1 February 2019, 11:58AM',
                    modifiedOn: '1 February 2019, 11:58AM'
                  },
                  {
                    author: 'usernametwo',
                    slug: 'testing-for-efficiency-usernametwo',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'Testing for efficiency',
                    description: 'testing too',
                    category: 'Arts',
                    body: 'tesing',
                    readTime: 1,
                    createdOn: '1 February 2019, 9:25AM',
                    modifiedOn: '1 February 2019, 9:25AM'
                  },
                  {
                    author: 'usernameone',
                    slug: 'the-story-of-a-young-lady-usernameone',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'The story of a young lady',
                    description: 'to take care of',
                    category: 'Arts',
                    body: 'who needs a',
                    readTime: 1,
                    createdOn: '1 February 2019, 9:27AM',
                    modifiedOn: '1 February 2019, 9:27AM'
                  },
                  {
                    author: 'usernameone',
                    slug: 'the-story-of-a-young-girl-usernameone',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'The story of a young girl',
                    description: 'to take care of',
                    category: 'Arts',
                    body: 'who needs a',
                    readTime: 1,
                    createdOn: '1 February 2019, 9:48AM',
                    modifiedOn: '1 February 2019, 9:48AM'
                  },
                  {
                    author: 'SteveCage',
                    slug: 'bone-talks-and-harmopuhkktettredgoredfgffdf-SteveCage',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'bone talks and harmopuhkktettredgoredfgffdf',
                    description: 'I am a chosen onet',
                    category: 'Arts',
                    body: 'this is all about bucky roberttf',
                    readTime: 1,
                    createdOn: '1 February 2019, 9:01AM',
                    modifiedOn: '1 February 2019, 9:01AM'
                  },
                  {
                    author: 'SteveCage',
                    slug: 'bone-talks-and-harmopuhkktettredgoredfgff-SteveCage',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'bone talks and harmopuhkktettredgoredfgff',
                    description: 'I am a chosen onet',
                    category: 'Arts',
                    body: 'this is all about bucky roberttf',
                    readTime: 1,
                    createdOn: '1 February 2019, 9:42AM',
                    modifiedOn: '1 February 2019, 9:42AM'
                  },
                  {
                    author: 'SteveCage',
                    slug: 'bone-talks-and-harmopuhkktettredgoredfg-SteveCage',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'bone talks and harmopuhkktettredgoredfg',
                    description: 'I am a chosen onet',
                    category: 'Arts',
                    body: 'this is all about bucky roberttf',
                    readTime: 1,
                    createdOn: '1 February 2019, 9:20AM',
                    modifiedOn: '1 February 2019, 9:20AM'
                  },
                  {
                    author: 'SteveCage',
                    slug: 'bone-talks-and-harmopuhkktettredgoredf-SteveCage',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'bone talks and harmopuhkktettredgoredf',
                    description: 'I am a chosen onet',
                    category: 'Arts',
                    body: 'this is all about bucky roberttf',
                    readTime: 1,
                    createdOn: '1 February 2019, 9:05AM',
                    modifiedOn: '1 February 2019, 9:05AM'
                  },
                  {
                    author: 'SteveCage',
                    slug: 'bone-talks-and-harmopuhkktettredgored-SteveCage',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'bone talks and harmopuhkktettredgored',
                    description: 'I am a chosen onet',
                    category: 'Arts',
                    body: 'this is all about bucky roberttf',
                    readTime: 1,
                    createdOn: '1 February 2019, 9:18AM',
                    modifiedOn: '1 February 2019, 9:18AM'
                  },
                  {
                    author: 'SteveCage',
                    slug: 'bone-talks-and-harmopuhkktettredgo-SteveCage',
                    firstName: null,
                    lastName: null,
                    bio: null,
                    imageUrl: null,
                    title: 'bone talks and harmopuhkktettredgo',
                    description: 'I am a chosen onet',
                    category: 'Arts',
                    body: 'this is all about bucky roberttf',
                    readTime: 1,
                    createdOn: '1 February 2019, 9:40AM',
                    modifiedOn: '1 February 2019, 9:40AM'
                  }
                ],
                count: 13,
                page: 1
              }
            },
            headers: {}
          }
        }
      }
    },
    '/notifications': {
      get: {
        description: '',
        summary: 'Get All Notifications from your followers',
        operationId: 'NotificationsGet',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/GetAllNotificationsfromyourfollowersResponse'
              }
            },
            examples: {
              'application/json': [
                {
                  body: 'newUsername just commented on your article: How to be a developer',
                  notficationId: 'ea17bf8c-4066-47c6-8191-b2be236a68d9',
                  status: 'unread'
                }
              ]
            },
            headers: {}
          }
        }
      }
    },
    '/notifications/:id/mark-as-read': {
      patch: {
        description: '',
        summary: 'Mark Notification as read',
        operationId: 'NotificationsEa17bf8c406647c68191B2be236a68d9MarkAsReadPatch',
        produces: [
          'application/json'
        ],
        parameters: [],
        security: [
          {
            UserToken: []
          }
        ],
        responses: {
          200: {
            description: '',
            schema: {
              $ref: '#/definitions/MarkNotificationasreadResponse'
            },
            examples: {
              'application/json': {
                status: 'read',
                createdAt: '2019-02-01T17:41:20.769Z'
              }
            },
            headers: {}
          }
        }
      }
    }
  },
  definitions: {
    SignupResponse: {
      title: 'SignupResponse',
      example: {
        message: 'An email has been sent to your email address',
        username: 'blakelively',
        email: 'blake2019@gmail.com'
      },
      type: 'object',
      properties: {
        message: {
          type: 'string'
        },
        username: {
          type: 'string'
        },
        email: {
          type: 'string'
        }
      },
      required: [
        'message',
        'username',
        'email'
      ]
    },
    SignInResponse: {
      title: 'SignInResponse',
      example: {
        message: 'Login was successful',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNGFiNDlkLTg5YWEtNGJiNC04NzFhLTExZDZlODc0YTMyYyIsImlzTWVudG9yIjpmYWxzZSwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU0OTAzMjI5NiwiZXhwIjoxNTQ5MjkxNDk2fQ.2VA5lZuXXrtssd6N7Ex0JPYX8lCgXqF6K6JfPZaEigU',
        notifications: []
      },
      type: 'object',
      properties: {
        message: {
          type: 'string'
        },
        token: {
          type: 'string'
        },
        notifications: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      },
      required: [
        'message',
        'token',
        'notifications'
      ]
    },
    GetcurrentUserResponse: {
      title: 'GetcurrentUserResponse',
      example: {
        username: 'blakelively',
        email: 'blake2019@gmail.com',
        isMentor: false,
        profile: {
          firstName: null,
          lastName: null,
          bio: null,
          imageUrl: null
        }
      },
      type: 'object',
      properties: {
        username: {
          type: 'string'
        },
        email: {
          type: 'string'
        },
        isMentor: {
          type: 'boolean'
        },
        profile: {
          $ref: '#/definitions/Profile'
        }
      },
      required: [
        'username',
        'email',
        'isMentor',
        'profile'
      ]
    },
    Profile: {
      title: 'Profile',
      type: 'object',
      properties: {
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        bio: {
          type: 'string'
        },
        imageUrl: {
          type: 'string'
        }
      }
    },
    getAuthorsResponse: {
      title: 'getAuthorsResponse',
      example: {
        author: 'SteveCage',
        firstName: null,
        lastName: null,
        bio: null,
        image: null,
        interests: null
      },
      type: 'object',
      properties: {
        author: {
          example: 'SteveCage',
          type: 'string'
        },
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        bio: {
          type: 'string'
        },
        image: {
          type: 'string'
        },
        interests: {
          type: 'string'
        }
      },
      required: [
        'author'
      ]
    },
    ResetPasswordResponse: {
      title: 'ResetPasswordResponse',
      example: {
        message: 'A reset link has been sent to your mail'
      },
      type: 'object',
      properties: {
        message: {
          type: 'string'
        }
      },
      required: [
        'message'
      ]
    },
    CreatearequestResponse: {
      title: 'CreatearequestResponse',
      example: {
        message: 'Your request to be a mentor has been sent',
        id: 'a42dfab2-9d63-4a83-a5ea-bd72151ce00f'
      },
      type: 'object',
      properties: {
        message: {
          type: 'string'
        },
        id: {
          type: 'string'
        }
      },
      required: [
        'message',
        'id'
      ]
    },
    'ActivateUseraccount,whenlinkisclickedResponse': {
      title: 'ActivateUseraccount,whenlinkisclickedResponse',
      example: {
        message: 'Your account has been activated. Login to continue using learnground'
      },
      type: 'object',
      properties: {
        message: {
          type: 'string'
        }
      },
      required: [
        'message'
      ]
    },
    FollowaUserResponse: {
      title: 'FollowaUserResponse',
      example: {
        message: 'You are now following sarahaudud',
        profile: {
          username: 'sarahaudud',
          firstName: null,
          lastName: null,
          bio: null
        }
      },
      type: 'object',
      properties: {
        message: {
          type: 'string'
        },
        profile: {
          $ref: '#/definitions/Profile1'
        }
      },
      required: [
        'message',
        'profile'
      ]
    },
    Profile1: {
      title: 'Profile1',
      type: 'object',
      properties: {
        username: {
          type: 'string'
        },
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        bio: {
          type: 'string'
        }
      },
      required: [
        'username'
      ]
    },
    getallthosewhomyoufollowResponse: {
      title: 'getallthosewhomyoufollowResponse',
      example: {
        following: [
          {
            username: 'sarahaudud',
            lastName: null,
            firstName: null,
            bio: null,
            interests: null,
            imageUrl: null
          }
        ],
        count: 1
      },
      type: 'object',
      properties: {
        following: {
          type: 'array',
          items: {
            $ref: '#/definitions/Following'
          }
        },
        count: {
          type: 'integer',
          format: 'int32'
        }
      },
      required: [
        'following',
        'count'
      ]
    },
    Following: {
      title: 'Following',
      type: 'object',
      properties: {
        username: {
          example: 'sarahaudud',
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        firstName: {
          type: 'string'
        },
        bio: {
          type: 'string'
        },
        interests: {
          type: 'string'
        },
        imageUrl: {
          type: 'string'
        }
      },
      required: [
        'username'
      ]
    },
    GetallYourfollowersResponse: {
      title: 'GetallYourfollowersResponse',
      example: {
        followers: [
          {
            username: 'blakelively',
            lastName: null,
            firstName: null,
            bio: null,
            interests: null,
            imageUrl: null
          }
        ],
        count: 1
      },
      type: 'object',
      properties: {
        followers: {
          type: 'array',
          items: {
            $ref: '#/definitions/Follower'
          }
        },
        count: {
          type: 'integer',
          format: 'int32'
        }
      },
      required: [
        'followers',
        'count'
      ]
    },
    Follower: {
      title: 'Follower',
      type: 'object',
      properties: {
        username: {
          example: 'blakelively',
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        firstName: {
          type: 'string'
        },
        bio: {
          type: 'string'
        },
        interests: {
          type: 'string'
        },
        imageUrl: {
          type: 'string'
        }
      },
      required: [
        'username'
      ]
    },
    UpdateauserResponse: {
      title: 'UpdateauserResponse',
      example: {
        username: 'newUsername',
        email: 'newemail@gmail.com',
        isMentor: false,
        message: 'User Updated Successfully'
      },
      type: 'object',
      properties: {
        username: {
          type: 'string'
        },
        email: {
          type: 'string'
        },
        isMentor: {
          type: 'boolean'
        },
        message: {
          type: 'string'
        }
      },
      required: [
        'username',
        'email',
        'isMentor',
        'message'
      ]
    },
    CreateAnArticleResponse: {
      title: 'CreateAnArticleResponse',
      example: {
        title: 'How to be a developer',
        body: 'To be a developer you have to learn to think and to code',
        description: 'I want to be a developer',
        slug: 'how-to-be-a-developer-blakelively',
        rating: null,
        createdAt: '2019-02-01T16:45:36.406Z',
        readTime: 1,
        author: {
          username: 'blakelively',
          bio: null,
          image: null
        }
      },
      type: 'object',
      properties: {
        title: {
          type: 'string'
        },
        body: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        slug: {
          type: 'string'
        },
        rating: {
          type: 'string'
        },
        createdAt: {
          type: 'string'
        },
        readTime: {
          type: 'integer',
          format: 'int32'
        },
        author: {
          $ref: '#/definitions/Author'
        }
      },
      required: [
        'title',
        'body',
        'description',
        'slug',
        'createdAt',
        'readTime',
        'author'
      ]
    },
    Author: {
      title: 'Author',
      type: 'object',
      properties: {
        username: {
          type: 'string'
        },
        bio: {
          type: 'string'
        },
        image: {
          type: 'string'
        }
      },
      required: [
        'username'
      ]
    },
    ReportAnArticleResponse: {
      title: 'ReportAnArticleResponse',
      example: {
        message: 'Your report has been registered'
      },
      type: 'object',
      properties: {
        message: {
          type: 'string'
        }
      },
      required: [
        'message'
      ]
    },
    GetArticlesResponse: {
      title: 'GetArticlesResponse',
      example: {
        articles: [
          {
            author: 'blakelively',
            slug: 'how-to-be-a-developer-blakelively',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'How to be a developer',
            description: 'I want to be a developer',
            category: 'Science',
            body: 'To be a developer you have to learn to think and to code',
            readTime: 1,
            createdOn: '1 February 2019, 4:36PM',
            modifiedOn: '1 February 2019, 4:36PM'
          },
          {
            author: 'Philip123',
            slug: 'easy-way-to-divide-numbers-Philip123',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'Easy way to divide numbers',
            description: 'Skill Session',
            category: 'Mathematics',
            body: 'Have you ever Wondered',
            readTime: 1,
            createdOn: '1 February 2019, 12:22PM',
            modifiedOn: '1 February 2019, 12:22PM'
          },
          {
            author: 'Philip123',
            slug: 'easy-way-to-divide-numberst-Philip123',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'Easy way to divide numberst',
            description: 'Skill Session',
            category: 'Mathematics',
            body: 'Have you ever Wondered',
            readTime: 1,
            createdOn: '1 February 2019, 12:08PM',
            modifiedOn: '1 February 2019, 12:08PM'
          },
          {
            author: 'Philip123',
            slug: 'how-to-calculate-fast-Philip123',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'How to calculate fast',
            description: 'Skill Session',
            category: 'Mathematics',
            body: 'Have you ever Wondered',
            readTime: 1,
            createdOn: '1 February 2019, 11:58AM',
            modifiedOn: '1 February 2019, 11:58AM'
          },
          {
            author: 'usernametwo',
            slug: 'testing-for-efficiency-usernametwo',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'Testing for efficiency',
            description: 'testing too',
            category: 'Arts',
            body: 'tesing',
            readTime: 1,
            createdOn: '1 February 2019, 9:25AM',
            modifiedOn: '1 February 2019, 9:25AM'
          },
          {
            author: 'usernameone',
            slug: 'the-story-of-a-young-lady-usernameone',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'The story of a young lady',
            description: 'to take care of',
            category: 'Arts',
            body: 'who needs a',
            readTime: 1,
            createdOn: '1 February 2019, 9:27AM',
            modifiedOn: '1 February 2019, 9:27AM'
          },
          {
            author: 'usernameone',
            slug: 'the-story-of-a-young-girl-usernameone',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'The story of a young girl',
            description: 'to take care of',
            category: 'Arts',
            body: 'who needs a',
            readTime: 1,
            createdOn: '1 February 2019, 9:48AM',
            modifiedOn: '1 February 2019, 9:48AM'
          },
          {
            author: 'SteveCage',
            slug: 'bone-talks-and-harmopuhkktettredgoredfgffdf-SteveCage',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'bone talks and harmopuhkktettredgoredfgffdf',
            description: 'I am a chosen onet',
            category: 'Arts',
            body: 'this is all about bucky roberttf',
            readTime: 1,
            createdOn: '1 February 2019, 9:01AM',
            modifiedOn: '1 February 2019, 9:01AM'
          },
          {
            author: 'SteveCage',
            slug: 'bone-talks-and-harmopuhkktettredgoredfgff-SteveCage',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'bone talks and harmopuhkktettredgoredfgff',
            description: 'I am a chosen onet',
            category: 'Arts',
            body: 'this is all about bucky roberttf',
            readTime: 1,
            createdOn: '1 February 2019, 9:42AM',
            modifiedOn: '1 February 2019, 9:42AM'
          },
          {
            author: 'SteveCage',
            slug: 'bone-talks-and-harmopuhkktettredgoredfg-SteveCage',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'bone talks and harmopuhkktettredgoredfg',
            description: 'I am a chosen onet',
            category: 'Arts',
            body: 'this is all about bucky roberttf',
            readTime: 1,
            createdOn: '1 February 2019, 9:20AM',
            modifiedOn: '1 February 2019, 9:20AM'
          },
          {
            author: 'SteveCage',
            slug: 'bone-talks-and-harmopuhkktettredgoredf-SteveCage',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'bone talks and harmopuhkktettredgoredf',
            description: 'I am a chosen onet',
            category: 'Arts',
            body: 'this is all about bucky roberttf',
            readTime: 1,
            createdOn: '1 February 2019, 9:05AM',
            modifiedOn: '1 February 2019, 9:05AM'
          },
          {
            author: 'SteveCage',
            slug: 'bone-talks-and-harmopuhkktettredgored-SteveCage',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'bone talks and harmopuhkktettredgored',
            description: 'I am a chosen onet',
            category: 'Arts',
            body: 'this is all about bucky roberttf',
            readTime: 1,
            createdOn: '1 February 2019, 9:18AM',
            modifiedOn: '1 February 2019, 9:18AM'
          },
          {
            author: 'SteveCage',
            slug: 'bone-talks-and-harmopuhkktettredgo-SteveCage',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'bone talks and harmopuhkktettredgo',
            description: 'I am a chosen onet',
            category: 'Arts',
            body: 'this is all about bucky roberttf',
            readTime: 1,
            createdOn: '1 February 2019, 9:40AM',
            modifiedOn: '1 February 2019, 9:40AM'
          }
        ],
        count: 13,
        page: 1
      },
      type: 'object',
      properties: {
        articles: {
          type: 'array',
          items: {
            $ref: '#/definitions/Article'
          }
        },
        count: {
          type: 'integer',
          format: 'int32'
        },
        page: {
          type: 'integer',
          format: 'int32'
        }
      },
      required: [
        'articles',
        'count',
        'page'
      ]
    },
    Article: {
      title: 'Article',
      type: 'object',
      properties: {
        author: {
          example: 'blakelively',
          type: 'string'
        },
        slug: {
          example: 'how-to-be-a-developer-blakelively',
          type: 'string'
        },
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        bio: {
          type: 'string'
        },
        imageUrl: {
          type: 'string'
        },
        title: {
          example: 'How to be a developer',
          type: 'string'
        },
        description: {
          example: 'I want to be a developer',
          type: 'string'
        },
        category: {
          example: 'Science',
          type: 'string'
        },
        body: {
          example: 'To be a developer you have to learn to think and to code',
          type: 'string'
        },
        readTime: {
          example: 1,
          type: 'integer',
          format: 'int32'
        },
        createdOn: {
          example: '1 February 2019, 4:36PM',
          type: 'string'
        },
        modifiedOn: {
          example: '1 February 2019, 4:36PM',
          type: 'string'
        }
      },
      required: [
        'author',
        'slug',
        'title',
        'description',
        'category',
        'body',
        'readTime',
        'createdOn',
        'modifiedOn'
      ]
    },
    GetArticlebyslugResponse: {
      title: 'GetArticlebyslugResponse',
      example: {
        title: 'How to be a developer',
        body: 'To be a developer you have to learn to think and to code',
        description: 'I want to be a developer',
        slug: 'how-to-be-a-developer-blakelively',
        rating: null,
        createdAt: '2019-02-01T16:45:36.406Z',
        readTime: 1,
        author: {
          username: 'blakelively',
          bio: null,
          image: null
        }
      },
      type: 'object',
      properties: {
        title: {
          type: 'string'
        },
        body: {
          type: 'string'
        },
        description: {
          type: 'string'
        },
        slug: {
          type: 'string'
        },
        rating: {
          type: 'string'
        },
        createdAt: {
          type: 'string'
        },
        readTime: {
          type: 'integer',
          format: 'int32'
        },
        author: {
          $ref: '#/definitions/Author'
        }
      },
      required: [
        'title',
        'body',
        'description',
        'slug',
        'createdAt',
        'readTime',
        'author'
      ]
    },
    CommentonanArticleResponse: {
      title: 'CommentonanArticleResponse',
      example: {
        Comment: 'Wonderfull article',
        ArticleId: 'dfgdfjfkirirytu78869af',
        userId: 'gdhtrutogjkblkdbsfgjj'
      },
      type: 'object',
      properties: {
        Comment: {
          type: 'string'
        },
        ArticleId: {
          type: 'string'
        },
        userId: {
          type: 'string'
        }
      },
      required: [
        'Comment',
        'ArticleId',
        'userId'
      ]
    },
    EditacommentResponse: {
      title: 'EditacommentResponse',
      example: {
        message: 'wonderful Article'
      },
      type: 'object',
      properties: {
        message: {
          type: 'string'
        }
      },
      required: [
        'message'
      ]
    },
    DeleteAcommentResponse: {
      title: 'DeleteAcommentResponse',
      example: {
        message: 'Comment deleted successfully'
      },
      type: 'object',
      properties: {
        message: {
          type: 'string'
        }
      },
      required: [
        'message'
      ]
    },
    RateAnArticleResponse: {
      title: 'RateAnArticleResponse',
      example: {
        error: 'Only mentors can rate articles'
      },
      type: 'object',
      properties: {
        error: {
          type: 'string'
        }
      },
      required: [
        'error'
      ]
    },
    GetArticleByCategoryResponse: {
      title: 'GetArticleByCategoryResponse',
      example: {
        articles: [
          {
            author: 'blakelively',
            slug: 'how-to-be-a-developer-blakelively',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'How to be a developer',
            description: 'I want to be a developer',
            category: 'Science',
            body: 'To be a developer you have to learn to think and to code',
            readTime: 1,
            createdOn: '1 February 2019, 4:36PM',
            modifiedOn: '1 February 2019, 4:36PM'
          },
          {
            author: 'Philip123',
            slug: 'easy-way-to-divide-numbers-Philip123',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'Easy way to divide numbers',
            description: 'Skill Session',
            category: 'Mathematics',
            body: 'Have you ever Wondered',
            readTime: 1,
            createdOn: '1 February 2019, 12:22PM',
            modifiedOn: '1 February 2019, 12:22PM'
          },
          {
            author: 'Philip123',
            slug: 'easy-way-to-divide-numberst-Philip123',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'Easy way to divide numberst',
            description: 'Skill Session',
            category: 'Mathematics',
            body: 'Have you ever Wondered',
            readTime: 1,
            createdOn: '1 February 2019, 12:08PM',
            modifiedOn: '1 February 2019, 12:08PM'
          },
          {
            author: 'Philip123',
            slug: 'how-to-calculate-fast-Philip123',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'How to calculate fast',
            description: 'Skill Session',
            category: 'Mathematics',
            body: 'Have you ever Wondered',
            readTime: 1,
            createdOn: '1 February 2019, 11:58AM',
            modifiedOn: '1 February 2019, 11:58AM'
          },
          {
            author: 'usernametwo',
            slug: 'testing-for-efficiency-usernametwo',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'Testing for efficiency',
            description: 'testing too',
            category: 'Arts',
            body: 'tesing',
            readTime: 1,
            createdOn: '1 February 2019, 9:25AM',
            modifiedOn: '1 February 2019, 9:25AM'
          },
          {
            author: 'usernameone',
            slug: 'the-story-of-a-young-lady-usernameone',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'The story of a young lady',
            description: 'to take care of',
            category: 'Arts',
            body: 'who needs a',
            readTime: 1,
            createdOn: '1 February 2019, 9:27AM',
            modifiedOn: '1 February 2019, 9:27AM'
          },
          {
            author: 'usernameone',
            slug: 'the-story-of-a-young-girl-usernameone',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'The story of a young girl',
            description: 'to take care of',
            category: 'Arts',
            body: 'who needs a',
            readTime: 1,
            createdOn: '1 February 2019, 9:48AM',
            modifiedOn: '1 February 2019, 9:48AM'
          },
          {
            author: 'SteveCage',
            slug: 'bone-talks-and-harmopuhkktettredgoredfgffdf-SteveCage',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'bone talks and harmopuhkktettredgoredfgffdf',
            description: 'I am a chosen onet',
            category: 'Arts',
            body: 'this is all about bucky roberttf',
            readTime: 1,
            createdOn: '1 February 2019, 9:01AM',
            modifiedOn: '1 February 2019, 9:01AM'
          },
          {
            author: 'SteveCage',
            slug: 'bone-talks-and-harmopuhkktettredgoredfgff-SteveCage',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'bone talks and harmopuhkktettredgoredfgff',
            description: 'I am a chosen onet',
            category: 'Arts',
            body: 'this is all about bucky roberttf',
            readTime: 1,
            createdOn: '1 February 2019, 9:42AM',
            modifiedOn: '1 February 2019, 9:42AM'
          },
          {
            author: 'SteveCage',
            slug: 'bone-talks-and-harmopuhkktettredgoredfg-SteveCage',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'bone talks and harmopuhkktettredgoredfg',
            description: 'I am a chosen onet',
            category: 'Arts',
            body: 'this is all about bucky roberttf',
            readTime: 1,
            createdOn: '1 February 2019, 9:20AM',
            modifiedOn: '1 February 2019, 9:20AM'
          },
          {
            author: 'SteveCage',
            slug: 'bone-talks-and-harmopuhkktettredgoredf-SteveCage',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'bone talks and harmopuhkktettredgoredf',
            description: 'I am a chosen onet',
            category: 'Arts',
            body: 'this is all about bucky roberttf',
            readTime: 1,
            createdOn: '1 February 2019, 9:05AM',
            modifiedOn: '1 February 2019, 9:05AM'
          },
          {
            author: 'SteveCage',
            slug: 'bone-talks-and-harmopuhkktettredgored-SteveCage',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'bone talks and harmopuhkktettredgored',
            description: 'I am a chosen onet',
            category: 'Arts',
            body: 'this is all about bucky roberttf',
            readTime: 1,
            createdOn: '1 February 2019, 9:18AM',
            modifiedOn: '1 February 2019, 9:18AM'
          },
          {
            author: 'SteveCage',
            slug: 'bone-talks-and-harmopuhkktettredgo-SteveCage',
            firstName: null,
            lastName: null,
            bio: null,
            imageUrl: null,
            title: 'bone talks and harmopuhkktettredgo',
            description: 'I am a chosen onet',
            category: 'Arts',
            body: 'this is all about bucky roberttf',
            readTime: 1,
            createdOn: '1 February 2019, 9:40AM',
            modifiedOn: '1 February 2019, 9:40AM'
          }
        ],
        count: 13,
        page: 1
      },
      type: 'object',
      properties: {
        articles: {
          type: 'array',
          items: {
            $ref: '#/definitions/Article'
          }
        },
        count: {
          type: 'integer',
          format: 'int32'
        },
        page: {
          type: 'integer',
          format: 'int32'
        }
      },
      required: [
        'articles',
        'count',
        'page'
      ]
    },
    GetAllNotificationsfromyourfollowersResponse: {
      title: 'GetAllNotificationsfromyourfollowersResponse',
      example: {
        body: 'newUsername just commented on your article: How to be a developer',
        notficationId: 'ea17bf8c-4066-47c6-8191-b2be236a68d9',
        status: 'unread'
      },
      type: 'object',
      properties: {
        body: {
          example: 'newUsername just commented on your article: How to be a developer',
          type: 'string'
        },
        notficationId: {
          example: 'ea17bf8c-4066-47c6-8191-b2be236a68d9',
          type: 'string'
        },
        status: {
          example: 'unread',
          type: 'string'
        }
      },
      required: [
        'body',
        'notficationId',
        'status'
      ]
    },
    MarkNotificationasreadResponse: {
      title: 'MarkNotificationasreadResponse',
      example: {
        status: 'read',
        createdAt: '2019-02-01T17:41:20.769Z'
      },
      type: 'object',
      properties: {
        status: {
          type: 'string'
        },
        createdAt: {
          type: 'string'
        }
      },
      required: [
        'status',
        'createdAt'
      ]
    }
  },
  tags: []
};
