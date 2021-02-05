/* eslint-disable */
import React from 'react';
import { string, element, bool, oneOf, shape, arrayOf } from 'prop-types';
import styled from '@emotion/styled';
import { C_LUNAR, C_EBON, C_METAL } from '@bbc/psammead-styles/colours';
import {
  GEL_SPACING,
} from '@bbc/gel-foundations/spacings';
import {
  GEL_MARGIN_BELOW_400PX,
  GEL_MARGIN_ABOVE_400PX,
} from '@bbc/gel-foundations/breakpoints';
import { getSansRegular } from '@bbc/psammead-styles/font-styles';
import { getBrevier, GEL_FF_REITH_SANS } from '@bbc/gel-foundations/typography';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';

const ltrRtl = (ltrValue, rtlValue) => ({ dir }) =>
  dir === 'ltr' ? ltrValue : rtlValue;

const topicTagParent = `
  background-color: ${C_LUNAR};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 8px;

  & a {
    display: flex;
    text-decoration: none;
    color: ${C_EBON};

    &:hover {
      text-decoration: underline;
    }
    &:visited {
      color: ${C_METAL};
    }
  }
`

const TopicsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0;
  padding: 0;
  ${ltrRtl('padding-right', 'padding-left')}: ${GEL_SPACING};
`;

const TopicTagListItem = styled.li`
  ${({ service }) => getSansRegular(service)}
  ${({ script }) => script && getBrevier(script)}
  
  ${ltrRtl('margin-left', 'margin-right')}: ${GEL_SPACING};
  min-height: ${({ service }) => service === 'arabic' || service === 'burmese' ? '34px': '32px'};

  & a {
    padding: ${({ service }) => service === 'arabic' || service === 'burmese' ? '4px 7px': '6px 7px'};
  }

  ${topicTagParent}

`;

const SingleTopicTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
`;

const SingleTopicTagItem = styled.div`
  ${({ service }) => getSansRegular(service)}
  ${({ script }) => script && getBrevier(script)}
  margin-left: ${GEL_SPACING};
  margin-right: ${GEL_SPACING};
  min-height: ${({ service }) => service === 'arabic' || service === 'burmese' ? '34px': '32px'};

  & a {
    padding: ${({ service }) => service === 'arabic' || service === 'burmese' ? '4px 7px': '6px 7px'};
  }

  ${topicTagParent}
`;

export const TopicTag = ({ topicName, topicLink }) => (
    <a href={topicLink}>{topicName}</a>
);



export const TopicTags = ({
  dir,
  children,
  script,
  service,
}) => {

  console.log(children);

  const hasMultipleChildren = children.length > 1;

  return (
    <>
    {hasMultipleChildren ? (
      <TopicsList dir={dir} role="list" service={service} script={script}>
        {children.map(child => (
          <TopicTagListItem dir={dir} key={child.key} service={service} script={script}>
            {child}
          </TopicTagListItem>
        ))}
      </TopicsList>
    ) : (
      <SingleTopicTagContainer dir={dir} service={service} script={script}>
        <SingleTopicTagItem dir={dir} service={service} script={script}>
          {children}
        </SingleTopicTagItem>
      </SingleTopicTagContainer>
    )}
    </>
)};

TopicTag.propTypes = {
  topicName: string.isRequired,
  topicLink: string.isRequired,
};

TopicTag.defaultProps = {
  topicName: null,
  topicLink: null,
};

TopicTags.propTypes = {
  dir: oneOf(['ltr', 'rtl']),
  children: arrayOf(element),
  script: shape(scriptPropType).isRequired,
  service: string.isRequired
};

TopicTags.defaultProps = {
  dir: 'ltr',
  children: [],
}
