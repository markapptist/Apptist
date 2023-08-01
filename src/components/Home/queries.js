export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        imageUrl
        coverVideoUrl
        title
        description
        amount
        sales
        instructor {
          id
          username
          imageUrl
        }
        createdAt
        updatedAt
        instructorPublishedCoursesId
        owner
      }
      nextToken
    }
  }
`;