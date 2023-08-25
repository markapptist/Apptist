/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInstructor = /* GraphQL */ `
  query GetInstructor($id: ID!) {
    getInstructor(id: $id) {
      id
      username
      imageUrl
      email
      newStudentEnrollments
      overallCoursesRating
      revenueThisMonth
      publishedCourses {
        items {
          id
          imageUrl
          coverVideoUrl
          title
          description
          amount
          sales
          createdAt
          updatedAt
          instructorPublishedCoursesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listInstructors = /* GraphQL */ `
  query ListInstructors(
    $filter: ModelInstructorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInstructors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        imageUrl
        email
        newStudentEnrollments
        overallCoursesRating
        revenueThisMonth
        publishedCourses {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      username
      imageUrl
      email
      courses {
        items {
          id
          studentId
          courseId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      reviewsProvided {
        items {
          id
          review
          rating
          createdAt
          updatedAt
          studentReviewsProvidedId
          courseReviewsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        imageUrl
        email
        courses {
          nextToken
        }
        reviewsProvided {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
        email
        newStudentEnrollments
        overallCoursesRating
        revenueThisMonth
        publishedCourses {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      sections {
        items {
          id
          sectionNumber
          title
          createdAt
          updatedAt
          courseSectionsId
          owner
        }
        nextToken
      }
      students {
        items {
          id
          studentId
          courseId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      reviews {
        items {
          id
          review
          rating
          createdAt
          updatedAt
          studentReviewsProvidedId
          courseReviewsId
          owner
        }
        nextToken
      }
      tags {
        items {
          id
          courseId
          tagsId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      instructorPublishedCoursesId
      owner
    }
  }
`;
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
          email
          newStudentEnrollments
          overallCoursesRating
          revenueThisMonth
          createdAt
          updatedAt
          owner
        }
        sections {
          nextToken
        }
        students {
          nextToken
        }
        reviews {
          nextToken
        }
        tags {
          nextToken
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
export const getCourseSection = /* GraphQL */ `
  query GetCourseSection($id: ID!) {
    getCourseSection(id: $id) {
      id
      sectionNumber
      title
      lessons {
        items {
          id
          title
          videoUrl
          description
          createdAt
          updatedAt
          courseSectionLessonsId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      courseSectionsId
      owner
    }
  }
`;
export const listCourseSections = /* GraphQL */ `
  query ListCourseSections(
    $filter: ModelCourseSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sectionNumber
        title
        lessons {
          nextToken
        }
        createdAt
        updatedAt
        courseSectionsId
        owner
      }
      nextToken
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
      id
      title
      videoUrl
      description
      createdAt
      updatedAt
      courseSectionLessonsId
      owner
    }
  }
`;
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        videoUrl
        description
        createdAt
        updatedAt
        courseSectionLessonsId
        owner
      }
      nextToken
    }
  }
`;
export const getReviews = /* GraphQL */ `
  query GetReviews($id: ID!) {
    getReviews(id: $id) {
      id
      review
      rating
      user {
        id
        username
        imageUrl
        email
        courses {
          nextToken
        }
        reviewsProvided {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      studentReviewsProvidedId
      courseReviewsId
      owner
    }
  }
`;
export const listReviews = /* GraphQL */ `
  query ListReviews(
    $filter: ModelReviewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        review
        rating
        user {
          id
          username
          imageUrl
          email
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        studentReviewsProvidedId
        courseReviewsId
        owner
      }
      nextToken
    }
  }
`;
export const getTags = /* GraphQL */ `
  query GetTags($id: ID!) {
    getTags(id: $id) {
      id
      title
      course {
        items {
          id
          courseId
          tagsId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTags = /* GraphQL */ `
  query ListTags(
    $filter: ModelTagsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        course {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getStudentCourse = /* GraphQL */ `
  query GetStudentCourse($id: ID!) {
    getStudentCourse(id: $id) {
      id
      studentId
      courseId
      student {
        id
        username
        imageUrl
        email
        courses {
          nextToken
        }
        reviewsProvided {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      course {
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
          email
          newStudentEnrollments
          overallCoursesRating
          revenueThisMonth
          createdAt
          updatedAt
          owner
        }
        sections {
          nextToken
        }
        students {
          nextToken
        }
        reviews {
          nextToken
        }
        tags {
          nextToken
        }
        createdAt
        updatedAt
        instructorPublishedCoursesId
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listStudentCourses = /* GraphQL */ `
  query ListStudentCourses(
    $filter: ModelStudentCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudentCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        studentId
        courseId
        student {
          id
          username
          imageUrl
          email
          createdAt
          updatedAt
          owner
        }
        course {
          id
          imageUrl
          coverVideoUrl
          title
          description
          amount
          sales
          createdAt
          updatedAt
          instructorPublishedCoursesId
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const studentCoursesByStudentId = /* GraphQL */ `
  query StudentCoursesByStudentId(
    $studentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentCoursesByStudentId(
      studentId: $studentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studentId
        courseId
        student {
          id
          username
          imageUrl
          email
          createdAt
          updatedAt
          owner
        }
        course {
          id
          imageUrl
          coverVideoUrl
          title
          description
          amount
          sales
          createdAt
          updatedAt
          instructorPublishedCoursesId
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const studentCoursesByCourseId = /* GraphQL */ `
  query StudentCoursesByCourseId(
    $courseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelStudentCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    studentCoursesByCourseId(
      courseId: $courseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        studentId
        courseId
        student {
          id
          username
          imageUrl
          email
          createdAt
          updatedAt
          owner
        }
        course {
          id
          imageUrl
          coverVideoUrl
          title
          description
          amount
          sales
          createdAt
          updatedAt
          instructorPublishedCoursesId
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCourseTag = /* GraphQL */ `
  query GetCourseTag($id: ID!) {
    getCourseTag(id: $id) {
      id
      courseId
      tagsId
      course {
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
          email
          newStudentEnrollments
          overallCoursesRating
          revenueThisMonth
          createdAt
          updatedAt
          owner
        }
        sections {
          nextToken
        }
        students {
          nextToken
        }
        reviews {
          nextToken
        }
        tags {
          nextToken
        }
        createdAt
        updatedAt
        instructorPublishedCoursesId
        owner
      }
      tags {
        id
        title
        course {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCourseTags = /* GraphQL */ `
  query ListCourseTags(
    $filter: ModelCourseTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseTags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        courseId
        tagsId
        course {
          id
          imageUrl
          coverVideoUrl
          title
          description
          amount
          sales
          createdAt
          updatedAt
          instructorPublishedCoursesId
          owner
        }
        tags {
          id
          title
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const courseTagsByCourseId = /* GraphQL */ `
  query CourseTagsByCourseId(
    $courseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseTagsByCourseId(
      courseId: $courseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        courseId
        tagsId
        course {
          id
          imageUrl
          coverVideoUrl
          title
          description
          amount
          sales
          createdAt
          updatedAt
          instructorPublishedCoursesId
          owner
        }
        tags {
          id
          title
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const courseTagsByTagsId = /* GraphQL */ `
  query CourseTagsByTagsId(
    $tagsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCourseTagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    courseTagsByTagsId(
      tagsId: $tagsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        courseId
        tagsId
        course {
          id
          imageUrl
          coverVideoUrl
          title
          description
          amount
          sales
          createdAt
          updatedAt
          instructorPublishedCoursesId
          owner
        }
        tags {
          id
          title
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
