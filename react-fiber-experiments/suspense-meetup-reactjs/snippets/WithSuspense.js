import React, { Fragment, Placeholder } from "react";
import PropTypes from "prop-types";
import { createResource } from "react-cache";
import { Link } from "@reach/router";

import { cache } from "../cache";
import { fakeApi } from "../libs/fake-api";

import CourseInfos from "../components/CourseInfos";
import NextLessonDisplay from "../components/NextLessonDisplay";
import ErrorRetry from "../components/ErrorRetry";
import Spinner from "../components/Spinner";

/**
 * Network failure handling - I've tried:
 * - ErrorBoundaries: The first error thrown by the api promise is catched but the ones
 * thrown after by react-cache due to cache miss after trying to remount the node
 * finally bring down the app.
 *
 * For the moment, when I createResource, I return a function that swallows its own errors
 * (by returning promise.catch()) and if an error has occured, the resolved object will
 * contain a attribute "error" with a truthy value.
 *
 * This value is then checked at rendering to choose whether to render data or error.
 */
const CourseResource = createResource(courseId =>
  fakeApi(`/course/${courseId}`).catch(error => ({ error }))
);

const NextLessonResource = createResource(courseId =>
  fakeApi(`/course/${courseId}/nextLesson`).catch(error => ({ error }))
);

const Course = ({ courseId, ...remainingProps }) => {
  NextLessonResource.preload(cache, courseId); // avoid serial requests
  const courseData = CourseResource.read(cache, courseId);
  return courseData && !courseData.error ? (
    <div {...remainingProps}>
      <CourseInfos data={courseData} />
      <Placeholder delayMs={350} fallback={<Spinner />}>
        <NextLesson courseId={courseId} />
      </Placeholder>
      <div>
        <Link to={`../../../regular-rendering/course/${courseId}`}>
          Compare to regular rendering
        </Link>{" "}
        (current APIs)
      </div>
    </div>
  ) : (
    <ErrorRetry which="course" />
  );
};
Course.propTypes = {
  courseId: PropTypes.string.isRequired
};

const NextLesson = ({ courseId, ...remainingProps }) => {
  const lessonData = NextLessonResource.read(cache, courseId);
  return lessonData && !lessonData.error ? (
    <NextLessonDisplay data={lessonData} {...remainingProps} />
  ) : (
    <ErrorRetry which="next lesson" />
  );
};
NextLesson.propTypes = {
  courseId: PropTypes.string.isRequired
};

const SuspenseCoursesContainer = ({ courseId }) => (
  <Fragment>
    <Placeholder delayMs={350} fallback={<Spinner />}>
      <Course courseId={courseId} />
    </Placeholder>
  </Fragment>
);
SuspenseCoursesContainer.propTypes = {
  courseId: PropTypes.string
};
SuspenseCoursesContainer.defaultProps = {
  courseId: undefined
};

export default SuspenseCoursesContainer;
