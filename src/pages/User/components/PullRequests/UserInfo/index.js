import React from 'react';
import PropTypes from 'prop-types';

import { TOTAL_PR_COUNT, TOTAL_OTHER_PR_COUNT } from '../../../../../config';
import PullRequestCount from './PullRequestCount';
import ResultMessage from './ResultMessage';
import UserImage from './UserImage';
import MotivationalMessage from './MotivationalMessage';

const UserInfo = ({ username, userImage, pullRequestCount, otherReposCount }) => (
  <div className="pb-2 flex flex-wrap justify-center content-center rounded mx-auto overflow-hidden w-5/6 lg:w-1/2">
    <div className="mx-4">{userImage && <UserImage userImage={userImage} username={username} />}</div>
    <div className="flex flex-col  flex-wrap justify-center content-center">
      <div className="flex flex-wrap justify-center content-center">
        <div
          className="flex flex-wrap justify-center content-center flex-col"
          style={pullRequestCount >= TOTAL_PR_COUNT ? completeMark : incompleteMark}
        >
          <PullRequestCount pullRequestCount={pullRequestCount} pullRequestAmount={TOTAL_PR_COUNT} />
          <ResultMessage message="Total PRs" />
        </div>
        <div
          className="flex flex-wrap justify-center content-center flex-col"
          style={otherReposCount >= TOTAL_OTHER_PR_COUNT ? completeMark : incompleteMark}
        >
          <PullRequestCount pullRequestCount={otherReposCount} pullRequestAmount={TOTAL_OTHER_PR_COUNT} />
          <ResultMessage message="Other Repo PRs" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center content-center flex-col">
        <MotivationalMessage pullRequestCount={pullRequestCount} otherReposCount={otherReposCount} />
      </div>
    </div>
  </div>
);

const incompleteMark = {
  color: '#133370'
};

const completeMark = {
  color: 'green'
};

UserInfo.propTypes = {
  username: PropTypes.string.isRequired,
  userImage: PropTypes.string.isRequired,
  pullRequestCount: PropTypes.number.isRequired,
  otherReposCount: PropTypes.number.isRequired
};

export default UserInfo;
